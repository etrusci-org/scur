import { Scur } from '../js/scur.js'

let expect = 'raboof'
let output = Scur._r('foobar')

console.log('expect  :', expect )
console.log('output  :', output)
console.log('success :', expect === output)
