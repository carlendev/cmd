const html = require('choo/html')

module.exports = (state, prev, send) => {
  const updateInput = e => send('updateInput', { value: e.target.value })
  return html`
    <main>
      <h3>${state.title}</h3>
      <input type="text" oninput=${updateInput} class="cmdInput"/>
    </main>
  `
}
