# ArtLayer.adjustLevels

Community declaration reference: Photoshop/2015.5.

Changes levels for the selected channels.
@param inputRangeStart Input levels minimum. Range: 0 to 253.
@param inputRangeEnd Input levels maximum. Range: (input range start + 2) to 253.
@param inputRangeGamma Input levels gamma. Range: 0.10 to 9.99.
@param outputRangeStart Output levels minimum. Range: 0 to 253.
@param outputRangeEnd Output levels upper bound. Range: (output range start + 2) to 253.

```typescript
declare class ArtLayer extends Layer {
    adjustLevels(
      inputRangeStart: number,
      inputRangeEnd: number,
      inputRangeGamma: number,
      outputRangeStart: number,
      outputRangeEnd: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
