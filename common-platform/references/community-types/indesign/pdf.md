# PDF

Community declaration reference: InDesign/2023.

Placed PDF file.

```typescript
declare class PDF extends Graphic {
    /**
    - Settings for the clipping path.
      */
      readonly clippingPath: ClippingPathSettings
    /**

    - Color profile policy applied to CMYK content in a placed vector.
      */
      cmykVectorPolicy: PlacedVectorProfilePolicy
    /**

    - Settings for graphic layer options.
      */
      readonly graphicLayerOptions: GraphicLayerOption
    /**

    - Color profile policy applied to grayscale content in a placed vector.
      */
      grayVectorPolicy: PlacedVectorProfilePolicy
    /**

    - Settings for PDF attributes.
      */
      readonly pdfAttributes: PDFAttribute
    /**

    - Color profile policy applied to RGB content in a placed vector.
      */
      rgbVectorPolicy: PlacedVectorProfilePolicy
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
