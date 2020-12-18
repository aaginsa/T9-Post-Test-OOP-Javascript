const personLogic = require('./domain/person/person.logic')
const personTypeLogic = require('./domain/personType/personType.logic')
const personCheckLogic = require('./domain/personCheck/personCheck.logic')

var person1 = new personLogic('Andre', '3200000409930001', '1993-09-04')
console.log(person1)
console.log(`Weektype: ${person1.getWeekType()}`)
console.log(`Umur: ${person1.getAge()}`)
console.log('================================')

var personType1 = new personTypeLogic('Aginsa', '3200000410930001', '1993-10-04')
console.log(personType1)
console.log(`Kategori Umur: ${personType1.type()}`)
console.log('================================')

var personCheck1 = new personCheckLogic('andreaginsa', '3200000412930001', '1993-12-04')
console.log(personCheck1)
console.log(`Validity NIK: ${personCheck1.nikIsValid()}`)
console.log(`Validity Date of Birth: ${personCheck1.dobIsValid()}`)
console.log('================================')

