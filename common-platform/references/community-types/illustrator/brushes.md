# Brushes

Community declaration reference: Illustrator/2022.

Collection containing Brush objects.

```typescript
declare class Brushes extends Array<Brush> {
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

    - Creates a brush.
    - @param brushDefinition Brush definition used to create the brush.
    - @param brushName Brush name.
      */
      add(brushDefinition: File, brushName?: string): Brush
    /**

    - Creates a brush, selects the brush tool, and loads the new brush into that tool.
    - @param brushDefinition Brush definition used to create the brush.
      */
      static addAndLoad(brushDefinition: File): Brush
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): Brush
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
