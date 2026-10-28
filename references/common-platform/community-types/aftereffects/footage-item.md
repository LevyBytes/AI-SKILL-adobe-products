# FootageItem

Community declaration reference: AfterEffects/26.0.

FootageItem represents imported project footage as shown in the Project panel. In a project's item collection, access these items by position index number.

```typescript
declare class FootageItem extends AVItem {
    /** Footage source file. */
    readonly file: File | null
    /* Settings associated with this footage item. */
    readonly mainSource: FootageSource
    /* Shows the footage in a Footage panel. */
    openInViewer(): Viewer | null
    /* Replaces one footage file with another. */
    replace(file: File): void
    /* Uses a placeholder object as replacement footage. */
    replaceWithPlaceholder(
    name: string,
    width: number,
    height: number,
    frameRate: number,
    duration: number,
    ): void
    /* Uses an image sequence as replacement footage. */
    replaceWithSequence(file: File, forceAlphabetical: boolean): void
    /* Uses a solid as replacement footage. */
    replaceWithSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    ): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
