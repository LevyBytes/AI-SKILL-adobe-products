# PageItem.convertShape

Community declaration reference: InDesign/2023.

Changes the PageItem into another shape.
@param given New shape for the PageItem.
@param numberOfSides Side count for the resulting polygon. (Range: 3 to 100)
@param insetPercentage Inset percentage for the star-style polygon result. (Range: 0.0 to 100.0)
@param cornerRadius Corner radius assigned to the rectangle result.

```typescript
declare class PageItem {
    convertShape(given: ConvertShapeOptions, numberOfSides: number, insetPercentage: number, cornerRadius: number | string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
