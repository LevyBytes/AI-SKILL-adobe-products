# JPEGSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a JPEG-format document.

```typescript
declare class JPEGSaveOptions {
    /**
    - When true, the document embeds the color profile.
      */
      embedColorProfile: boolean
    /**

    - Download format selection.
      */
      formatOptions: FormatOptions
    /**

    - Color filling anti-aliased edges next to transparent image areas. Default: white.
      */
      matte: MatteType
    /**

    - Produced image quality.
      */
      quality: number
    /**

    - Scan count. Valid only for progressive type JPEG files.
      */
      scans: number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
