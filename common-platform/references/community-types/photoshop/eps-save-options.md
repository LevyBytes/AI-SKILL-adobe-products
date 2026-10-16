# EPSSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for an EPS-format document.

```typescript
declare class EPSSaveOptions {
    /**
    - When true, the document embeds the color profile.
      */
      embedColorProfile: boolean
    /**

    - Encoding type used for the document.
      */
      encoding: SaveEncoding
    /**

    - When true, the halftone screen is included.
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

    - When true, PostScript color management is used.
      */
      psColorManagement: boolean
    /**

    - When true, transfer functions are included to compensate for dot gain between the image and film.
      */
      transferFunction: boolean
    /**

    - When true, white areas display as transparent. Valid only for documents in BitMap mode.
      */
      transparentWhites: boolean
    /**

    - When true, vector data is included. Applies only if the document contains vector data (un-rasterized text).
      */
      vectorData: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
