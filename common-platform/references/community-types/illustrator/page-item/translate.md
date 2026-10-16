# PageItem.translate

Community declaration reference: Illustrator/2022.

Move art object(s) by an offset.
@param deltaX Horizontal transformation.
@param deltaY Vertical transformation.
@param transformObjects Whether art-object positions and orientations are affected.
@param transformFillPatterns Whether path fill patterns are transformed.
@param transformFillGradients Whether path fill gradients are transformed.
@param transformStrokePattern Whether path stroke patterns change.

```typescript
declare class PageItem {
    translate(
      deltaX?: number,
      deltaY?: number,
      transformObjects?: boolean,
      transformFillPatterns?: boolean,
      transformFillGradients?: boolean,
      transformStrokePattern?: boolean,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
