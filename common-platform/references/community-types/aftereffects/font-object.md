# FontObject

Community declaration reference: AfterEffects/26.0.

```typescript
declare class FontObject {
    /** Variable-font design axis data. */
    readonly designAxesData: { name: string; tag: string; min: number; max: number }[] | undefined
    /* Design vector for variable fonts. */
    readonly designVector: number[] | undefined
    /* Font family name. */
    readonly familyName: string
    /* Font family prefix. */
    readonly familyPrefix: string
    /* Unique font identifier. */
    readonly fontID: number
    /* Complete font name. */
    readonly fullName: string
    /* True when this font exposes design axes. */
    readonly hasDesignAxes: boolean
    /* True when this font comes from Adobe Fonts. */
    readonly isFromAdobeFonts: boolean
    /* True when this font is a substitute. */
    readonly isSubstitute: boolean
    /* File-system location for the font. */
    readonly location: string
    /* Native family name for the font. */
    readonly nativeFamilyName: string
    /* Native full name for the font. */
    readonly nativeFullName: string
    /* Native style name for the font. */
    readonly nativeStyleName: string
    /* FontObject entries sharing this font's dictionary. */
    readonly otherFontsWithSameDict: FontObject[]
    /* Font PostScript name. */
    readonly postScriptName: string
    /* Font style name. */
    readonly styleName: string
    /* Technology used by this font. */
    readonly technology: CTFontTechnology
    /* Font type. */
    readonly type: CTFontType
    /* Font version string. */
    readonly version: string
    /* Script types supported by this font. */
    readonly writingScripts: CTScript[]
    /* Checks whether charString is available in the current font. */
    hasGlyphsFor(charString: string): boolean
    /* True when this Font Object shares the variable font used by the Font object receiving the call. */
    hasSameDict(fontObject: FontObject): boolean
    //* Returns the font weight name associated with its vector */
    postScriptNameForDesignVector(vectorValues?: number[]): string | null
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
