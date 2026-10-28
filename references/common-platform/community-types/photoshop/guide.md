# Guide

Community declaration reference: Photoshop/2015.5.

Guide within the document.

```typescript
declare class Guide {
    /**
    - Guide location measured from the image origin.
      */
      coordinate: UnitValue | number
    /**

    - Whether the guide is vertical or horizontal.
      */
      direction: Direction
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
