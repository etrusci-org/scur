import { Scur } from '../js/scur.js'

let expect = '=0WYpxGdvpTauZ2bAVGeh1GcsVmLvJ3Z/MXdipWZjRXPIVGbs9WJyAzYyVXZsViMwc3byxGZ'
let output = Scur.ob('mailto:info@example.org?subject=Hello%20cruel%20world')

console.log('expect  :', expect )
console.log('output  :', output)
console.log('success :', expect === output)
