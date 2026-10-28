# DCS1_SaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a Photoshop DCS 1.0-format document.

```typescript
declare class DCS1_SaveOptions {
    /**
    - DCS type.
      */
      DCS: DCSType
    /**

    - When true, the document embeds the color profile.
      */
      embedColorProfile: boolean
    /**

    - Encoding type used for the document.
      */
      encoding: SaveEncoding
    /**

    - When true, halftone screen data is included.
      */
      halftoneScreen: boolean
    /**

    - When true, image interpolation is used.
      */
      interpolation: boolean
    /**

    - Preview type.
      */
      preview: Preview
    /**

    - When true, transfer functions are included to compensate for dot gain between the image and film.
      */
      transferFunction: boolean
    /**

    - When true, vector data is included. Applies only if the document contains vector data (un-rasterized text).
      */
      vectorData: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
