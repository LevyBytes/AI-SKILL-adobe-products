# StyleExportTagMap identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class StyleExportTagMap {
    /**
    - Position of the StyleExportTagMap inside its parent container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully.
      */
      readonly isValid: boolean
    /**
    - Owning object for the StyleExportTagMap: CharacterStyle or ParagraphStyle.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
