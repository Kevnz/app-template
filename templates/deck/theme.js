import theme from 'mdx-deck/themes'

const yellow = '#ffd500'

export default {
  ...theme,
  font: '"Roboto Condensed", system-ui, sans-serif',
  weights: [400, 700],
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: '#000',
    background: yellow,
    link: '#333',
    pre: yellow,
    preBackground: '#000',
    code: yellow,
    codeBackground: '#000'
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 700
  },
  blockquote: {
    fontWeight: 700
  },
  pre: {
    textAlign: 'left'
  }
}