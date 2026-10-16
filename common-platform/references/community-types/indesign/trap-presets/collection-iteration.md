# TrapPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TrapPresets {
    /**
    - Chooses any TrapPreset from the collection.
      */
      anyItem(): TrapPreset
    /**
    - Provides all TrapPreset entries from the collection.
      */
      everyItem(): TrapPreset[]
    /**
    - Provides the first TrapPreset entry in this collection.
      */
      firstItem(): TrapPreset
    /**
    - Provides the final TrapPreset entry in this collection.
      */
      lastItem(): TrapPreset
    /**
    - Provides the central TrapPreset entry in this collection.
      */
      middleItem(): TrapPreset
    /**
    - Provides the TrapPreset positioned after the supplied TrapPreset.
    - @param obj TrapPreset placed before the target TrapPreset.
      */
      nextItem(obj: TrapPreset): TrapPreset
    /**
    - Provides the TrapPreset positioned before the supplied index.
    - @param obj Index of the TrapPreset placed after the target TrapPreset.
      */
      previousItem(obj: TrapPreset): TrapPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
