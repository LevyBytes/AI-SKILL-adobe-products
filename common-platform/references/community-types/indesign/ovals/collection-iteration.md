# Ovals collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Ovals {
    /**
    - Gets any Oval from the collection.
      */
      anyItem(): Oval
    /**
    - Gets all Oval entries in the collection.
      */
      everyItem(): Oval[]
    /**
    - Gets the first Oval from the collection.
      */
      firstItem(): Oval
    /**
    - Gets the last Oval from the collection.
      */
      lastItem(): Oval
    /**
    - Gets the middle Oval from the collection.
      */
      middleItem(): Oval
    /**
    - Gets the Oval positioned after the specified Oval in the collection.
    - @param obj Oval preceding the requested Oval.
      */
      nextItem(obj: Oval): Oval
    /**
    - Gets the Oval at the index before the specified index.
    - @param obj Index of the Oval after the requested Oval.
      */
      previousItem(obj: Oval): Oval
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
