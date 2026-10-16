# LayoutWindows

Community declaration reference: InDesign/2023.

Collection containing layout windows.

```typescript
declare class LayoutWindows {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Gets the LayoutWindow at the specified index.
    - @param index Requested index.
      */
      [index: number]: LayoutWindow
    /**

    - Gets an arbitrary LayoutWindow from the collection.
      */
      anyItem(): LayoutWindow
    /**

    - Shows how many elements the LayoutWindow collection contains.
      */
      count(): number
    /**

    - Gets all LayoutWindow objects in this collection.
      */
      everyItem(): LayoutWindow[]
    /**

    - Gets the initial LayoutWindow in the collection.
      */
      firstItem(): LayoutWindow
    /**

    - Gets the LayoutWindow matching the provided index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): LayoutWindow
    /**

    - Gets the LayoutWindow whose name matches the argument.
    - @param name Name to resolve.
      */
      itemByName(name: string): LayoutWindow
    /**

    - Gets LayoutWindows contained in the supplied range.
    - @param from LayoutWindow, index, or name that starts the range.
    - @param to LayoutWindow, index, or name that ends the range.
      */
      itemByRange(from: LayoutWindow | number | string, to: LayoutWindow | number | string): LayoutWindow[]
    /**

    - Gets the final LayoutWindow in the collection.
      */
      lastItem(): LayoutWindow
    /**

    - Gets the central LayoutWindow from this collection.
      */
      middleItem(): LayoutWindow
    /**

    - Gets the LayoutWindow positioned after the supplied LayoutWindow in the collection.
    - @param obj LayoutWindow located just before the target LayoutWindow.
      */
      nextItem(obj: LayoutWindow): LayoutWindow
    /**

    - Gets the LayoutWindow immediately before the supplied index.
    - @param obj Index for the LayoutWindow that comes after the target LayoutWindow.
      */
      previousItem(obj: LayoutWindow): LayoutWindow
    /**

    - Builds source text that evaluates back to this LayoutWindow.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
