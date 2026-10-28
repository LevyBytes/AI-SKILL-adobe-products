# Document

Community declaration reference: Audition/2018.

Base class shared by all document types, with specialized types such as WaveDocument for particular document kinds.

```typescript
declare class Document {
    /**
    - UI display name for the document; it may differ from the file name without its extension.
      */
      readonly displayName: string
    /**

    - Unique ID for this document.
      */
      readonly id: string
    /**

    - Returns the document's platform-specific disk path, or an empty string when no path exists.
      */
      readonly path: string
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
