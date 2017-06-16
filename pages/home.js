const html = require('choo/html')
const cmdInput= require('../elements/cmd-input')

module.exports = (state, prev, send) => {
  return html`
    <main>
      <h3>${state.title}</h3>
      ${cmdInput(send)}
    </main>
  `
}
