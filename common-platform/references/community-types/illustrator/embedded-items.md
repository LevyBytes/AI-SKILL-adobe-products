# EmbeddedItems

Community declaration reference: Illustrator/2022.

EmbeddedItems collection.

```typescript
declare class EmbeddedItems extends Array<EmbedItem> {
    /**
    - Count of items held by this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Creates an embedded item.
      */
      add(): EmbedItem
    /**

    - Returns the first collection entry matching the supplied name.
    - @param name
      */
      getByName(name: string): EmbedItem
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
