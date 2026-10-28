# FileSource

Community declaration reference: AfterEffects/26.0.

FileSource describes footage loaded from a file.

```typescript
declare class FileSource extends FootageSource {
    /** File defining this asset. */
    readonly file: File
    /* Path to this asset's missing footage file. */
    readonly missingFootagePath: string
    /* Refreshes the asset from disk when used as a FootageItem mainSource. */
    reload(): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
