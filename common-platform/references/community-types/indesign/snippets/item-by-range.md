# Snippets.itemByRange

Community declaration reference: InDesign/2023.

Retrieves the Snippets inside the requested range.
@param from Range start: Snippet, index, or name.
@param to Range end: Snippet, index, or name.

```typescript
declare class Snippets {
    itemByRange(from: Snippet | number | string, to: Snippet | number | string): Snippet[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
