# MenuSeparators collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MenuSeparators {
    /**
    - Retrieves an arbitrary MenuSeparator from the collection.
      */
      anyItem(): MenuSeparator
    /**
    - Retrieves all MenuSeparator objects in the collection.
      */
      everyItem(): MenuSeparator[]
    /**
    - Retrieves the first MenuSeparator from the collection.
      */
      firstItem(): MenuSeparator
    /**
    - Retrieves the last MenuSeparator from the collection.
      */
      lastItem(): MenuSeparator
    /**
    - Retrieves the middle MenuSeparator from the collection.
      */
      middleItem(): MenuSeparator
    /**
    - Retrieves the MenuSeparator positioned after the supplied MenuSeparator in the collection.
    - @param obj MenuSeparator immediately before the desired MenuSeparator.
      */
      nextItem(obj: MenuSeparator): MenuSeparator
    /**
    - Retrieves the MenuSeparator positioned before the supplied index.
    - @param obj Index after the desired MenuSeparator.
      */
      previousItem(obj: MenuSeparator): MenuSeparator
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
