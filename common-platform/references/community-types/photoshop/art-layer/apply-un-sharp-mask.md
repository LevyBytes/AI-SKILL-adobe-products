# ArtLayer.applyUnSharpMask

Community declaration reference: Photoshop/2015.5.

Runs the unsharp mask filter.
@param amount Sharpening amount as a percentage. Range: 1 to 500.
@param radius Radius in pixels. Range: 0.1 to 250.0.
@param threshold Threshold for contrast. Range: 0 to 255.

```typescript
declare class ArtLayer extends Layer {
    applyUnSharpMask(amount: number, radius: number, threshold: number): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
