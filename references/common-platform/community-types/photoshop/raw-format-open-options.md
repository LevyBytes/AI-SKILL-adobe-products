# RawFormatOpenOptions

Community declaration reference: Photoshop/2015.5.

Options accepted when opening a RAW-format document.

```typescript
declare class RawFormatOpenOptions extends OpenOptions {
    /**
    - Bits available for each channel. Valid values: 8 or 16.
      */
      bitsPerChannel: number
    /**

    - Byte-reading order. Valid only when 'bits per channel' = 16.
      */
      byteOrder: ByteOrder
    /**

    - Image channel count; allowed only when 'bits per channel' = 16. Range: 1 to 56.
      */
      channelNumber: number
    /**

    - Bytes placed before actual image data begins in the file; these are zero placeholders inserted at the file start. Range: 0 to 1919999.
      */
      headerSize: number
    /**

    - Image height, in pixels.
      */
      height: number
    /**

    - When true, color values are stored in sequence.
      */
      interleaveChannels: boolean
    /**

    - When true, saving keeps the header.
      */
      retainHeader: boolean
    /**

    - Image width, in pixels.
      */
      width: number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
