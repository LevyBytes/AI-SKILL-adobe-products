# Text.createStyleThumbnailWithProperties

Community declaration reference: InDesign/2023.

Creates a thumbnail for selected text using the applied style, overrides, and supplied properties.
@param previewText Sample text to use.
@param pointSize Font-size value for text, measured in points.
@param space RGB, CMYK, or LAB color space.
@param colorValue Color values.
@param to Path for the exported file.
@param charOrParaStyle Style type that should be applied.

```typescript
declare class Text {
    createStyleThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File, charOrParaStyle: StyleType): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
