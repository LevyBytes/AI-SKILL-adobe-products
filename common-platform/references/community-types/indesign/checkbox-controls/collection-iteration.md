# CheckboxControls collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CheckboxControls {
    /**
    - Selects an arbitrary CheckboxControl from the collection.
      */
      anyItem(): CheckboxControl
    /**
    - Provides every CheckboxControl in the collection.
      */
      everyItem(): CheckboxControl[]
    /**
    - Provides the first CheckboxControl in the collection.
      */
      firstItem(): CheckboxControl
    /**
    - Provides the final CheckboxControl in the collection.
      */
      lastItem(): CheckboxControl
    /**
    - Provides the middle CheckboxControl in the collection.
      */
      middleItem(): CheckboxControl
    /**
    - Provides the CheckboxControl after obj in collection order.
    - @param obj CheckboxControl positioned before the requested CheckboxControl.
      */
      nextItem(obj: CheckboxControl): CheckboxControl
    /**
    - Provides the CheckboxControl before obj in collection order.
    - @param obj Index positioned after the requested CheckboxControl.
      */
      previousItem(obj: CheckboxControl): CheckboxControl
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
