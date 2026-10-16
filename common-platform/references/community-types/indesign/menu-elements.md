# MenuElements

Community declaration reference: InDesign/2023.

Collection object for menu elements.

```typescript
declare class MenuElements {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Retrieves the MenuElement addressed by the specified index.
    - @param index Index value.
      */
      [index: number]: MenuElement
    /**

    - Retrieves an arbitrary MenuElement from the collection.
      */
      anyItem(): MenuElement
    /**

    - Reports how many elements the MenuElement contains.
      */
      count(): number
    /**

    - Retrieves all MenuElement objects in the collection.
      */
      everyItem(): MenuElement[]
    /**

    - Retrieves the first MenuElement from the collection.
      */
      firstItem(): MenuElement
    /**

    - Retrieves the MenuElement addressed by the specified index or name.
    - @param index Index or name value.
      */
      item(index: number | string): MenuElement
    /**

    - Retrieves MenuElements entries bounded by the supplied range.
    - @param from Starting range endpoint: MenuElement, index, or name.
    - @param to Ending range endpoint: MenuElement, index, or name.
      */
      itemByRange(from: MenuElement | number | string, to: MenuElement | number | string): MenuElement[]
    /**

    - Retrieves the last MenuElement from the collection.
      */
      lastItem(): MenuElement
    /**

    - Retrieves the middle MenuElement from the collection.
      */
      middleItem(): MenuElement
    /**

    - Retrieves the MenuElement positioned after the supplied MenuElement in the collection.
    - @param obj MenuElement immediately before the desired MenuElement.
      */
      nextItem(obj: MenuElement): MenuElement
    /**

    - Retrieves the MenuElement positioned before the supplied index.
    - @param obj Index after the desired MenuElement.
      */
      previousItem(obj: MenuElement): MenuElement
    /**

    - Builds executable source text that resolves back to the MenuElement.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
