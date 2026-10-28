# Library.updateItem

Community declaration reference: Animate/22.0.

Updates the named item.
@returns Boolean result: true means Flash updated the item successfully; false means it did not.
@param namePath String naming the item. For an item inside a folder, include its name and path with slash notation. In the user interface, this matches right-clicking an item and choosing Update from the menu. When no name is provided, Flash updates the current selection. This parameter is optional.

```typescript
declare class Library {
    updateItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
