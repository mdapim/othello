const author = {
  name: 'Jan',
  github: 'jamuhl'
}
i18next.t('key', { author })
// -> "I am Jan"

i18next.t('key', { what: 'i18next', how: 'great' })
// -> "i18next is great"
