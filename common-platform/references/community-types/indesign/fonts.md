# Fonts

Community declaration reference: InDesign/2023.

Font collection.

```typescript
declare class Fonts {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Gets the Font at the requested index.
    - @param index Index value to retrieve.
      */
      [index: number]: Font
    /**

    - Gets an arbitrary Font from the collection.
      */
      anyItem(): Font
    /**

    - Reports how many elements the Font collection contains.
      */
      count(): number
    /**

    - Gets all Font objects from the collection.
      */
      everyItem(): Font[]
    /**

    - Gets the first Font in collection order.
      */
      firstItem(): Font
    /**

    - Gets a Font by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): Font
    /**

    - Gets the Font matching the supplied name.
    - @param name Name to look up.
      */
      itemByName(name: string): Font
    /**

    - Gets the Fonts spanning the requested range.
    - @param from Starting Font, index, or name for the range.
    - @param to Ending Font, index, or name for the range.
      */
      itemByRange(from: Font | number | string, to: Font | number | string): Font[]
    /**

    - Gets the final Font in collection order.
      */
      lastItem(): Font
    /**

    - Gets the middle Font from the collection.
      */
      middleItem(): Font
    /**

    - Gets the Font immediately after the supplied Font in collection order.
    - @param obj Font positioned before the requested Font.
      */
      nextItem(obj: Font): Font
    /**

    - Gets the Font immediately before the supplied index.
    - @param obj Index of the Font positioned after the requested Font.
      */
      previousItem(obj: Font): Font
    /**

    - Creates executable source text that resolves back to the Font.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
