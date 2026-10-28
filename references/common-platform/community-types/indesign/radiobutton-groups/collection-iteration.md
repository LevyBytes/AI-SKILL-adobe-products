# RadiobuttonGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RadiobuttonGroups {
    /**
    - Selects an arbitrary RadiobuttonGroup from the collection.
      */
      anyItem(): RadiobuttonGroup
    /**
    - Provides every RadiobuttonGroup in the collection.
      */
      everyItem(): RadiobuttonGroup[]
    /**
    - Provides the first RadiobuttonGroup in the collection.
      */
      firstItem(): RadiobuttonGroup
    /**
    - Provides the final RadiobuttonGroup in the collection.
      */
      lastItem(): RadiobuttonGroup
    /**
    - Provides the middle RadiobuttonGroup in the collection.
      */
      middleItem(): RadiobuttonGroup
    /**
    - Provides the RadiobuttonGroup after obj in collection order.
    - @param obj RadiobuttonGroup positioned before the requested RadiobuttonGroup.
      */
      nextItem(obj: RadiobuttonGroup): RadiobuttonGroup
    /**
    - Provides the RadiobuttonGroup before obj in collection order.
    - @param obj Index positioned after the requested RadiobuttonGroup.
      */
      previousItem(obj: RadiobuttonGroup): RadiobuttonGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
