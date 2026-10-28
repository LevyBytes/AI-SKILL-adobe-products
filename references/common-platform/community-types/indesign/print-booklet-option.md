# PrintBookletOption

Community declaration reference: InDesign/2023.

Options controlling booklet printing.

```typescript
declare class PrintBookletOption extends Preference {
    /**
    - When true, margins are adjusted automatically to fit the specified printer's marks and bleed area.
      */
      autoAdjustMargins: boolean
    /**

    - Bleed amount between pages.
      */
      bleedBetweenPages: number | string
    /**

    - Booklet type.
      */
      bookletType: BookletTypeOptions
    /**

    - Printed booklet bottom margin.
      */
      bottomMargin: number | string
    /**

    - Creep amount, meaning binding adjustment based on paper thickness, to add.
      */
      creep: number | string
    /**

    - Printed booklet left margin.
      */
      leftMargin: number | string
    /**

    - When true, all margins are made equal to the top margin.
      */
      marginsUniformSize: boolean
    /**

    - Pages selected for printing, given as either an enumeration or a string. In the string form, use a hyphen (-) between page numbers for a range, and use a comma (,) between separate pages.
      */
      pageRange: PageRange | string
    /**

    - When true, blank spreads print.
      */
      printBlankPrinterSpreads: boolean
    /**

    - Printed booklet right margin.
      */
      rightMargin: number | string
    /**

    - Booklet signature size for perfect binding.
      */
      signatureSize: SignatureSizeOptions
    /**

    - Space amount between pages.
      */
      spaceBetweenPages: number | string
    /**

    - Printed booklet top margin.
      */
      topMargin: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
