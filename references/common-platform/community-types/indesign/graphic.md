# Graphic

Community declaration reference: InDesign/2023.

Imported graphic using a graphic format such as vector, metafile, or bitmap.

```typescript
declare class Graphic extends PageItem {
    /**
    - Image type name.
      */
      readonly imageTypeName: string
    /**

    - Source file for the link.
      */
      readonly itemLink: Link
    /**

    - Exports the Graphic for web output.
    - @param to Full pathname for the exported file.
      */
      exportForWeb(to: File): string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
