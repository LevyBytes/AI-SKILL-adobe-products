# DottedStrokeStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DottedStrokeStyles {
    /**
    - Gets an arbitrary DottedStrokeStyle from the collection.
      */
      anyItem(): DottedStrokeStyle
    /**
    - Gets all DottedStrokeStyle objects from the collection.
      */
      everyItem(): DottedStrokeStyle[]
    /**
    - Gets the first DottedStrokeStyle from the collection.
      */
      firstItem(): DottedStrokeStyle
    /**
    - Gets the last DottedStrokeStyle from the collection.
      */
      lastItem(): DottedStrokeStyle
    /**
    - Gets the middle DottedStrokeStyle from the collection.
      */
      middleItem(): DottedStrokeStyle
    /**
    - Gets the DottedStrokeStyle positioned after the supplied DottedStrokeStyle in the collection.
    - @param obj DottedStrokeStyle positioned immediately before the requested DottedStrokeStyle.
      */
      nextItem(obj: DottedStrokeStyle): DottedStrokeStyle
    /**
    - Gets the DottedStrokeStyle positioned before the specified index.
    - @param obj Index for the DottedStrokeStyle positioned after the requested DottedStrokeStyle.
      */
      previousItem(obj: DottedStrokeStyle): DottedStrokeStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
