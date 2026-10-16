# ArtLayer.applyShear

Community declaration reference: Photoshop/2015.5.

Runs the shear filter.
@param curve Shear curve defined as x,y point pairs, using the format [[x1, y1],[x2, y2]]. Any count of coordinate pairs is allowed.
@param undefinedAreas Handling for blank regions created by the distortion.

```typescript
declare class ArtLayer extends Layer {
    applyShear(curve: any[], undefinedAreas: UndefinedAreas): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
