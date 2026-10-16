# PageItem.transform

Community declaration reference: Illustrator/2022.

Transform art object(s) with a transformation matrix.
@param transformationMatrix Transformation matrix applied to the objects.
@param changePositions Whether art-object positions and orientations should change.
@param changeFillPatterns Whether path fill patterns are transformed.
@param changeFillGradients Whether path fill gradients are transformed.
@param changeStrokePattern Whether path stroke patterns are transformed.
@param changeLineWidths Amount to scale line widths, expressed as a percentage.
@param transformAbout Point on the art item's bounding box used for scale and rotation operations.

```typescript
declare class PageItem {
    transform(
      transformationMatrix: Matrix,
      changePositions?: boolean,
      changeFillPatterns?: boolean,
      changeFillGradients?: boolean,
      changeStrokePattern?: boolean,
      changeLineWidths?: number,
      transformAbout?: Transformation,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
