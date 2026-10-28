# NestedStyles

Community declaration reference: InDesign/2023.

NestedStyle collection.

```typescript
declare class NestedStyles {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Gets the NestedStyle at the requested index.
    - @param index Index value to retrieve.
      */
      [index: number]: NestedStyle
    /**

    - Builds a NestedStyle instance.
    - @param withProperties Starting property values for the new NestedStyle.
      */
      add(withProperties: object): NestedStyle
    /**

    - Gets an arbitrary NestedStyle from the collection.
      */
      anyItem(): NestedStyle
    /**

    - Reports how many elements the NestedStyle collection contains.
      */
      count(): number
    /**

    - Gets all NestedStyle objects from the collection.
      */
      everyItem(): NestedStyle[]
    /**

    - Gets the first NestedStyle in collection order.
      */
      firstItem(): NestedStyle
    /**

    - Gets a NestedStyle by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): NestedStyle
    /**

    - Gets the NestedStyles spanning the requested range.
    - @param from Starting NestedStyle, index, or name for the range.
    - @param to Ending NestedStyle, index, or name for the range.
      */
      itemByRange(from: NestedStyle | number | string, to: NestedStyle | number | string): NestedStyle[]
    /**

    - Gets the final NestedStyle in collection order.
      */
      lastItem(): NestedStyle
    /**

    - Gets the middle NestedStyle from the collection.
      */
      middleItem(): NestedStyle
    /**

    - Gets the NestedStyle immediately after the supplied NestedStyle in collection order.
    - @param obj NestedStyle positioned before the requested NestedStyle.
      */
      nextItem(obj: NestedStyle): NestedStyle
    /**

    - Gets the NestedStyle immediately before the supplied index.
    - @param obj Index of the NestedStyle positioned after the requested NestedStyle.
      */
      previousItem(obj: NestedStyle): NestedStyle
    /**

    - Creates executable source text that resolves back to the NestedStyle.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
