# ListBoxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ListBoxes {
    /**
    - Gets an arbitrary ListBox from the collection.
      */
      anyItem(): ListBox
    /**
    - Gets all ListBox entries from the collection.
      */
      everyItem(): ListBox[]
    /**
    - Gets the first ListBox in the collection.
      */
      firstItem(): ListBox
    /**
    - Gets the final ListBox in the collection.
      */
      lastItem(): ListBox
    /**
    - Gets the central ListBox from the collection.
      */
      middleItem(): ListBox
    /**
    - Gets the ListBox positioned immediately after the specified ListBox.
    - @param obj ListBox that precedes the requested ListBox.
      */
      nextItem(obj: ListBox): ListBox
    /**
    - Gets the ListBox positioned immediately before the specified index.
    - @param obj Index of the ListBox that comes after the requested ListBox.
      */
      previousItem(obj: ListBox): ListBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
