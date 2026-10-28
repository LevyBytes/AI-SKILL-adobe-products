# Characters

Community declaration reference: InDesign/2023.

Character collection.

```typescript
declare class Characters {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the Character at the supplied index.
    - @param index Index value.
      */
      [index: number]: Character
    /**

    - Selects an arbitrary Character from the collection.
      */
      anyItem(): Character
    /**

    - Reports how many elements the Character collection contains.
      */
      count(): number
    /**

    - Gets all Character entries from the collection.
      */
      everyItem(): Character[]
    /**

    - Gets the initial Character in the collection.
      */
      firstItem(): Character
    /**

    - Gets the Character identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Character
    /**

    - Gets Characters over the supplied range.
    - @param from Starting Character, index, or name for the range.
    - @param to Ending Character, index, or name for the range.
      */
      itemByRange(from: Character | number | string, to: Character | number | string): Character[]
    /**

    - Gets the final Character in the collection.
      */
      lastItem(): Character
    /**

    - Gets the central Character in the collection.
      */
      middleItem(): Character
    /**

    - Gets the Character positioned after the supplied Character in the collection.
    - @param obj Character that precedes the wanted Character.
      */
      nextItem(obj: Character): Character
    /**

    - Gets the Character positioned immediately before the supplied index.
    - @param obj Index for the Character that comes after the wanted Character.
      */
      previousItem(obj: Character): Character
    /**

    - Builds executable source text that resolves back to the Character.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
