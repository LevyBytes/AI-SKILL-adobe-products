# CompositeFonts collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CompositeFonts {
    /**
    - Chooses an arbitrary CompositeFont from this collection.
      */
      anyItem(): CompositeFont
    /**
    - Provides all CompositeFont objects from this collection.
      */
      everyItem(): CompositeFont[]
    /**
    - Provides the collection's initial CompositeFont.
      */
      firstItem(): CompositeFont
    /**
    - Provides the final CompositeFont in this collection.
      */
      lastItem(): CompositeFont
    /**
    - Provides the center CompositeFont from this collection.
      */
      middleItem(): CompositeFont
    /**
    - Provides the CompositeFont positioned immediately after the supplied CompositeFont.
    - @param obj CompositeFont that precedes the requested one.
      */
      nextItem(obj: CompositeFont): CompositeFont
    /**
    - Provides the CompositeFont positioned immediately before the supplied index.
    - @param obj Index belonging to the CompositeFont after the requested one.
      */
      previousItem(obj: CompositeFont): CompositeFont
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
