// Element: cmdInput 
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

const cmdInput = send => {
  const updateInput = e => send('updateInput', { value: e.target.value })
  return html`
    <div>
      <input type="text" oninput=${updateInput} class="cmdInput"/>
    </div>`
}
 
module.exports = cmdInput
