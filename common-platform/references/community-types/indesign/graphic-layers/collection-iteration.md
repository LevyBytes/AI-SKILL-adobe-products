# GraphicLayers collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GraphicLayers {
    /**
    - Gets an arbitrary GraphicLayer from the collection.
      */
      anyItem(): GraphicLayer
    /**
    - Gets all GraphicLayer objects in the collection.
      */
      everyItem(): GraphicLayer[]
    /**
    - Gets the collection's first GraphicLayer.
      */
      firstItem(): GraphicLayer
    /**
    - Gets the collection's last GraphicLayer.
      */
      lastItem(): GraphicLayer
    /**
    - Gets the GraphicLayer positioned in the middle of the collection.
      */
      middleItem(): GraphicLayer
    /**
    - Gets the GraphicLayer positioned after the supplied GraphicLayer.
    - @param obj GraphicLayer positioned before the wanted GraphicLayer.
      */
      nextItem(obj: GraphicLayer): GraphicLayer
    /**
    - Gets the GraphicLayer positioned before the supplied index.
    - @param obj Index of the GraphicLayer positioned after the wanted GraphicLayer.
      */
      previousItem(obj: GraphicLayer): GraphicLayer
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
