# Text.createThumbnailWithProperties

Community declaration reference: InDesign/2023.

Creates a thumbnail for selected text with the supplied properties.
@param previewText Sample text to use.
@param pointSize Font-size value for text, measured in points.
@param space RGB, CMYK, or LAB color space.
@param colorValue Color values.
@param to Path for the exported file.

```typescript
declare class Text {
    createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
