# Scur

Make it a little bit harder for bots to farm your email address (or any string).

---

## Idea

Lazy load your email address into your website. This functionality is not included yet tho.

```html
<!-- use span elements with obscured email addresses instead of anchor tags... -->
<span class="scur" data-hash="=0WYpxGdvpTauZ2bAVGeh1GcsVmLvJ3Z/MXdipWZjRXPIVGbs9WJyAzYyVXZsViMwc3byxGZ">
<!-- ...then replace the span.scur elements with an anchor tag that has the deobscured email address in it -->
```

---

## Usage

```js
// import script
import { Scur } from './js/scur.js'

Scur.s = 'your secret salt string'

// obscure
let foo = Scur.ob('mailto:info@example.org?subject=Hello%20cruel%20world')

// deobscure
let foo = Scur.deob('=cmbpJHdz9VYyRHel9FdlJ3YlN3XyV3b51WYpxGdvpTauZ2bAVGeh1GcsVmLvJ3Z/MXdipWZjRXPIVGbs9WJyAzYyVXZsViMwc3byxGZ')
```
