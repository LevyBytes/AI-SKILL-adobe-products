# FontsObject

Community declaration reference: AfterEffects/26.0.

```typescript
declare class FontsObject {
    readonly allFonts: FontObject[][]
    readonly fontsDuplicateByPostScriptName: FontObject[]
    readonly fontServerRevision: number
    readonly fontsWithDefaultDesignAxes: FontObject[]
    readonly missingOrSubstitutedFonts: FontObject[]
    favoriteFontFamilyList: string[] | undefined
    freezeSyncSubstitutedFonts: boolean
    mruFontFamilyList: string
    substitutedFontReplacementMatchPolicy: SubstitutedFontReplacementMatchPolicy
    getCTScriptForString(charString: string, preferredCTScript: CTScript): { chars: number; ctScript: CTScript }[]
    getDefaultFontForCTScript(ctScript: CTScript): FontObject
    getFontByID(id: string): FontObject | undefined
    getFontsByFamilyNameAndStyleName(familyName: string, styleName: string): FontObject[] | undefined
    getFontsByPostScriptName(postscriptName: string): FontObject[] | undefined
    pollForAndPushNonSystemFontFoldersChanges(): boolean
    setDefaultFontForCTScript(ctScript: CTScript, font: FontObject | null): boolean
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
