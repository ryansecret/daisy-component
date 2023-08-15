// eslint-disable-next-line @typescript-eslint/no-var-requires
const helper = require('../src/index.ts').default

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

function reComponentName(fileName: string) {
  return (
    'el-' +
    fileName
      .replace(/\B([A-Z])/g, '-$1')
      .replace(/[ ]+/g, '-')
      .toLowerCase()
  )
}

function reWebTypesSource(title: string) {
  const symbol =
    'App' +
    title
      .replace(/-/, ' ')
      .replace(/^\w|\s+\w/g, (item: string) => item.trim().toUpperCase())

  return { symbol }
}

function reDocUrl(fileName: string, header: string) {
  const docs = 'https://you.components/docs/'
  const _header = header ? header.replace(/[ ]+/g, '-') : undefined
  return docs + fileName + (_header ? '#' + _header : '')
}

function reAttribute(str: string, key: string) {
  switch (str) {
    case '':
    case '-':
    case '—':
      return undefined
    case 'v-model':
      return 'model-value'
    default:
      if (key === 'Subtags') {
        return str
          ? str
              .split('/')
              .map((name: string) => reComponentName(name.trim()))
              .join('/')
          : str
      } else {
        return str
      }
  }
}
