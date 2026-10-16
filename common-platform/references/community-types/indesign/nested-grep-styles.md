# NestedGrepStyles

Community declaration reference: InDesign/2023.

Collection wrapper for nested GREP styles.

```typescript
declare class NestedGrepStyles {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Retrieves the NestedGrepStyle at the supplied index.
    - @param index Index to retrieve.
      */
      [index: number]: NestedGrepStyle
    /**

    - Creates a NestedGrepStyle.
    - @param withProperties Starting property values for the new NestedGrepStyle
      */
      add(withProperties: object): NestedGrepStyle
    /**

    - Provides any NestedGrepStyle from the collection.
      */
      anyItem(): NestedGrepStyle
    /**

    - Reports how many NestedGrepStyle elements are present.
      */
      count(): number
    /**

    - Provides all NestedGrepStyle objects in the collection.
      */
      everyItem(): NestedGrepStyle[]
    /**

    - Provides the first NestedGrepStyle in collection order.
      */
      firstItem(): NestedGrepStyle
    /**

    - Retrieves the NestedGrepStyle at the supplied index or name.
    - @param index Index or name to retrieve.
      */
      item(index: number | string): NestedGrepStyle
    /**

    - Retrieves NestedGrepStyles spanning the supplied range.
    - @param from Starting NestedGrepStyle, index, or name.
    - @param to Ending NestedGrepStyle, index, or name.
      */
      itemByRange(from: NestedGrepStyle | number | string, to: NestedGrepStyle | number | string): NestedGrepStyle[]
    /**

    - Provides the last NestedGrepStyle in collection order.
      */
      lastItem(): NestedGrepStyle
    /**

    - Provides the middle NestedGrepStyle in collection order.
      */
      middleItem(): NestedGrepStyle
    /**

    - Provides the NestedGrepStyle immediately after the supplied NestedGrepStyle.
    - @param obj NestedGrepStyle positioned before the requested NestedGrepStyle.
      */
      nextItem(obj: NestedGrepStyle): NestedGrepStyle
    /**

    - Provides the NestedGrepStyle immediately before the supplied index.
    - @param obj Index of the NestedGrepStyle positioned after the requested NestedGrepStyle.
      */
      previousItem(obj: NestedGrepStyle): NestedGrepStyle
    /**

    - Builds a string that returns the NestedGrepStyle when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
