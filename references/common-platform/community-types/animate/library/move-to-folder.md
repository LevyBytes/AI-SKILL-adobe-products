# Library.moveToFolder

Community declaration reference: Animate/22.0.

Moves the current selection or named library item into the requested folder. When folderPath is empty, the items are moved to the top level.
@returns Boolean result: true means the item moved successfully; false means it did not.
@param folderPath Folder path string such as "FolderName" or "FolderName/FolderName". Use an empty string ("") for folderPath to move an item to the top level.
@param itemToMove String naming the item to move. When itemToMove is omitted, the selected items are moved. This parameter is optional.
@param bReplace Boolean value. If another item with the same name already exists, true for bReplace replaces that existing item with the item being moved. With false, Flash gives the dropped item a unique name. Default: false. Optional.

```typescript
declare class Library {
    moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
