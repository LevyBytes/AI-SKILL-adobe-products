# Item

Community declaration reference: AfterEffects/26.0.

Item represents an object that can appear in the Project panel.

```typescript
declare class Item {
    /** Unique identifier for this item. */
    readonly id: number
    /* Item type. */
    readonly typeName: string
    /* Object name as displayed in the Project panel. */
    name: string
    /* Descriptive text. */
    comment: string
    /* Folder that contains this item. */
    parentFolder: FolderItem
    /* True when this item is selected. */
    selected: boolean
    /* Item label color. */
    label: number
    /* Creates a guide and appends it to the Item guides object. */
    addGuide(orientationType: number, position: number): number
    /* Deletes an existing guide. */
    removeGuide(guideIndex: number): void
    /* Changes an existing guide's position. */
    setGuide(position: number, guideIndex: number): void
    /* Removes this item from the project. */
    remove(): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
