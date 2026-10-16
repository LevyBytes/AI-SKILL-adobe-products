# Document.moveSelectedBezierPointsBy

Community declaration reference: Animate/22.0.

Moves selected Bezier points by the requested amount when the selection contains at least one path with a selected Bezier point.
@param delta Pair of floating-point values giving x and y pixel offsets for the selected Bezier points. For example, ({x:1,y:2}) moves one pixel right and two pixels down.

```typescript
declare class Document {
    moveSelectedBezierPointsBy(delta: Point): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
