# TextFonts

Community declaration reference: Photoshop/2015.5.

Fonts available from the computer as a collection.

```typescript
declare class TextFonts {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Returns the collection element at the supplied index.
    - @param index
      */
      [index: number]: TextFont
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): TextFont
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
