# Texts

Community declaration reference: InDesign/2023.

Text objects collected together.

```typescript
declare class Texts {
    /**
    - Object count in the collection.
      */
      readonly length: number
    /**

    - Retrieves the Text at the specified index.
    - @param index Index value.
      */
      [index: number]: Text
    /**

    - Retrieves any Text from the collection.
      */
      anyItem(): Text
    /**

    - Displays how many elements are in the Text.
      */
      count(): number
    /**

    - Retrieves every Text from the collection.
      */
      everyItem(): Text[]
    /**

    - Retrieves the first Text in the collection.
      */
      firstItem(): Text
    /**

    - Retrieves the Text at the specified index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Text
    /**

    - Retrieves Texts within the requested range.
    - @param from Text, index, or name at the range start.
    - @param to Text, index, or name at the range end.
      */
      itemByRange(from: Text | number | string, to: Text | number | string): Text[]
    /**

    - Retrieves the last Text in the collection.
      */
      lastItem(): Text
    /**

    - Retrieves the middle Text in the collection.
      */
      middleItem(): Text
    /**

    - Retrieves the Text immediately after the supplied Text in collection order.
    - @param obj Text positioned just before the desired Text.
      */
      nextItem(obj: Text): Text
    /**

    - Gets the Text positioned immediately before the supplied index.
    - @param obj Index for the Text that comes after the wanted Text.
      */
      previousItem(obj: Text): Text
    /**

    - Builds executable source text that resolves back to the Text.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
