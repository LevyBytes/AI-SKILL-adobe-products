# Widgets

Community declaration reference: InDesign/2023.

Collection wrapper for Widget objects.

```typescript
declare class Widgets {
    /**
    - How many objects the collection contains.
      */
      readonly length: number
    /**

    - Accesses the Widget at index.
    - @param index Index value.
      */
      [index: number]: Widget
    /**

    - Selects an arbitrary Widget from the collection.
      */
      anyItem(): Widget
    /**

    - Reports the element count for Widget.
      */
      count(): number
    /**

    - Provides every Widget in the collection.
      */
      everyItem(): Widget[]
    /**

    - Provides the first Widget in the collection.
      */
      firstItem(): Widget
    /**

    - Finds the Widget by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Widget
    /**

    - Finds the Widget by ID.
    - @param id ID value.
      */
      itemByID(id: number): Widget
    /**

    - Builds a range of Widgets.
    - @param from Starting Widget, index, or name for the range.
    - @param to Ending Widget, index, or name for the range.
      */
      itemByRange(from: Widget | number | string, to: Widget | number | string): Widget[]
    /**

    - Provides the final Widget in the collection.
      */
      lastItem(): Widget
    /**

    - Provides the middle Widget in the collection.
      */
      middleItem(): Widget
    /**

    - Provides the Widget after obj in collection order.
    - @param obj Widget positioned before the requested Widget.
      */
      nextItem(obj: Widget): Widget
    /**

    - Provides the Widget before obj in collection order.
    - @param obj Index positioned after the requested Widget.
      */
      previousItem(obj: Widget): Widget
    /**

    - Produces source text that can evaluate back to the Widget.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
