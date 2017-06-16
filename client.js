const choo = require('choo')
const sf = require('sheetify')
const app = choo()
const title = 'CMD'

sf('./assets/sakura.css', { global: true })

app.model(require('./models/app'))

app.router(['/', require('./pages/home')])

const tree = app.start()

document.title = title
document.body.appendChild(tree)
