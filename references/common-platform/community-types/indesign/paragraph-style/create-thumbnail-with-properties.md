# ParagraphStyle.createThumbnailWithProperties

Community declaration reference: InDesign/2023.

Builds a thumbnail for selected text using supplied properties.
@param previewText Sample text.
@param pointSize Text font size, in points.
@param space RGB, CMYK, or LAB color space.
@param colorValue Color component values.
@param to Export file path.

```typescript
declare class ParagraphStyle {
    createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
