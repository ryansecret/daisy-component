import { resolve } from 'path'
import { mkdir, writeFileSync } from 'fs'
import type { Options, Tags, Props, WebTypes, NormalizeData } from './type'
import { getComponentsName, getDocUrl } from './utils'

export function write(
  options: Options,
  type: 'tags' | 'attributes' | 'webTypes',
  data: Tags | Props | WebTypes,
): void {
  const path = resolve(options.outDir, options[type])
  const buffer = JSON.stringify(data, null, options.space)

  writeFileRecursive(path, buffer)
}

function writeFileRecursive(path: string, buffer: string) {
  const lastPath = path.substring(0, path.lastIndexOf('/'))

  mkdir(lastPath, { recursive: true }, () => {
    writeFileSync(path, buffer)
  })
}

export function writeDoc(options: Options, data: NormalizeData[]) {
  const path = resolve(options.outDir, 'doc.ts')
  const docMap: any = {}
  for (const item of data) {
    const helpUrl = getDocUrl(options, item.fileName)
    const text = `[jelement-next:${helpUrl}](${helpUrl}) 
     ${item.doc}`

    docMap[getComponentsName(options, item.title, item.fileName, item.path)] =
      text
  }

  const buffer = `export default ${JSON.stringify(docMap)}`
  writeFileRecursive(path, buffer)
}
