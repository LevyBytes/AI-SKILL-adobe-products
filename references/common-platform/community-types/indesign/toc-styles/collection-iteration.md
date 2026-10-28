# TOCStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TOCStyles {
    /**
    - Gets an arbitrary TOCStyle from the collection.
      */
      anyItem(): TOCStyle
    /**
    - Provides all TOCStyle entries in the collection.
      */
      everyItem(): TOCStyle[]
    /**
    - Provides the first TOCStyle from the collection.
      */
      firstItem(): TOCStyle
    /**
    - Provides the last TOCStyle from the collection.
      */
      lastItem(): TOCStyle
    /**
    - Provides the middle TOCStyle from the collection.
      */
      middleItem(): TOCStyle
    /**
    - Provides the TOCStyle immediately after the supplied TOCStyle in the collection.
    - @param obj TOCStyle immediately before the desired TOCStyle.
      */
      nextItem(obj: TOCStyle): TOCStyle
    /**
    - Provides the TOCStyle immediately before the supplied index.
    - @param obj Index for the TOCStyle immediately after the desired TOCStyle.
      */
      previousItem(obj: TOCStyle): TOCStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
