# StrokeStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class StrokeStyles {
    /**
    - Gets an arbitrary StrokeStyle from the collection.
      */
      anyItem(): StrokeStyle
    /**
    - Gets all StrokeStyle objects from the collection.
      */
      everyItem(): StrokeStyle[]
    /**
    - Gets the first StrokeStyle from the collection.
      */
      firstItem(): StrokeStyle
    /**
    - Gets the last StrokeStyle from the collection.
      */
      lastItem(): StrokeStyle
    /**
    - Gets the middle StrokeStyle from the collection.
      */
      middleItem(): StrokeStyle
    /**
    - Gets the StrokeStyle positioned after the supplied StrokeStyle in the collection.
    - @param obj StrokeStyle positioned immediately before the requested StrokeStyle.
      */
      nextItem(obj: StrokeStyle): StrokeStyle
    /**
    - Gets the StrokeStyle positioned before the specified index.
    - @param obj Index for the StrokeStyle positioned after the requested StrokeStyle.
      */
      previousItem(obj: StrokeStyle): StrokeStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
