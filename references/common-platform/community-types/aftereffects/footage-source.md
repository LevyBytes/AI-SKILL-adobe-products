# FootageSource

Community declaration reference: AfterEffects/26.0.

FootageSource stores source-footage details. It serves as the mainSource of a FootageItem, or as the proxySource of a CompItem or FootageItem.

```typescript
declare class FootageSource {
    /** Footage source file. */
    readonly file: File | null
    /* True when the footage is a still image. */
    readonly isStill: boolean
    /* Effective frame rate shown and rendered in After Effects compositions. */
    readonly displayFrameRate: number
    /* True when a footage clip or proxy has an alpha channel. */
    hasAlpha: boolean
    /* Alpha-channel mode. */
    alphaMode: AlphaMode
    /* Color value used for premultiplication. */
    premulColor: ThreeDColorValue
    /* True requests inversion of the alpha channel on the footage clip or proxy. */
    invertAlpha: boolean
    /* Field separation type. */
    fieldSeparationType: FieldSeparationType
    /* Field-separation quality behavior for non-still footage. */
    highQualityFieldSeparation: boolean
    /* Footage pulldown type. */
    removePulldown: PulldownPhase
    /* Number of loops for an image sequence. */
    loop: number
    /* Native frame rate for the footage. */
    nativeFrameRate: number
    /* Frame rate that footage should conform to. */
    conformFrameRate: number
    /* Guesses the alphaMode value. */
    guessAlphaMode(): void
    /* Guesses the pulldownType value. */
    guessPulldown(method: PulldownMethod): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
