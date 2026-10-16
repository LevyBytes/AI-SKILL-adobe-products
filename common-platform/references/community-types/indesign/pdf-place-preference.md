# PDFPlacePreference

Community declaration reference: InDesign/2023.

Preferences for placing PDF content.

```typescript
declare class PDFPlacePreference extends Preference {
    /**
    - Password required to open the PDF document. Valid only when use security is true. Note: scripts may set this value but cannot read it.
      */
      openDocumentPassword: string
    /**

    - Page number of the PDF document page being placed.
      */
      pageNumber: number
    /**

    - Crop type to apply.
      */
      pdfCrop: PDFCrop
    /**

    - True makes the PDF background transparent.
      */
      transparentBackground: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
