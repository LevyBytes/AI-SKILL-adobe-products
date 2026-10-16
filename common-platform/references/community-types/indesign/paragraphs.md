# Paragraphs

Community declaration reference: InDesign/2023.

Paragraph collection.

```typescript
declare class Paragraphs {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the Paragraph at the supplied index.
    - @param index Index value.
      */
      [index: number]: Paragraph
    /**

    - Selects an arbitrary Paragraph from the collection.
      */
      anyItem(): Paragraph
    /**

    - Reports how many elements the Paragraph collection contains.
      */
      count(): number
    /**

    - Gets all Paragraph entries from the collection.
      */
      everyItem(): Paragraph[]
    /**

    - Gets the initial Paragraph in the collection.
      */
      firstItem(): Paragraph
    /**

    - Gets the Paragraph identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Paragraph
    /**

    - Gets Paragraphs over the supplied range.
    - @param from Starting Paragraph, index, or name for the range.
    - @param to Ending Paragraph, index, or name for the range.
      */
      itemByRange(from: Paragraph | number | string, to: Paragraph | number | string): Paragraph[]
    /**

    - Gets the final Paragraph in the collection.
      */
      lastItem(): Paragraph
    /**

    - Gets the central Paragraph in the collection.
      */
      middleItem(): Paragraph
    /**

    - Gets the Paragraph positioned after the supplied Paragraph in the collection.
    - @param obj Paragraph that precedes the wanted Paragraph.
      */
      nextItem(obj: Paragraph): Paragraph
    /**

    - Gets the Paragraph positioned immediately before the supplied index.
    - @param obj Index for the Paragraph that comes after the wanted Paragraph.
      */
      previousItem(obj: Paragraph): Paragraph
    /**

    - Builds executable source text that resolves back to the Paragraph.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
