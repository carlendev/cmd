const html = require('choo/html')
const cmdInput= require('../elements/cmd-input')
const { exec } = require('littlelisp')

module.exports = (state, prev, send) => {
  return html`
    <main>
      <h3>${state.title}</h3>
      <div id="cmdContainer">
        <ul>
          ${state.cmdHistory.map(e => html`<li>${e}</li>`)}
        </ul>
      </div>
      <div id="inputContainer">${cmdInput(state, send)}</div>
    </main>
  `
}
