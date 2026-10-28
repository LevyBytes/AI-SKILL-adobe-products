# ArtLayer.applyGlassEffect

Community declaration reference: Photoshop/2015.5.

Runs the glass filter.
@param distortion Distortion strength. Range: 0 to 20.
@param smoothness Smoothness setting. Range: 1 to 15.
@param scaling Scaling amount. Range: 50 to 200.
@param invert When true, flips the texture.
@param texture TextureType value to use.
@param textureFile Texture-type source file.

```typescript
declare class ArtLayer extends Layer {
    applyGlassEffect(
      distortion: number,
      smoothness: number,
      scaling: number,
      invert?: boolean,
      texture?: TextureType,
      textureFile?: File,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
