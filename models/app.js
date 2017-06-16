module.exports = {
  state: {
    /* initial values of state inside the model */
    // title: 'Set the title'
    historyPos: 0,
    cmdHistory: [],
    cmdElements: []
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    enterInput: (state, data) => {
      state.cmdHistory.push(data.value)
      return ({ cmdHistory: state.cmdHistory })
    },
    updateInput: (_, data) => ({ title: data.value }),
    increaseHistory: state => {
      if (state.historyPos === state.cmdHistory.length - 1) return ({ historyPos: state.historyPos })
      return ({ historyPos: ++state.historyPos })
    },
    resetHistory: state => ({ historyPos: state.historyPos = 0 }),
    decreaseHistory: state => {
      if (!state.historyPos) return ({ historyPos: state.historyPos })
      return ({ historyPos: --state.historyPos })
    }
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: function (state, data, send, done) {
      // do stuff
    }
    */
  },
  subscriptions: {
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    checkStuff: function (send, done) {
      setInterval(function () {
        send('update', data, function (err) {
          if (err) return done(err)
        })
      }, 1000)
    }
    */
  }
}
