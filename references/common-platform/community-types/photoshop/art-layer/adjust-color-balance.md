# ArtLayer.adjustColorBalance

Community declaration reference: Photoshop/2015.5.

Changes color balance for the layer component channels.
@param shadows Shadow adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
@param midtones Midtone adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
@param highlights Highlight adjustments; provide three values in the range -100 to 100 for cyan/red, magenta/green, and yellow/blue when the document mode is CMYK or RGB.
@param preserveLuminosity When true, keeps luminosity unchanged.

```typescript
declare class ArtLayer extends Layer {
    adjustColorBalance(
      shadows?: number[],
      midtones?: number[],
      highlights?: number[],
      preserveLuminosity?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
