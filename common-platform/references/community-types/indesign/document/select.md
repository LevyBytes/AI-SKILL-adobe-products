# Document.select

Community declaration reference: InDesign/2023.

Selects the specified object or objects.
@param selectableItems Objects to select.
@param existingSelection Selection status of the Document relative to objects already selected.

```typescript
declare class Document {
    select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
