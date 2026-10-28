# FrontEnd.addDLToBatch

Community declaration reference: MediaEncoder/23.0.

Queues an After Effects comp or Premiere Pro sequence and returns an EncoderWrapper object.
@param projectPath Path for a Premiere Pro or After Effects project.
@param format Format example: â€˜H.264â€™
@param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
@param guid Unique id for a Premiere Pro sequence or After Effects composition.
@param outputPath Optional. When outputPath is empty, the output file name is derived from projectPath.
@returns EncoderWrapper instance.

```typescript
declare interface FrontEnd {
    addDLToBatch(
      projectPath: string,
      format: string,
      presetPath: string,
      guid: string,
      outputPath?: string,
      ): EncoderWrapper
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
