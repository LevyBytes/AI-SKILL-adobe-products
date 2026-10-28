# XMLImportMaps

Community declaration reference: InDesign/2023.

Collection type for XML import maps.

```typescript
declare class XMLImportMaps {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Fetches an XMLImportMap by supplied index.
    - @param index Index value.
      */
      [index: number]: XMLImportMap
    /**

    - Builds a new mapping.
    - @param markupTag Tag to map.
    - @param mappedStyle Mapped style.
    - @param withProperties Property values used at XMLImportMap creation.
      */
      add(markupTag: XMLTag | string, mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string, withProperties: object): XMLImportMap
    /**

    - Gets an arbitrary XMLImportMap from the collection.
      */
      anyItem(): XMLImportMap
    /**

    - Shows the element count for the XMLImportMap.
      */
      count(): number
    /**

    - Gets all XMLImportMap objects in the collection.
      */
      everyItem(): XMLImportMap[]
    /**

    - Gets the collection's initial XMLImportMap.
      */
      firstItem(): XMLImportMap
    /**

    - Fetches an XMLImportMap by supplied index or name.
    - @param index Index or name.
      */
      item(index: number | string): XMLImportMap
    /**

    - Collects XMLImportMaps from the requested span.
    - @param from XMLImportMap, index, or name that starts the span.
    - @param to XMLImportMap, index, or name that ends the span.
      */
      itemByRange(from: XMLImportMap | number | string, to: XMLImportMap | number | string): XMLImportMap[]
    /**

    - Gets the collection's final XMLImportMap.
      */
      lastItem(): XMLImportMap
    /**

    - Gets the XMLImportMap located at the collection midpoint.
      */
      middleItem(): XMLImportMap
    /**

    - Gets the XMLImportMap positioned after the supplied XMLImportMap.
    - @param obj XMLImportMap immediately before the one wanted.
      */
      nextItem(obj: XMLImportMap): XMLImportMap
    /**

    - Gets the XMLImportMap positioned before the supplied index.
    - @param obj Index for the XMLImportMap immediately after the one wanted.
      */
      previousItem(obj: XMLImportMap): XMLImportMap
    /**

    - Builds executable source text that resolves back to the XMLImportMap.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
