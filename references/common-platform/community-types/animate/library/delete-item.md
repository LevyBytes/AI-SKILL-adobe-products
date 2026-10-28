# Library.deleteItem

Community declaration reference: Animate/22.0.

Removes the current Library panel item or the named item. When multiple items are selected, this method can remove all selected items.
@returns Boolean result: true means the items were deleted; false means deletion failed.
@param namePath String naming the item to delete. For an item inside a folder, include its path with slash notation. Passing a folder name deletes that folder and everything inside it. Without a name, Flash deletes the selected item or selected items. To remove every item in the Library panel, select all items before calling this method. This parameter is optional.

```typescript
declare class Library {
    deleteItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
