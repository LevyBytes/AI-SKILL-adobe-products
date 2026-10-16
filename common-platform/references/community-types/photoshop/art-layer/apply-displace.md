# ArtLayer.applyDisplace

Community declaration reference: Photoshop/2015.5.

Runs the displace filter.
@param horizontalScale Horizontal distortion value. Range: -999 to 999.
@param verticalScale Vertical distortion value. Range: -999 to 999.
@param displacementType DisplacementMapType choice for the displacement.
@param undefinedAreas Handling for areas that are not distorted.
@param displacementMapFile Image-map file used for the distortion.

```typescript
declare class ArtLayer extends Layer {
    applyDisplace(
      horizontalScale: number,
      verticalScale: number,
      displacementType: DisplacementMapType,
      undefinedAreas: UndefinedAreas,
      displacementMapFile: File,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
