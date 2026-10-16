# NestedLineStyles

Community declaration reference: InDesign/2023.

Collection wrapper for nested line styles.

```typescript
declare class NestedLineStyles {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Retrieves the NestedLineStyle at the supplied index.
    - @param index Index to retrieve.
      */
      [index: number]: NestedLineStyle
    /**

    - Creates a NestedLineStyle.
    - @param withProperties Starting property values for the new NestedLineStyle
      */
      add(withProperties: object): NestedLineStyle
    /**

    - Provides any NestedLineStyle from the collection.
      */
      anyItem(): NestedLineStyle
    /**

    - Reports how many NestedLineStyle elements are present.
      */
      count(): number
    /**

    - Provides all NestedLineStyle objects in the collection.
      */
      everyItem(): NestedLineStyle[]
    /**

    - Provides the first NestedLineStyle in collection order.
      */
      firstItem(): NestedLineStyle
    /**

    - Retrieves the NestedLineStyle at the supplied index or name.
    - @param index Index or name to retrieve.
      */
      item(index: number | string): NestedLineStyle
    /**

    - Retrieves NestedLineStyles spanning the supplied range.
    - @param from Starting NestedLineStyle, index, or name.
    - @param to Ending NestedLineStyle, index, or name.
      */
      itemByRange(from: NestedLineStyle | number | string, to: NestedLineStyle | number | string): NestedLineStyle[]
    /**

    - Provides the last NestedLineStyle in collection order.
      */
      lastItem(): NestedLineStyle
    /**

    - Provides the middle NestedLineStyle in collection order.
      */
      middleItem(): NestedLineStyle
    /**

    - Provides the NestedLineStyle immediately after the supplied NestedLineStyle.
    - @param obj NestedLineStyle positioned before the requested NestedLineStyle.
      */
      nextItem(obj: NestedLineStyle): NestedLineStyle
    /**

    - Provides the NestedLineStyle immediately before the supplied index.
    - @param obj Index of the NestedLineStyle positioned after the requested NestedLineStyle.
      */
      previousItem(obj: NestedLineStyle): NestedLineStyle
    /**

    - Builds a string that returns the NestedLineStyle when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
