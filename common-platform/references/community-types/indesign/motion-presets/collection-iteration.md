# MotionPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MotionPresets {
    /**
    - Supplies any MotionPreset from this collection.
      */
      anyItem(): MotionPreset
    /**
    - Supplies all MotionPreset entries in this collection.
      */
      everyItem(): MotionPreset[]
    /**
    - Supplies the first MotionPreset in this collection.
      */
      firstItem(): MotionPreset
    /**
    - Supplies the last MotionPreset in this collection.
      */
      lastItem(): MotionPreset
    /**
    - Supplies the middle MotionPreset in this collection.
      */
      middleItem(): MotionPreset
    /**
    - Retrieves the MotionPreset positioned after the specified MotionPreset in this collection.
    - @param obj MotionPreset located before the target MotionPreset.
      */
      nextItem(obj: MotionPreset): MotionPreset
    /**
    - Retrieves the MotionPreset positioned before the specified index.
    - @param obj Index for the MotionPreset located after the target MotionPreset.
      */
      previousItem(obj: MotionPreset): MotionPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
