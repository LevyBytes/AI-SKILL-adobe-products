# ObjectStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ObjectStyles {
    /**
    - Supplies any ObjectStyle from this collection.
      */
      anyItem(): ObjectStyle
    /**
    - Supplies all ObjectStyle entries from the collection.
      */
      everyItem(): ObjectStyle[]
    /**
    - Supplies the collection's initial ObjectStyle.
      */
      firstItem(): ObjectStyle
    /**
    - Supplies the final ObjectStyle in the collection.
      */
      lastItem(): ObjectStyle
    /**
    - Supplies the central ObjectStyle in the collection.
      */
      middleItem(): ObjectStyle
    /**
    - Gets the ObjectStyle positioned after the given ObjectStyle.
    - @param obj ObjectStyle immediately before the desired one.
      */
      nextItem(obj: ObjectStyle): ObjectStyle
    /**
    - Gets the ObjectStyle positioned before the given index.
    - @param obj Index of the ObjectStyle that comes after the desired one.
      */
      previousItem(obj: ObjectStyle): ObjectStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
