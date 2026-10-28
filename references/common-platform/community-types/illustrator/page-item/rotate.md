# PageItem.rotate

Community declaration reference: Illustrator/2022.

Rotate art object(s).
@param angle Rotation angle in degrees; rotation runs counter-clock wise.
@param changePositions Whether art-object positions and orientations should change.
@param changeFillPatterns Whether path fill patterns are transformed.
@param changeFillGradients Whether path fill gradients are transformed.
@param changeStrokePattern Whether path stroke patterns are transformed.
@param rotateAbout Bounding-box point used as the rotation origin.

```typescript
declare class PageItem {
    rotate(
      angle: number,
      changePositions?: boolean,
      changeFillPatterns?: boolean,
      changeFillGradients?: boolean,
      changeStrokePattern?: boolean,
      rotateAbout?: Transformation,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
