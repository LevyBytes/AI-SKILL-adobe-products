# Library.editItem

Community declaration reference: Animate/22.0.

Opens the selected item, or the named item, in Edit mode.
@returns Boolean result: true means the item exists and can be edited; false otherwise.
@param namePath String naming the item. For an item inside a folder, include its path with slash notation. When namePath is omitted, the one selected library item opens in Edit mode. If the library has no selection or has multiple selected items, editing opens the first scene in the main timeline instead. This parameter is optional.

```typescript
declare class Library {
    editItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
