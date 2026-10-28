# ArtLayer.applyWave

Community declaration reference: Photoshop/2015.5.

Runs the wave filter.
@param generatorNumber Generator count. Range: 1 to 999.
@param minimumWavelength Minimum wave length. Range: 1 to 998.
@param maximumWavelength Maximum wave length. Range: 2 to (minimum wavelength + 1)
@param minimumAmplitude Minimum amplitude. Range: 1 to 998.
@param maximumAmplitude Maximum amplitude. Range: 2 to (minimum amplitude + 1)
@param horizontalScale Horizontal scale percentage. Range: 1 to 100.
@param verticalScale Vertical scale percentage. Range: 1 to 100.
@param waveType WaveType choice.
@param undefinedAreas Handling for blank regions created by the distortion.
@param randomSeed Seed for randomness.

```typescript
declare class ArtLayer extends Layer {
    applyWave(
      generatorNumber: number,
      minimumWavelength: number,
      maximumWavelength: number,
      minimumAmplitude: number,
      maximumAmplitude: number,
      horizontalScale: number,
      verticalScale: number,
      waveType: WaveType,
      undefinedAreas: UndefinedAreas,
      randomSeed: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
