interface ScurInterface {
    // Bonus salt string to add before obscuring.
    s: string

    // Obscure a string
    ob(data: string): string

    // Deobscure a string
    deob(data: string): string

    // Deobscure HTML elements
    deobElements(): void

    // Reverse a string
    _r(data: string): string
}
