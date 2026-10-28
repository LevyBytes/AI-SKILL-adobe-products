# ArtLayer.applySmartBlur

Community declaration reference: Photoshop/2015.5.

Runs the smart blur filter.
@param radius Blur radius. Range: 0 - 1000.
@param threshold Blur threshold. Range: 0 - 1000.
@param blurQuality Smooth-versus-grainy quality setting for the blur.
@param mode SmartBlurMode option.

```typescript
declare class ArtLayer extends Layer {
    applySmartBlur(
      radius: number,
      threshold: number,
      blurQuality: SmartBlurQuality,
      mode: SmartBlurMode,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
