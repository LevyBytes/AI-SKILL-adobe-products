# GenericPDFOpenOptions

Community declaration reference: Photoshop/2015.5.

Options accepted when opening a generic PDF document.

```typescript
declare class GenericPDFOpenOptions extends OpenOptions {
    /**
    - When true, anti-aliasing is enabled.
      */
      antiAlias: boolean
    /**

    - Bits used for each channel.
      */
      bitsPerChannel: BitsPerChannelType
    /**

    - DEPRECATED.
      */
      constrainProportions: boolean
    /**

    - Cropping method selection.
      */
      cropPage: CropToType
    /**

    - DEPRECATED.
      */
      height: UnitValue | number
    /**

    - Document mode setting.
      */
      mode: OpenDocumentMode
    /**

    - Document name.
      */
      name: string
    /**

    - Number of the 3d object that will be opened.
      */
      object: number
    /**

    - Page or image number selected for opening.
      */
      page: number
    /**

    - Document resolution, in pixels per inch.
      */
      resolution: number
    /**

    - When true, warnings that occur while opening are suppressed.
      */
      suppressWarnings: boolean
    /**

    - When true, the page property value is treated as a page number. When false, that value identifies an image number.
      */
      use3DObjectNumber: boolean
    /**

    - When true, the page property value is treated as a page number. When false, that value identifies an image number.
      */
      usePageNumber: boolean
    /**

    - DEPRECATED.
      */
      width: UnitValue | number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
