# DocumentPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DocumentPresets {
    /**
    - Provides an arbitrary DocumentPreset from the collection.
      */
      anyItem(): DocumentPreset
    /**
    - Provides all DocumentPreset entries from the collection.
      */
      everyItem(): DocumentPreset[]
    /**
    - Provides the first DocumentPreset from the collection.
      */
      firstItem(): DocumentPreset
    /**
    - Provides the final DocumentPreset in the collection.
      */
      lastItem(): DocumentPreset
    /**
    - Provides the middle DocumentPreset from the collection.
      */
      middleItem(): DocumentPreset
    /**
    - Provides the DocumentPreset whose index comes after the specified DocumentPreset in the collection.
    - @param obj DocumentPreset before the desired DocumentPreset.
      */
      nextItem(obj: DocumentPreset): DocumentPreset
    /**
    - Provides the DocumentPreset at the index immediately before the specified index.
    - @param obj Index of the DocumentPreset after the desired DocumentPreset.
      */
      previousItem(obj: DocumentPreset): DocumentPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
