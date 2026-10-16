# FrontEnd.addFileToBatch

Community declaration reference: MediaEncoder/23.0.

Queues a file and returns an EncoderWrapper object.
@param filePath File path for a media source.
@param format Format example: â€˜H.264â€™
@param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
@param outputPath Optional. When outputPath is empty, the output file name is derived from filePath.
@returns EncoderWrapper object.

```typescript
declare interface FrontEnd {
    addFileToBatch(
      filePath: string,
      format: string,
      presetPath: string,
      outputPath?: string,
      ): EncoderWrapper
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
