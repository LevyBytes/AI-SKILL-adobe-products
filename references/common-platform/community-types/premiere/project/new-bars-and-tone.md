# Project.newBarsAndTone

Community declaration reference: Premiere/24.0.

@param width Integer.
@param height Integer.
@param timeBase Timebase assigned to the item being created.
@param pixelAspectNumerator Integer; pixel-aspect-ratio numerator.
@param pixelAspectDenominator Integer; pixel-aspect-ratio denominator.
@param audioSampleRate Audio sampling rate.
@param name Project-item name string.

```typescript
declare class Project {
    newBarsAndTone(
        width: number,
        height: number,
        timeBase: number,
        pixelAspectNumerator: number,
        pixelAspectDenominator: number,
        audioSampleRate: number,
        name: string,
        ): boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
