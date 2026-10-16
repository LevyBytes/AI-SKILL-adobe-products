# ImageDataTypes

Community declaration reference: InDesign/2023.

Choices for sending image data to a printer or file.

```typescript
declare enum ImageDataTypes {
    /**
    - Sends data at full resolution.
      */
      ALL_IMAGE_DATA = 1853058416,
    /**

    - Prints graphics frames with crossbars replacing the graphics.
      */
      NONE = 1852796517,
    /**

    - Sends enough data to print graphics at the output device's best possible resolution.
      */
      OPTIMIZED_SUBSAMPLING = 1869640563,
    /**

    - Sends placed bitmap images at screen resolution (72 dpi).
      */
      PROXY_IMAGE_DATA = 1819243130,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
