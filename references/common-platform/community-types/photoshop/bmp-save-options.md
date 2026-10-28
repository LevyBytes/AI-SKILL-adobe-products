# BMPSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a BMP-format document.

```typescript
declare class BMPSaveOptions {
    /**
    - When true, alpha channels are saved.
      */
      alphaChannels: boolean
    /**

    - Bits used for each sample.
      */
      depth: BMPDepthType
    /**

    - When true, the image is written bottom-to-top.
      */
      flipRowOrder: boolean
    /**

    - Target operating system.
      */
      osType: OperatingSystem
    /**

    - When true, RLE compression is enabled.
      */
      rleCompression: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
