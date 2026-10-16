# OpenOptionsPDF

Community declaration reference: Illustrator/2022.

Options available when a PDF file is opened.

```typescript
declare class OpenOptionsPDF {
    /**
    - Box selection for placing a multipage document (default: PDF media box).
      */
      pDFCropToBox: PDFBoxType
    /**

    - Page selected when opening a multipage document (default: 1).
      */
      pageToOpen: number
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Object class identifier.
      */
      readonly typename: string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
