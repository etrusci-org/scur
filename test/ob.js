import { Scur } from '../js/scur.js'

Scur.s = 'your_secret_extra_string'

let expect = '=cmbpJHdz9VYyRHel9FdlJ3YlN3XyV3b51WYpxGdvpTauZ2bAVGeh1GcsVmLvJ3Z/MXdipWZjRXPIVGbs9WJyAzYyVXZsViMwc3byxGZ'
let output = Scur.ob('mailto:info@example.org?subject=Hello%20cruel%20world')

console.log('expect  :', expect)
console.log('output  :', output)
console.log('success :', expect === output)
