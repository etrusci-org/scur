import { Scur } from '../js/scur.js'

Scur.s = 'your own salt string'

let expect = '==QbhlGb09mOp5mZvBUZ4FWbwxWZu8mcn9zc1JmalNGd9gUZsx2blIDMjJXdlxWJyAzdvJHbkl3b1JHIvdnbgMXYsRHIzRncp52Z'
let output = Scur.ob('mailto:info@example.org?subject=Hello%20cruel%20world')

console.log('expect  :', expect)
console.log('output  :', output)
console.log('success :', expect === output)
