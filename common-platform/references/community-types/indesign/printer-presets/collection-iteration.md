# PrinterPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PrinterPresets {
    /**
    - Gets any PrinterPreset from the collection.
      */
      anyItem(): PrinterPreset
    /**
    - Gets all PrinterPreset objects in the collection.
      */
      everyItem(): PrinterPreset[]
    /**
    - Gets the first PrinterPreset in the collection.
      */
      firstItem(): PrinterPreset
    /**
    - Gets the final PrinterPreset in the collection.
      */
      lastItem(): PrinterPreset
    /**
    - Gets the central PrinterPreset from the collection.
      */
      middleItem(): PrinterPreset
    /**
    - Gets the PrinterPreset positioned after the supplied PrinterPreset in the collection.
    - @param obj PrinterPreset whose index precedes the requested PrinterPreset.
      */
      nextItem(obj: PrinterPreset): PrinterPreset
    /**
    - Gets the PrinterPreset at the index before the specified index.
    - @param obj Index of the PrinterPreset positioned after the requested PrinterPreset.
      */
      previousItem(obj: PrinterPreset): PrinterPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
