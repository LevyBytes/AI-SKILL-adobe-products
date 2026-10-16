# LegacyTextItems

Community declaration reference: Illustrator/2022.

Collection containing LegacyTextItem objects.

```typescript
declare class LegacyTextItems extends Array<LegacyTextItem> {
    /**
    - Count of items held by this collection.
      */
      readonly length: number
    /**

    - Container object for this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Converts all legacy text items into text frames, deleting the original legacy text items.
      */
      convertToNative(): boolean
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): LegacyTextItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
