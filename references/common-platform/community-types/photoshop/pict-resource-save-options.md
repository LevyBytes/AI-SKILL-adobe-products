# PICTResourceSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a document as a PICT resource file.

```typescript
declare class PICTResourceSaveOptions {
    /**
    - When true, alpha channels are saved.
      */
      alphaChannels: boolean
    /**

    - Compression type.
      */
      compression: PICTCompression
    /**

    - When true, the document embeds the color profile.
      */
      embedColorProfile: boolean
    /**

    - PICT resource name.
      */
      name: string
    /**

    - Bits per pixel.
      */
      resolution: PICTBitsPerPixels
    /**

    - PICT resource ID.
      */
      resourceID: number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
