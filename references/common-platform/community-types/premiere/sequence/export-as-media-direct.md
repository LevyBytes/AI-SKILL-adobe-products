# Sequence.exportAsMediaDirect

Community declaration reference: Premiere/24.0.

Premiere Pro immediately exports the sequence.
@param outputFilePath Output file path, including name.
@param presetPath .epr file used for the export.
@param workAreaType Optional work-area selector.

```typescript
declare class Sequence {
    exportAsMediaDirect(
      outputFilePath: string,
      presetPath: string,
      workAreaType?: WorkAreaType,
      ): string
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
