# GroupItems

Community declaration reference: Illustrator/2022.

Collection containing GroupItem objects.

```typescript
declare class GroupItems extends Array<GroupItem> {
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

    - Creates a group item.
      */
      add(): GroupItem
    /**

    - Creates a group item from a vector graphics file.
    - @param imageFile Vector graphics file to embed.
      */
      static createFromFile(imageFile: File): GroupItem
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): GroupItem
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
