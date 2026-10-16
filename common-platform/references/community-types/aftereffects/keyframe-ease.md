# KeyframeEase

Community declaration reference: AfterEffects/26.0.

KeyframeEase stores AE property keyframe-ease settings. Speed and influence values set through the property's setTemporalEaseAtKey method define the ease.

```typescript
declare class KeyframeEase {
    constructor(speed: number, influence: number)
    /* Speed value for a keyframe. */
    speed: number
    /* Influence value for a keyframe. */
    influence: number
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
