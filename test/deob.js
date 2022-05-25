import { Scur } from '../js/scur.js'

let expect = 'mailto:info@example.org?subject=Hello%20cruel%20world'
let output = Scur.deob('=0WYpxGdvpTauZ2bAVGeh1GcsVmLvJ3Z/MXdipWZjRXPIVGbs9WJyAzYyVXZsViMwc3byxGZ')

console.log('expect  :', expect )
console.log('output  :', output)
console.log('success :', expect === output)
