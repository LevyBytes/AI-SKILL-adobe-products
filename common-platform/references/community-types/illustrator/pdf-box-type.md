# PDFBoxType

Community declaration reference: Illustrator/2022.

PDF crop-box selector.

```typescript
declare enum PDFBoxType {
    /**
    - Crop to ArtBox. ArtBox marks the page creator's intended meaningful content bounds, including possible white space.
      */
      PDFARTBOX = 0,
    /**

    - Crop to BleedBox. BleedBox gives the clipping region for page contents during production output.
      */
      PDFBLEEDBOX = 3,
    /**

    - Crop to Bounding Box. Bounding Box encloses every text, graphic, and image element on the page.
      */
      PDFBOUNDINGBOX = 5,
    /**

    - Crop to CropBox. CropBox identifies the page area used for display and printing.
      */
      PDFCROPBOX = 1,
    /**

    - Crop to MediaBox. MediaBox describes the page's natural size, such as the dimensions of A4 sheet of paper.
      */
      PDFMEDIABOX = 4,
    /**

    - Crop to TrimBox. TrimBox defines how the page content is positioned for imposition.
      */
      PDFTRIMBOX = 2,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
