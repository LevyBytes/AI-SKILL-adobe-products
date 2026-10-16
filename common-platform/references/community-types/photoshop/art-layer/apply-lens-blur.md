# ArtLayer.applyLensBlur

Community declaration reference: Photoshop/2015.5.

Runs the lens blur filter.
@param source Depth-map source.
@param focalDistance Depth-map blur focal distance in pixels. RangeL 0 to 255. Only valid when 'source' is transparency or layer mask.
@param invertDepthMap When true, reverses the depth map.
@param shape Iris geometry.
@param radius Iris radius. Range: 0 to 100.
@param bladeCurvature Iris blade curvature. Range: 0 to 100.
@param rotation Iris rotation in degrees. Range: 0 to 360.
@param brightness Specular-highlight brightness. Range: 0 to 100.
@param threshold Specular-highlight threshold. Range: 0 to 255.
@param amount Noise amount. Range: 0 to 100.
@param distribution NoiseDistribution value used for noise.
@param monochromatic When true, produces monochrome noise.

```typescript
declare class ArtLayer extends Layer {
    applyLensBlur(
      source?: DepthMapSource,
      focalDistance?: number,
      invertDepthMap?: boolean,
      shape?: Geometry,
      radius?: number,
      bladeCurvature?: number,
      rotation?: number,
      brightness?: number,
      threshold?: number,
      amount?: number,
      distribution?: NoiseDistribution,
      monochromatic?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
