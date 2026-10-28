# Library.store

Community declaration reference: InDesign/2023.

Puts the supplied object into the library.
@param using Page item(s) intended for storage.
@param withProperties Starting property values for the created Library

```typescript
declare class Library {
    store(using: PageItem[] | Movies | Sounds | Graphics | XMLElements, withProperties: object): Asset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
