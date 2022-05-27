# Scur

Make it a little bit harder for bots to farm your email address (or any string).

---

## Idea

Don't put your plain text email address into the source code. Instead lazy load your email address (for clients that have JavaScript enabled).

Use anchor elements without `href` attribute, add obscured email address hash in `data-hash`.
Then use `Scur.deobElements()` to add `href` attributes with deobscured email addresses.

```html
<!-- Before deobElements() -->
<a class="scur" data-hash="=0WYpxGdvpDdlNHdu8mblBUZ4FWbwxWZu8mcndDN1Q2MygTZkJzN3QjNjFGO4AzMjRjYhFTN3EDZkdzM">Email<noscript> (JavaScript required)</noscript></a>

<!-- After deobElements() -->
<a class="scur" href="mailto:test.one@example.org">Email<noscript> (JavaScript required)</noscript></a>
```

---

## Usage

Also see [test/deobElements.html](test/deobElements.html).

```js
// Import script
import { Scur } from './js/scur.js'

// Optionally set a new salt string
Scur.s = 'your own salt string'

// Obscure
// returns: ==QbhlGb09mOp5mZvBUZ4FWbwxWZu8mcn9zc1JmalNGd9gUZsx2blIDMjJXdlxWJyAzdvJHbkl3b1JHIvdnbgMXYsRHIzRncp52Z
let foo = Scur.ob('mailto:info@example.org?subject=Hello%20cruel%20world')

// Deobscure
// returns: mailto:info@example.org?subject=Hello%20cruel%20world
let foo = Scur.deob('==QbhlGb09mOp5mZvBUZ4FWbwxWZu8mcn9zc1JmalNGd9gUZsx2blIDMjJXdlxWJyAzdvJHbkl3b1JHIvdnbgMXYsRHIzRncp52Z')

// Process elements on page
// default selector = .scur
Scur.deobElements()
Scur.deobElements('.customSelector')
```
