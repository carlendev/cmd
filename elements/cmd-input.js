// Element: cmdInput 
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const enter = 13
const arrowUp = 38
const arrowDown = 40

const cmdInput = (state, send) => {
  let prev = null
  
  const onInput = e => send('updateInput', { value: e.target.value })

  const getHistoryValue = e => e.target.value = state.cmdHistory[ state.cmdHistory.length - state.historyPos - 1 ]

  const historyUp = (e, value) => {
    if (prev === null || prev === arrowUp) {
      prev = e.keyCode
      send('increaseHistory')
    }
    else send('resetHistory')
    return getHistoryValue(e)
  }

  const historyDown = (e, value) => {
    if (prev === null || prev === arrowUp) {
        prev = e.keyCode
        send('decreaseHistory')
    }
    return getHistoryValue(e)
  }

  const onKeyUp = e => {
    const value = e.target.value
    if (e.keyCode === arrowUp) return historyUp(e, value)
    if (e.keyCode == arrowDown) return historyDown(e, value)
    if (e.keyCode === enter) return send('enterInput', { value })
  }

  return html`
    <div>
      <input type="text" oninput=${onInput} onkeypress=${onKeyUp} class="cmdInput"/>
    </div>
  `
}
 
module.exports = cmdInput
