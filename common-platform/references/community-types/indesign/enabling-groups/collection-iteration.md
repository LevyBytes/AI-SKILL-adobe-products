# EnablingGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EnablingGroups {
    /**
    - Selects an arbitrary EnablingGroup from the collection.
      */
      anyItem(): EnablingGroup
    /**
    - Provides every EnablingGroup in the collection.
      */
      everyItem(): EnablingGroup[]
    /**
    - Provides the first EnablingGroup in the collection.
      */
      firstItem(): EnablingGroup
    /**
    - Provides the final EnablingGroup in the collection.
      */
      lastItem(): EnablingGroup
    /**
    - Provides the middle EnablingGroup in the collection.
      */
      middleItem(): EnablingGroup
    /**
    - Provides the EnablingGroup after obj in collection order.
    - @param obj EnablingGroup positioned before the requested EnablingGroup.
      */
      nextItem(obj: EnablingGroup): EnablingGroup
    /**
    - Provides the EnablingGroup before obj in collection order.
    - @param obj Index positioned after the requested EnablingGroup.
      */
      previousItem(obj: EnablingGroup): EnablingGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
