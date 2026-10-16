# IntegerEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class IntegerEditboxes {
    /**
    - Selects an arbitrary IntegerEditbox from the collection.
      */
      anyItem(): IntegerEditbox
    /**
    - Provides every IntegerEditbox in the collection.
      */
      everyItem(): IntegerEditbox[]
    /**
    - Provides the first IntegerEditbox in the collection.
      */
      firstItem(): IntegerEditbox
    /**
    - Provides the final IntegerEditbox in the collection.
      */
      lastItem(): IntegerEditbox
    /**
    - Provides the middle IntegerEditbox in the collection.
      */
      middleItem(): IntegerEditbox
    /**
    - Provides the IntegerEditbox after obj in collection order.
    - @param obj IntegerEditbox positioned before the requested IntegerEditbox.
      */
      nextItem(obj: IntegerEditbox): IntegerEditbox
    /**
    - Provides the IntegerEditbox before obj in collection order.
    - @param obj Index positioned after the requested IntegerEditbox.
      */
      previousItem(obj: IntegerEditbox): IntegerEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
