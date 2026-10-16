# Panels

Community declaration reference: InDesign/2023.

Collection object for panels.

```typescript
declare class Panels {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Retrieves the Panel addressed by the specified index.
    - @param index Index value.
      */
      [index: number]: Panel
    /**

    - Retrieves an arbitrary Panel from the collection.
      */
      anyItem(): Panel
    /**

    - Reports how many elements the Panel contains.
      */
      count(): number
    /**

    - Retrieves all Panel objects in the collection.
      */
      everyItem(): Panel[]
    /**

    - Retrieves the first Panel from the collection.
      */
      firstItem(): Panel
    /**

    - Retrieves the Panel addressed by the specified index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Panel
    /**

    - Retrieves the Panel that has the specified name.
    - @param name Name value.
      */
      itemByName(name: string): Panel
    /**

    - Retrieves Panels entries bounded by the supplied range.
    - @param from Starting range endpoint: Panel, index, or name.
    - @param to Ending range endpoint: Panel, index, or name.
      */
      itemByRange(from: Panel | number | string, to: Panel | number | string): Panel[]
    /**

    - Retrieves the last Panel from the collection.
      */
      lastItem(): Panel
    /**

    - Retrieves the middle Panel from the collection.
      */
      middleItem(): Panel
    /**

    - Retrieves the Panel positioned after the supplied Panel in the collection.
    - @param obj Panel immediately before the desired Panel.
      */
      nextItem(obj: Panel): Panel
    /**

    - Retrieves the Panel positioned before the supplied index.
    - @param obj Index after the desired Panel.
      */
      previousItem(obj: Panel): Panel
    /**

    - Builds executable source text that resolves back to the Panel.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
