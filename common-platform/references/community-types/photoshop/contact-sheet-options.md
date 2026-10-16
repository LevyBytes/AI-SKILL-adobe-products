# ContactSheetOptions

Community declaration reference: Photoshop/2015.5.

Settings available for a contact sheet.

```typescript
declare class ContactSheetOptions {
    /**
    - When true, lays out images horizontally first.
      */
      static acrossFirst: boolean
    /**

    - When true, rotates images to fit optimally.
      */
      static bestFit: boolean
    /**

    - When true, uses each image filename as its caption.
      */
      static caption: boolean
    /**

    - Contact sheet column count.
      */
      static columnCount: number
    /**

    - When true, merges all layers in the resulting document.
      */
      static flatten: boolean
    /**

    - Font used by captions.
      */
      static font: GalleryFontType
    /**

    - Caption font size.
      */
      static fontSize: number
    /**

    - Resulting document height, in pixels. Range: 100 to 2900.
      */
      static height: number
    /**

    - Horizontal spacing between images, in pixels. Range: 0 to 29000.
      */
      static horizontal: number
    /**

    - Document color mode setting.
      */
      static mode: NewDocumentMode
    /**

    - Document resolution, measured in pixels per inch. Range: 35 to 1200.
      */
      static resolution: number
    /**

    - Contact sheet row count.
      */
      static rowCount: number
    /**

    - When true, spacing between contact sheet images is automatic.
      */
      static useAutoSpacing: boolean
    /**

    - Vertical spacing between images, in pixels. Range: 0 to 29000.
      */
      static vertical: number
    /**

    - Resulting document width, in pixels. Range: 100 to 2900.
      */
      static width: number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
