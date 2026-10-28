# GradientStops

Community declaration reference: Illustrator/2022.

Collection containing GradientStop objects.

```typescript
declare class GradientStops extends Array<GradientStop> {
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

    - Creates a gradient stop.
      */
      add(): GradientStop
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): GradientStop
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
