# Library.duplicateItem

Community declaration reference: Animate/22.0.

Duplicates the current selection or the named item. The copy receives a default name, such as item copy, and becomes selected. The command fails when more than one item is selected.
@returns Boolean result: true means duplication succeeded; false means it failed. Flash returns false when multiple items are selected.
@param namePath String naming the item to duplicate. For an item inside a folder, include its path with slash notation. This parameter is optional.

```typescript
declare class Library {
    duplicateItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
