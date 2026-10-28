# PageItem.resize

Community declaration reference: Illustrator/2022.

Resize art object(s).
@param scaleX Horizontal scale percentage (100 = 100%).
@param scaleY Vertical scale percentage (100 = 100%).
@param changePositions Whether art-object positions and orientations should change.
@param changeFillPatterns Whether path fill patterns are transformed.
@param changeFillGradients Whether path fill gradients are transformed.
@param changeStrokePattern Whether path stroke patterns are transformed.
@param changeLineWidths Amount to scale line widths, expressed as a percentage.
@param scaleAbout Point on the art item's bounding box used for the scaling operation.

```typescript
declare class PageItem {
    resize(
      scaleX: number,
      scaleY: number,
      changePositions?: boolean,
      changeFillPatterns?: boolean,
      changeFillGradients?: boolean,
      changeStrokePattern?: boolean,
      changeLineWidths?: number,
      scaleAbout?: Transformation,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
