// eslint-disable-next-line @typescript-eslint/no-var-requires
const helper = require('../src/index.ts').default

const reComponentName = (title: string, fileName: string) =>
  `el-${fileName
    .trimEnd()
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()}`

const reDocUrl = (fileName: any, header: any) => {
  const docs =
    'https://j.jdcloud.com/jelement-next/jelement-docs/dev/index.html#/zh-CN/component/'

  return `${docs}${fileName}`
}

const reWebTypesSource = (title: string) => {
  const symbol = `El${title
    .replaceAll(/-/g, ' ')
    .replaceAll(/^\w|\s+\w/g, (item) => {
      return item.trim().toUpperCase()
    })}`

  return { symbol }
}

const reAttribute = (value: string, key: string) => {
  const str = value
    .replace(/^\*\*(.*)\*\*$/, (_: any, item: any) => item)
    .replace(/^`(.*)`$/, (_: any, item: any) => item)
    .replaceAll(/<del>.*<\/del>/g, '')

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Attribute') {
    return str
      .replaceAll(/\s*[\\*]\s*/g, '')
      .replaceAll(/\s*<.*>\s*/g, '')
      .replaceAll(/\s*\(.*\)\s*/g, '')
      .replaceAll(/\B([A-Z])/g, '-$1')
      .toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `el-${str
          .replaceAll(/\s*\/\s*/g, '/el-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

const params = {
  name: 'test',
  version: '1.0.0',
  docStartText: 'Attributes',
  entry: 'test/*.md',
  outDir: 'dist',
  reComponentName,
  reDocUrl,
  reAttribute,
  reWebTypesSource,
  space: 2,
  props: 'Attributes',
  propsName: 'Attribute',
  propsOptions: 'Accepted Values',
  eventsName: 'Event Name',
  tableRegExp:
    /#+\s+(.*\s*Attributes|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
}

//helper(params)
helper({ ...params, onlyDoc: true })
