# Languages collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Languages {
    /**
    - Gets an arbitrary Language from the collection.
      */
      anyItem(): Language
    /**
    - Gets all Language objects from the collection.
      */
      everyItem(): Language[]
    /**
    - Gets the first Language in collection order.
      */
      firstItem(): Language
    /**
    - Gets the final Language in collection order.
      */
      lastItem(): Language
    /**
    - Gets the middle Language from the collection.
      */
      middleItem(): Language
    /**
    - Gets the Language immediately after the supplied Language in collection order.
    - @param obj Language positioned before the requested Language.
      */
      nextItem(obj: Language): Language
    /**
    - Gets the Language immediately before the supplied index.
    - @param obj Index of the Language positioned after the requested Language.
      */
      previousItem(obj: Language): Language
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
