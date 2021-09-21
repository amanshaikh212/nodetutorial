//Common JS, every file is module (by default)
//Modules - Encapsulated Code (Only share minimum)


const names = require('./4-FirstModule')
const sayHi = require('./5-Utils')

const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
addValues()


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)