# Preferences

Community declaration reference: InDesign/2023.

Collection of Preference objects.

```typescript
declare class Preferences {
    /**
    - Number of objects in the collection.
      */
      readonly length: number
    /**

    - Gets the Preference at the specified index.
    - @param index Index.
      */
      [index: number]: Preference
    /**

    - Gets any Preference from the collection.
      */
      anyItem(): Preference
    /**

    - Shows the element count in the Preference.
      */
      count(): number
    /**

    - Gets every Preference from the collection.
      */
      everyItem(): Preference[]
    /**

    - Gets the first Preference in the collection.
      */
      firstItem(): Preference
    /**

    - Gets the Preference at the specified index or name.
    - @param index Index or name.
      */
      item(index: number | string): Preference
    /**

    - Gets Preferences within the specified range.
    - @param from Preference, index, or name at the start of the range.
    - @param to Ending Preference, index, or name for the range.
      */
      itemByRange(from: Preference | number | string, to: Preference | number | string): Preference[]
    /**

    - Gets the last Preference in the collection.
      */
      lastItem(): Preference
    /**

    - Gets the middle Preference in the collection.
      */
      middleItem(): Preference
    /**

    - Gets the collection Preference positioned after the specified Preference.
    - @param obj Preference whose index comes before the requested Preference.
      */
      nextItem(obj: Preference): Preference
    /**

    - Gets the Preference with the index before the specified index.
    - @param obj Index of the Preference that follows the requested Preference.
      */
      previousItem(obj: Preference): Preference
    /**

    - Builds a string that returns the Preference if executed.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
