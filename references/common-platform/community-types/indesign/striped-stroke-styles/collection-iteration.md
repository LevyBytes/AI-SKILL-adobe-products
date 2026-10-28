# StripedStrokeStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class StripedStrokeStyles {
    /**
    - Gets an arbitrary StripedStrokeStyle from the collection.
      */
      anyItem(): StripedStrokeStyle
    /**
    - Gets all StripedStrokeStyle objects from the collection.
      */
      everyItem(): StripedStrokeStyle[]
    /**
    - Gets the first StripedStrokeStyle from the collection.
      */
      firstItem(): StripedStrokeStyle
    /**
    - Gets the last StripedStrokeStyle from the collection.
      */
      lastItem(): StripedStrokeStyle
    /**
    - Gets the middle StripedStrokeStyle from the collection.
      */
      middleItem(): StripedStrokeStyle
    /**
    - Gets the StripedStrokeStyle positioned after the supplied StripedStrokeStyle in the collection.
    - @param obj StripedStrokeStyle positioned immediately before the requested StripedStrokeStyle.
      */
      nextItem(obj: StripedStrokeStyle): StripedStrokeStyle
    /**
    - Gets the StripedStrokeStyle positioned before the specified index.
    - @param obj Index for the StripedStrokeStyle positioned after the requested StripedStrokeStyle.
      */
      previousItem(obj: StripedStrokeStyle): StripedStrokeStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
