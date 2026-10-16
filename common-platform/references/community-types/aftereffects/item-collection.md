# ItemCollection

Community declaration reference: AfterEffects/26.0.

ItemCollection represents item groups. A Project-owned ItemCollection includes every project Item, while a FolderItem-owned ItemCollection includes the Items inside that folder.

```typescript
declare class ItemCollection extends Collection {
    /** Looks up an Item object by collection index; indexing starts at 1. */
    readonly [index: number]: _ItemClasses
    /* Adds a newly created CompItem object here. */
    addComp(
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    duration: number,
    frameRate: number,
    ): CompItem
    /* Creates a FolderItem object and inserts it in the collection. */
    addFolder(name: string): FolderItem
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
