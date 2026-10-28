# XMLExportMaps

Community declaration reference: InDesign/2023.

Collection type for XML export maps.

```typescript
declare class XMLExportMaps {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Fetches an XMLExportMap by supplied index.
    - @param index Index value.
      */
      [index: number]: XMLExportMap
    /**

    - Builds a new XMLExportMap.
    - @param mappedStyle Mapped style.
    - @param markupTag Tag to map.
    - @param withProperties Property values used at XMLExportMap creation.
      */
      add(mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string, markupTag: XMLTag | string, withProperties: object): XMLExportMap
    /**

    - Gets an arbitrary XMLExportMap from the collection.
      */
      anyItem(): XMLExportMap
    /**

    - Shows the element count for the XMLExportMap.
      */
      count(): number
    /**

    - Gets all XMLExportMap objects in the collection.
      */
      everyItem(): XMLExportMap[]
    /**

    - Gets the collection's initial XMLExportMap.
      */
      firstItem(): XMLExportMap
    /**

    - Fetches an XMLExportMap by supplied index or name.
    - @param index Index or name.
      */
      item(index: number | string): XMLExportMap
    /**

    - Collects XMLExportMaps from the requested span.
    - @param from XMLExportMap, index, or name that starts the span.
    - @param to XMLExportMap, index, or name that ends the span.
      */
      itemByRange(from: XMLExportMap | number | string, to: XMLExportMap | number | string): XMLExportMap[]
    /**

    - Gets the collection's final XMLExportMap.
      */
      lastItem(): XMLExportMap
    /**

    - Gets the XMLExportMap located at the collection midpoint.
      */
      middleItem(): XMLExportMap
    /**

    - Gets the XMLExportMap positioned after the supplied XMLExportMap.
    - @param obj XMLExportMap immediately before the one wanted.
      */
      nextItem(obj: XMLExportMap): XMLExportMap
    /**

    - Gets the XMLExportMap positioned before the supplied index.
    - @param obj Index for the XMLExportMap immediately after the one wanted.
      */
      previousItem(obj: XMLExportMap): XMLExportMap
    /**

    - Builds executable source text that resolves back to the XMLExportMap.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
