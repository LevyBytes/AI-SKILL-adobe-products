# ArtLayer.applyRadialBlur

Community declaration reference: Photoshop/2015.5.

Runs the radial blur filter.
@param amount Blur amount. Range: 1 to 100.
@param blurMethod RadialBlurMethod option.
@param blurQuality Smooth-versus-grainy quality setting for the blur.
@param blurCenter Center position as a unit value.

```typescript
declare class ArtLayer extends Layer {
    applyRadialBlur(
      amount: number,
      blurMethod: RadialBlurMethod,
      blurQuality: RadialBlurQuality,
      blurCenter?: UnitPoint,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
