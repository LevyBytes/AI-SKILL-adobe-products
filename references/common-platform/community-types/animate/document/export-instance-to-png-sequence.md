# Document.exportInstanceToPNGSequence

Community declaration reference: Animate/22.0.

Exports a selected movie clip, graphic, or button symbol instance on the Stage as a PNG sequence on disk. Without startFrameNum or endFrameNum, every Timeline frame is included.
@param outputURI String: URI destination for the PNG Sequence files. It must point to a local file. Example: file:///c|/tests/mytest.png.
@param startFrameNum Optional. Integer identifying the first frame to export. The default is 1.
@param endFrameNum Optional. Integer identifying the final frame to export. The default is 99999.
@param matrix Optional. Matrix applied to the PNG sequence export.

```typescript
declare class Document {
    exportInstanceToPNGSequence(
        outputURI: string,
        startFrameNum?: number,
        endFrameNum?: number,
        matrix?: Matrix,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
