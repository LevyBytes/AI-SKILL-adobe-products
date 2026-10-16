# Rectangles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Rectangles {
    /**
    - Gets any Rectangle from the collection.
      */
      anyItem(): Rectangle
    /**
    - Gets all Rectangle entries in the collection.
      */
      everyItem(): Rectangle[]
    /**
    - Gets the first Rectangle from the collection.
      */
      firstItem(): Rectangle
    /**
    - Gets the last Rectangle from the collection.
      */
      lastItem(): Rectangle
    /**
    - Gets the middle Rectangle from the collection.
      */
      middleItem(): Rectangle
    /**
    - Gets the Rectangle positioned after the specified Rectangle in the collection.
    - @param obj Rectangle preceding the requested Rectangle.
      */
      nextItem(obj: Rectangle): Rectangle
    /**
    - Gets the Rectangle at the index before the specified index.
    - @param obj Index of the Rectangle after the requested Rectangle.
      */
      previousItem(obj: Rectangle): Rectangle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
