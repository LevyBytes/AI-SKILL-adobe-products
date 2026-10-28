# ArtLayer.applyAddNoise

Community declaration reference: Photoshop/2015.5.

Runs the add noise filter.
@param amount Noise strength as a percentage. Range: 0.1 to 400.0.
@param distribution NoiseDistribution value that selects the noise pattern.
@param monochromatic When true, changes affect only tonal data and leave colors unchanged.

```typescript
declare class ArtLayer extends Layer {
    applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
