# Dialogs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Dialogs {
    /**
    - Retrieves an arbitrary Dialog from the collection.
      */
      anyItem(): Dialog
    /**
    - Retrieves all Dialog objects in the collection.
      */
      everyItem(): Dialog[]
    /**
    - Retrieves the first Dialog from the collection.
      */
      firstItem(): Dialog
    /**
    - Retrieves the last Dialog from the collection.
      */
      lastItem(): Dialog
    /**
    - Retrieves the middle Dialog from the collection.
      */
      middleItem(): Dialog
    /**
    - Retrieves the Dialog positioned after the supplied Dialog in the collection.
    - @param obj Dialog immediately before the desired Dialog.
      */
      nextItem(obj: Dialog): Dialog
    /**
    - Retrieves the Dialog positioned before the supplied index.
    - @param obj Index after the desired Dialog.
      */
      previousItem(obj: Dialog): Dialog
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
