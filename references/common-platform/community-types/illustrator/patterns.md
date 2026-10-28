# Patterns

Community declaration reference: Illustrator/2022.

Collection containing Pattern objects.

```typescript
declare class Patterns extends Array<Pattern> {
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

    - Creates a pattern.
      */
      add(): Pattern
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): Pattern
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
