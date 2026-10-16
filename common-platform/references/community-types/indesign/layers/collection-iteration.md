# Layers collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Layers {
    /**
    - Selects an arbitrary Layer from the collection.
      */
      anyItem(): Layer
    /**
    - Expands the collection to all Layer entries.
      */
      everyItem(): Layer[]
    /**
    - Gets the leading Layer in the collection.
      */
      firstItem(): Layer
    /**
    - Gets the final Layer in the collection.
      */
      lastItem(): Layer
    /**
    - Gets the central Layer in the collection.
      */
      middleItem(): Layer
    /**
    - Gets the Layer whose index comes after the supplied Layer.
    - @param obj Layer before the desired entry.
      */
      nextItem(obj: Layer): Layer
    /**
    - Resolves the Layer positioned just before the supplied index.
    - @param obj Index for the Layer after the requested one.
      */
      previousItem(obj: Layer): Layer
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
