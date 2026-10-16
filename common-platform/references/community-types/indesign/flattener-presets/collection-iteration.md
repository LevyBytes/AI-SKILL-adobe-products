# FlattenerPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class FlattenerPresets {
    /**
    - Retrieves any FlattenerPreset from the collection.
      */
      anyItem(): FlattenerPreset
    /**
    - Retrieves all FlattenerPreset objects in the collection.
      */
      everyItem(): FlattenerPreset[]
    /**
    - Retrieves the first FlattenerPreset in the collection.
      */
      firstItem(): FlattenerPreset
    /**
    - Retrieves the last FlattenerPreset in the collection.
      */
      lastItem(): FlattenerPreset
    /**
    - Retrieves the middle FlattenerPreset in the collection.
      */
      middleItem(): FlattenerPreset
    /**
    - Retrieves the FlattenerPreset whose index comes after the supplied FlattenerPreset in the collection.
    - @param obj FlattenerPreset whose index precedes the requested FlattenerPreset.
      */
      nextItem(obj: FlattenerPreset): FlattenerPreset
    /**
    - Retrieves the FlattenerPreset with the index before the supplied index.
    - @param obj Index of the FlattenerPreset that follows the requested FlattenerPreset.
      */
      previousItem(obj: FlattenerPreset): FlattenerPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
