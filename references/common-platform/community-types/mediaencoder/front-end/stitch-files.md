# FrontEnd.stitchFiles

Community declaration reference: MediaEncoder/23.0.

Creates a batch item from the supplied media and yields an EncoderWrapper instance.
@param mediaPaths Media paths separated by semicolons.
@param format Format example: â€˜H.264â€™
@param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
@param outputPath Output path for the encoded media.
@returns EncoderWrapper instance.

```typescript
declare interface FrontEnd {
    stitchFiles(
      mediaPaths: string,
      format: string,
      presetPath: string,
      outputPath: string,
      ): EncoderWrapper
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
