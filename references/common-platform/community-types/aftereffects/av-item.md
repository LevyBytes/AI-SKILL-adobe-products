# AVItem

Community declaration reference: AfterEffects/26.0.

AVItem exposes attributes and methods for audio/visual assets imported into After Effects.

```typescript
declare class AVItem extends Item {
    /** FootageSource used as this item's proxy. */
    readonly proxySource: FootageSource
    /* CompItem objects that reference this item. */
    readonly usedIn: CompItem[]
    /* True when this item includes video. */
    readonly hasVideo: boolean
    /* True when this item includes audio. */
    readonly hasAudio: boolean
    /* True when this item is missing or only a placeholder. */
    readonly footageMissing: boolean
    /* Indicates whether AVItem is valid as an alternate source for Property.setAlternateSource. */
    readonly isMediaReplacementCompatible: boolean
    /* Item width. */
    width: number
    /* Item height. */
    height: number
    /* Item pixel aspect ratio. */
    pixelAspect: number
    /* Item frame rate. */
    frameRate: number
    /* Per-frame duration for this item. */
    frameDuration: number
    /* Complete duration for this item. */
    duration: number
    /* True when this item is using a proxy source. */
    useProxy: boolean
    /* Item current time. */
    time: number
    /* Assigns a proxy file to this item. */
    setProxy(file: File): void
    /* Uses a sequence as this item's proxy. */
    setProxyWithSequence(file: File, forceAlphabetical: boolean): void
    /* Uses a solid as this item's proxy. */
    setProxyWithSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    ): void
    /* Uses a placeholder as this item's proxy. */
    setProxyWithPlaceholder(
    name: string,
    width: number,
    height: number,
    frameRate: number,
    duration: number,
    ): void
    /* Clears this item's proxy. */
    setProxyToNone(): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
