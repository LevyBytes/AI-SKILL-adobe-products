# MarkerValue

Community declaration reference: AfterEffects/26.0.

MarkerValue stores layer-marker data at a specific layer time. It can carry a comment plus optional chapter reference point, Web-page link, or Flash Video cue point metadata.

```typescript
declare class MarkerValue {
    constructor(
    comment: string,
    chapter?: string,
    url?: string,
    frameTarget?: string,
    cuePointName?: string,
    params?: string,
    )
    /* Comment attached to the associated layer. */
    comment: string
    /* Chapter link reference point attached to the associated layer. */
    chapter: string
    /* Flash Video cue point name. */
    cuePointName: string
    /* Marker duration. */
    duration: number
    /* Flash Video cue point category: event or navigation. */
    eventCuePoint: boolean
    /* URL for a Web page associated with the layer. */
    url: string
    /* Frame target inside the Web page named by url. */
    frameTarget: string
    /* Label color for a composition marker or layer marker. */
    label: number
    /* Protected Region option state in the Composition Marker dialog box. */
    protectedRegion: boolean
    /* Gets key-value pairs attached to this marker value. */
    getParameters(): object
    /* Sets key-value pairs attached to this marker value. */
    setParameters(keyValuePairs: object): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
