# Library.addNewItem

Community declaration reference: Animate/22.0.

Builds a Library panel item of the requested type and makes that new item the current selection. For details on importing library assets, including sounds, see document.importFile().
@returns Boolean result: true means the item was created; false means creation failed.
@param type String identifying the item kind. Permitted strings: "video"; "movie clip"; "button"; "graphic"; "bitmap"; "screen"; "folder". This method cannot add a sound to the library. Providing a folder path is equivalent to calling library.newFolder() before this method.
@param namePath String naming the item to add. If it is inside a folder, provide the name and folder path with slash notation. This parameter is optional.

```typescript
declare class Library {
    addNewItem(type: string, namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
