# ImportedPage

Community declaration reference: InDesign/2023.

Represents an imported InDesign page.

```typescript
declare class ImportedPage extends Graphic {
    /**
    - Settings for clipping paths.
      */
      readonly clippingPath: ClippingPathSettings
    /**

    - Settings for graphic layer options.
      */
      readonly graphicLayerOptions: GraphicLayerOption
    /**

    - Controls how an imported InDesign page is cropped; read-only on page items.
      */
      readonly importedPageCrop: ImportedPageCropOptions
    /**

    - Selects the InDesign document page to import; read-only on page items.
      */
      readonly pageNumber: number
    /**

    - Settings for PDF attributes.
      */
      readonly pdfAttributes: PDFAttribute
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
