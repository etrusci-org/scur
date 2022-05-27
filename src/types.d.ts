interface ScurInterface {
    s: string
    ob(data: string): string
    deob(data: string): string
    deobElements(selector: string='.scur'): void
    _r(data: string): string
}
