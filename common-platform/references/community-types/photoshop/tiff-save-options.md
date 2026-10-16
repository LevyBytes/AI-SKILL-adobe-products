# TiffSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a TIFF-format document.

```typescript
declare class TiffSaveOptions {
    /**
    - When true, alpha channels are saved.
      */
      alphaChannels: boolean
    /**

    - When true, annotations are saved.
      */
      annotations: boolean
    /**

    - Byte-reading order. Defaults are Mac OS on Mac OS and IBM PC on Windows.
      */
      byteOrder: ByteOrder
    /**

    - When true, the document embeds the color profile.
      */
      embedColorProfile: boolean
    /**

    - Compression type.
      */
      imageCompression: TIFFEncoding
    /**

    - When true, image channels are interleaved.
      */
      interleaveChannels: boolean
    /**

    - Produced image quality; higher JPEG compression lowers this value. Applies only to JPEG-compressed TIFF documents. Range: 0 to 12.
      */
      jpegQuality: number
    /**

    - Compression method used when saving layers instead of composite data. Valid only when 'layers' = true.
      */
      layerCompression: LayerCompression
    /**

    - When true, layers are saved.
      */
      layers: boolean
    /**

    - When true, multi-resolution information is preserved.
      */
      saveImagePyramid: boolean
    /**

    - When true, spot colors are saved.
      */
      spotColors: boolean
    /**

    - When true, transparency is saved as an additional alpha channel for use when another application opens the file.
      */
      transparency: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
