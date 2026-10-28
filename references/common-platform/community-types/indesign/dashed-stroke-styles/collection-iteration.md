# DashedStrokeStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DashedStrokeStyles {
    /**
    - Gets an arbitrary DashedStrokeStyle from the collection.
      */
      anyItem(): DashedStrokeStyle
    /**
    - Gets all DashedStrokeStyle objects from the collection.
      */
      everyItem(): DashedStrokeStyle[]
    /**
    - Gets the first DashedStrokeStyle from the collection.
      */
      firstItem(): DashedStrokeStyle
    /**
    - Gets the last DashedStrokeStyle from the collection.
      */
      lastItem(): DashedStrokeStyle
    /**
    - Gets the middle DashedStrokeStyle from the collection.
      */
      middleItem(): DashedStrokeStyle
    /**
    - Gets the DashedStrokeStyle positioned after the supplied DashedStrokeStyle in the collection.
    - @param obj DashedStrokeStyle positioned immediately before the requested DashedStrokeStyle.
      */
      nextItem(obj: DashedStrokeStyle): DashedStrokeStyle
    /**
    - Gets the DashedStrokeStyle positioned before the specified index.
    - @param obj Index for the DashedStrokeStyle positioned after the requested DashedStrokeStyle.
      */
      previousItem(obj: DashedStrokeStyle): DashedStrokeStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
