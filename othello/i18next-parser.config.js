module.exports = {
  defaultNamespace: 'translation', // file names space this as main, about, etc
  lexers: {
    jsx: ['JsxLexer'], // writing jsx
    default: ['JavascriptLexer']
  },
  locales: ['en', 'fr'], // array of locales
  output: 'src/utils/$LOCALE/$NAMESPACE.json', // where to output into
  input: ['src/pages/main/*.jsx'] // array of globs that tell you where to look for source files
}
