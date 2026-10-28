# Artboards

Community declaration reference: Illustrator/2022.

Collection containing Artboard objects.

```typescript
declare class Artboards extends Array<Artboard> {
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

    - Adds an artboard object.
    - @param artboardRect Artboard size and position.
      */
      add(artboardRect: Rect): Artboard
    /**

    - Returns the active artboard's index position within the document list.
      */
      getActiveArtboardIndex(): number
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): Artboard
    /**

    - Returns the first Artboard that matches a specified name.
    - @param artboardName Name assigned to the artboard.
      */
      getByName(artboardName: string): Artboard
    /**

    - Inserts an Artboard at a specified location.
    - @param artboardRect Artboard size and position.
    - @param index Index position for inserting the artboard.
      */
      insert(artboardRect: Rect, index: number): void
    /**

    - Removes an artboard object.
    - @param index Index of the crop area targeted for deletion.
      */
      remove(index: number): void
    /**

    - Removes every element.
      */
      removeAll(): void
    /**

    - Activates one artboard and makes it current for iteration order.
    - @param index Position in the document's artboard list, using 0-based indexing.
      */
      setActiveArtboardIndex(index: number): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
