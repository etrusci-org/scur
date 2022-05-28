
# Scur

Make it a little bit harder for bots to farm your email address (or any string) on your website.

---

## Idea

Don't put your plain text email address in your page source. Instead lazy load your email address (for clients that have JavaScript enabled).

---

## Usage

Create an obscured string with `Scur.ob()`.

```javascript
Scur.ob('mailto:info@example.org')
Scur.ob('just some text for a div')
```

Then add elements to your page source.

```html
<a data-scur="OBSCURED_STRING_HERE">Email<noscript> (JavaScript required)</noscript></a>
<div data-scur="OBSCURED_STRING_HERE">Just text<noscript> (JavaScript required)</noscript></div>
```

Finally when your page is fully loaded, just run `Scur.deobElements()` once.
For anchor elements a `href` attribute will be added with the deobscured string as its value.
For other elements the deobscured string will replace `innerHTML`.

```html
<!-- What the client sees after Scur.deobElements() was run: -->
<a href="mailto:info@example.org">Email<noscript> (JavaScript required)</noscript></a>
<div>just some text for a div</div>
```

---

## Attributes / Methods

```javascript
// Bonus salt string to add before obscuring.
// If you change this the output of Scur.ob() will be different.
Scur.s: string

// Obscure a string.
Scur.ob(data: string): string

// Deobscure a string.
Scur.deob(data: string): string

// Deobscure HTML elements.
Scur.deobElements(): void

// Reverse a string.
Scur._r(data: string): string
```
