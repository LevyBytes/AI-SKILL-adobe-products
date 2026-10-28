# StoryWindows

Community declaration reference: InDesign/2023.

Collection containing story windows.

```typescript
declare class StoryWindows {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Gets the StoryWindow at the specified index.
    - @param index Requested index.
      */
      [index: number]: StoryWindow
    /**

    - Gets an arbitrary StoryWindow from the collection.
      */
      anyItem(): StoryWindow
    /**

    - Shows how many elements the StoryWindow collection contains.
      */
      count(): number
    /**

    - Gets all StoryWindow objects in this collection.
      */
      everyItem(): StoryWindow[]
    /**

    - Gets the initial StoryWindow in the collection.
      */
      firstItem(): StoryWindow
    /**

    - Gets the StoryWindow matching the provided index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): StoryWindow
    /**

    - Gets the StoryWindow whose name matches the argument.
    - @param name Name to resolve.
      */
      itemByName(name: string): StoryWindow
    /**

    - Gets StoryWindows contained in the supplied range.
    - @param from StoryWindow, index, or name that starts the range.
    - @param to StoryWindow, index, or name that ends the range.
      */
      itemByRange(from: StoryWindow | number | string, to: StoryWindow | number | string): StoryWindow[]
    /**

    - Gets the final StoryWindow in the collection.
      */
      lastItem(): StoryWindow
    /**

    - Gets the central StoryWindow from this collection.
      */
      middleItem(): StoryWindow
    /**

    - Gets the StoryWindow positioned after the supplied StoryWindow in this collection.
    - @param obj StoryWindow located just before the target StoryWindow.
      */
      nextItem(obj: StoryWindow): StoryWindow
    /**

    - Gets the StoryWindow immediately before the supplied index.
    - @param obj Index for the StoryWindow that comes after the target StoryWindow.
      */
      previousItem(obj: StoryWindow): StoryWindow
    /**

    - Builds source text that evaluates back to this StoryWindow.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
