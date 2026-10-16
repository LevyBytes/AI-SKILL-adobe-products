# Menus

Community declaration reference: InDesign/2023.

Collection object for menus.

```typescript
declare class Menus {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Retrieves the Menu addressed by the specified index.
    - @param index Index value.
      */
      [index: number]: Menu
    /**

    - Retrieves an arbitrary Menu from the collection.
      */
      anyItem(): Menu
    /**

    - Reports how many elements the Menu contains.
      */
      count(): number
    /**

    - Retrieves all Menu objects in the collection.
      */
      everyItem(): Menu[]
    /**

    - Retrieves the first Menu from the collection.
      */
      firstItem(): Menu
    /**

    - Retrieves the Menu addressed by the specified index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Menu
    /**

    - Retrieves the Menu that has the specified name.
    - @param name Name value.
      */
      itemByName(name: string): Menu
    /**

    - Retrieves Menus entries bounded by the supplied range.
    - @param from Starting range endpoint: Menu, index, or name.
    - @param to Ending range endpoint: Menu, index, or name.
      */
      itemByRange(from: Menu | number | string, to: Menu | number | string): Menu[]
    /**

    - Retrieves the last Menu from the collection.
      */
      lastItem(): Menu
    /**

    - Retrieves the middle Menu from the collection.
      */
      middleItem(): Menu
    /**

    - Retrieves the Menu positioned after the supplied Menu in the collection.
    - @param obj Menu immediately before the desired Menu.
      */
      nextItem(obj: Menu): Menu
    /**

    - Retrieves the Menu positioned before the supplied index.
    - @param obj Index after the desired Menu.
      */
      previousItem(obj: Menu): Menu
    /**

    - Builds executable source text that resolves back to the Menu.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
