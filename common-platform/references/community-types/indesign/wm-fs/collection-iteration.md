# WMFs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class WMFs {
    /**
    - Gets any WMF from the collection.
      */
      anyItem(): WMF
    /**
    - Gets all WMF entries in the collection.
      */
      everyItem(): WMF[]
    /**
    - Gets the first WMF from the collection.
      */
      firstItem(): WMF
    /**
    - Gets the last WMF from the collection.
      */
      lastItem(): WMF
    /**
    - Gets the middle WMF from the collection.
      */
      middleItem(): WMF
    /**
    - Gets the WMF positioned after the specified WMF in the collection.
    - @param obj WMF preceding the requested WMF.
      */
      nextItem(obj: WMF): WMF
    /**
    - Gets the WMF at the index before the specified index.
    - @param obj Index of the WMF after the requested WMF.
      */
      previousItem(obj: WMF): WMF
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
