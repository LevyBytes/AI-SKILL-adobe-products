# ArtLayer.applyDustAndScratches

Community declaration reference: Photoshop/2015.5.

Runs the dust and scratches filter.
@param radius Pixel search radius used to find dissimilar pixels. Range: 1 to 16.
@param threshold Dissimilarity threshold required before pixels are removed. Range: 0 to 255.

```typescript
declare class ArtLayer extends Layer {
    applyDustAndScratches(radius: number, threshold: number): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
