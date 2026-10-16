# Notes.itemByRange

Community declaration reference: InDesign/2023.

Provides Notes spanning the requested range.
@param from Range start, given as a Note, index, or name.
@param to Range end, given as a Note, index, or name.

```typescript
declare class Notes {
    itemByRange(from: Note | number | string, to: Note | number | string): Note[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
