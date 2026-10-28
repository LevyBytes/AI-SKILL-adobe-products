# Dropdowns collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Dropdowns {
    /**
    - Selects an arbitrary Dropdown from the collection.
      */
      anyItem(): Dropdown
    /**
    - Provides every Dropdown in the collection.
      */
      everyItem(): Dropdown[]
    /**
    - Provides the first Dropdown in the collection.
      */
      firstItem(): Dropdown
    /**
    - Provides the final Dropdown in the collection.
      */
      lastItem(): Dropdown
    /**
    - Provides the middle Dropdown in the collection.
      */
      middleItem(): Dropdown
    /**
    - Provides the Dropdown after obj in collection order.
    - @param obj Dropdown positioned before the requested Dropdown.
      */
      nextItem(obj: Dropdown): Dropdown
    /**
    - Provides the Dropdown before obj in collection order.
    - @param obj Index positioned after the requested Dropdown.
      */
      previousItem(obj: Dropdown): Dropdown
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
