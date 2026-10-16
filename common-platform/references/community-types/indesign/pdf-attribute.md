# PDFAttribute

Community declaration reference: InDesign/2023.

Attributes used for PDFs.

```typescript
declare class PDFAttribute extends Preference {
    /**
    - Page number from the PDF document page being placed.
      */
      readonly pageNumber: number
    /**

    - Cropping type to use.
      */
      readonly pdfCrop: PDFCrop
    /**

    - When true, the PDF background remains transparent.
      */
      readonly transparentBackground: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
