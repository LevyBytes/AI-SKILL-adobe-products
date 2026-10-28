# PrintJobOptions

Community declaration reference: Illustrator/2022.

Specifies the print job options.

```typescript
declare class PrintJobOptions {
    /**
    - Specifies: Artboard Range to be printed if PrintAllArtboards is false.
      */
      static artboardRange: string
    /**

    - Specifies the bitmap resolution.
      */
      static bitmapResolution: number
    /**

    - Controls whether to collate print pages.
      */
      static collate: boolean
    /**

    - Specifies the number of copies to print.
      */
      static copies: number
    /**

    - Specifies the layers/objects to be printed.
      */
      static designation: PrintArtworkDesignation
    /**

    - Specifies the file to be printed to.
      */
      static file: File
    /**

    - Specifies the print job name.
      */
      static name: string
    /**

    - Controls whether to print all artboards.
      */
      static printAllArtboards: boolean
    /**

    - Specifies the printing bounds.
      */
      static printArea: PrintingBounds
    /**

    - Controls whether to print as bitmap.
      */
      static printAsBitmap: boolean
    /**

    - Prints pages in reverse order.
      */
      static reversePages: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
