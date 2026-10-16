# EPSImageData

Community declaration reference: InDesign/2023.

EPS image-data export choices.

```typescript
declare enum EPSImageData {
    /**
    - Exports image data at high resolution. Note: Use this when the file is headed to a high-resolution output device.
      */
      ALL_IMAGE_DATA = 1853058416,
    /**

    - Exports placed bitmap images only as screen-resolution versions (72 dpi). Note: Use this with OPI image replacement or for files intended for on-screen viewing.
      */
      PROXY_IMAGE_DATA = 1819243130,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
