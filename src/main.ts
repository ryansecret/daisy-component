import fg from 'fast-glob'
import { config } from './config'
import { read } from './read'
import { parse } from './parse'
import { normalize } from './normalize'
import { vetur } from './vetur'
import { webTypes } from './webTypes'
import { write, writeDoc } from './write'
import type { InstallOptions, Options } from './type'
import { start } from 'repl'

export function main(options = {} as InstallOptions) {
  if (!options.entry)
    throw new Error('entry must be a string (non empty) or an array of strings')
  if (!options.outDir) throw new Error('outDir must be a string (non empty)')
  if (!options.name) console.warn('missing property "name"')
  if (!options.version) console.warn('missing property "version"')

  const _options: Options = Object.assign(config, options)
  const files: string[] = fg.sync(_options.entry, _options.fastGlobConfig)
  const docs = []
  const data = files.map((path) => {
    const fileContent = read(path)
    const parseContent = parse(_options, fileContent)
    const content = normalize(_options, parseContent, path)
    if (options.onlyDoc === true) {
      const docIndex = fileContent.indexOf(options.docStartText)
      content.doc = fileContent.substring(
        docIndex + options.docStartText.length,
      )
    }

    return content
  })
  const { tags, attributes } = vetur(_options, data)
  const webTypesData = webTypes(_options, data)
  if (options.onlyDoc !== true) {
    write(_options, 'tags', tags)
    write(_options, 'attributes', attributes)
    write(_options, 'webTypes', webTypesData)
  }

  writeDoc(_options, data)
}
