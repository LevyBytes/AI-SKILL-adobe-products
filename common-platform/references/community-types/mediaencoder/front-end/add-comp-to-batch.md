# FrontEnd.addCompToBatch

Community declaration reference: MediaEncoder/23.0.

Queues the first comp from an After Effects project or the first sequence from a Premiere Pro project.
@param compPath Path for an After Effects project or Premiere Pro project; the first comp or sequence is used.
@param presetPath Optional. When presetPath is empty, the default preset is used.
@param outputPath Optional. When outputPath is empty, the output file name is derived from compPath.
@returns True when the item is added to the batch; otherwise false.

```typescript
declare interface FrontEnd {
    addCompToBatch(compPath: string, presetPath?: string, outputPath?: string): boolean
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
