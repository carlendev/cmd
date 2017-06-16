module.exports = {
  state: {
    /* initial values of state inside the model */
    // title: 'Set the title'
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    update: (state, data) => ({ title: data.value })
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
