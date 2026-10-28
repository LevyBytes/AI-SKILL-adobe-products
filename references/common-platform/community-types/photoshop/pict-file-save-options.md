# PICTFileSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a PICT-format document.

```typescript
declare class PICTFileSaveOptions {
    /**
    - When true, alpha channels are saved.
      */
      static alphaChannels: boolean
    /**

    - Compression method.
      */
      static compression: PICTCompression
    /**

    - When true, the document embeds the color profile.
      */
      static embedColorProfile: boolean
    /**

    - Bits per pixel.
      */
      static resolution: PICTBitsPerPixels
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
