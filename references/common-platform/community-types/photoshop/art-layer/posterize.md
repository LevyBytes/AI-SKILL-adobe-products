# ArtLayer.posterize

Community declaration reference: Photoshop/2015.5.

Sets the per-channel tonal-level count, then maps pixels to the nearest available level.
@param levels Tonal-level count. Range: 2 to 255.

```typescript
declare class ArtLayer extends Layer {
    posterize(levels: number): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
