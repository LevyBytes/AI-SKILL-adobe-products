# TextVariables collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextVariables {
    /**
    - Chooses an arbitrary TextVariable from this collection.
      */
      anyItem(): TextVariable
    /**
    - Provides all TextVariable objects from this collection.
      */
      everyItem(): TextVariable[]
    /**
    - Provides the collection's initial TextVariable.
      */
      firstItem(): TextVariable
    /**
    - Provides the final TextVariable in this collection.
      */
      lastItem(): TextVariable
    /**
    - Provides the center TextVariable from this collection.
      */
      middleItem(): TextVariable
    /**
    - Provides the TextVariable positioned immediately after the supplied TextVariable.
    - @param obj TextVariable that precedes the requested one.
      */
      nextItem(obj: TextVariable): TextVariable
    /**
    - Provides the TextVariable positioned immediately before the supplied index.
    - @param obj Index belonging to the TextVariable after the requested one.
      */
      previousItem(obj: TextVariable): TextVariable
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
