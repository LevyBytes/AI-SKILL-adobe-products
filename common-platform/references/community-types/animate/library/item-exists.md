# Library.itemExists

Community declaration reference: Animate/22.0.

Tests whether the named item exists in the library.
@returns Boolean result: true means the item exists in the library; false means it does not.
@param namePath String naming the item. For an item inside a folder, include its name and path with slash notation.

```typescript
declare class Library {
    itemExists(namePath: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
