# MenuActions collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MenuActions {
    /**
    - Retrieves an arbitrary MenuAction from the collection.
      */
      anyItem(): MenuAction
    /**
    - Retrieves all MenuAction objects in the collection.
      */
      everyItem(): MenuAction[]
    /**
    - Retrieves the first MenuAction from the collection.
      */
      firstItem(): MenuAction
    /**
    - Retrieves the last MenuAction from the collection.
      */
      lastItem(): MenuAction
    /**
    - Retrieves the middle MenuAction from the collection.
      */
      middleItem(): MenuAction
    /**
    - Retrieves the MenuAction positioned after the supplied MenuAction in the collection.
    - @param obj MenuAction immediately before the desired MenuAction.
      */
      nextItem(obj: MenuAction): MenuAction
    /**
    - Retrieves the MenuAction positioned before the supplied index.
    - @param obj Index after the desired MenuAction.
      */
      previousItem(obj: MenuAction): MenuAction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
