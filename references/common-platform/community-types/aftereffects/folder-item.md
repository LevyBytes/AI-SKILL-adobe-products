# FolderItem

Community declaration reference: AfterEffects/26.0.

FolderItem maps to a Project panel folder. It can hold items such as footage, compositions, and solids, plus nested folders.

```typescript
declare class FolderItem extends Item {
    /** Items held by this folder. */
    readonly items: ItemCollection
    /* Count of items inside the folder. */
    readonly numItems: number
    /** Gets one item from the folder. */
    item(index: number): _ItemClasses
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
