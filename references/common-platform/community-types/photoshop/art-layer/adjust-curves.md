# ArtLayer.adjustCurves

Community declaration reference: Photoshop/2015.5.

Alters the selected channel tonal range with as many as fourteen points.
@param curveShape Curve points; the point count must be between 2 and 14.

```typescript
declare class ArtLayer extends Layer {
    adjustCurves(curveShape: (Point | [number, number])[]): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
