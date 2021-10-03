const db = require("quick.db")

const i = db.get('status')

const b = db.get(`prefix_827474190231797770`)

const c = db.set('prefix_827474190231797770', '!')

console.log(i)
console.log(b)
console.log(c)