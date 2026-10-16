# Library.renameItem

Community declaration reference: Animate/22.0.

Changes the name of the selected library item in the Library panel.
@returns Boolean value true when the item name changes successfully, and false otherwise. If several items are selected, Flash leaves all names unchanged and returns false, matching user interface behavior.
@param name String containing the new name for the library item.

```typescript
declare class Library {
    renameItem(name: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
