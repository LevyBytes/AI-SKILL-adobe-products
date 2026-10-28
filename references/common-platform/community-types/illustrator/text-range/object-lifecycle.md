# TextRange object lifecycle

Community declaration reference: Illustrator/2022.

```typescript
declare class TextRange {
    /**
    - Makes a duplicate of this object.
    - @param relativeObject
    - @param insertionLocation
      */
      duplicate(relativeObject: object, insertionLocation: any): TextRange
    /**
    - Repositions the object.
    - @param relativeObject
    - @param insertionLocation
      */
      move(relativeObject: object, insertionLocation: any): TextRange
    /**
    - Removes this object.
      */
      remove(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
