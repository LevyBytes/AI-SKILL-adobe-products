# TextFonts

Community declaration reference: Illustrator/2022.

Collection containing TextFont objects.

```typescript
declare class TextFonts extends Array<TextFont> {
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

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): TextFont
    /**

    - Returns the name of the current font.
      */
      getCurrentFont(): string
    /**

    - Returns the Text Font for the font name; if unavailable, creates the substitute font.
    - @param fontName Font name to find or use for substitute creation.
      */
      getFontByName(fontName: string): TextFont
    /**

    - Checks whether any original font exists with the given name.
    - @param fontName Name of the font to locate.
      */
      isFontAvailable(fontName: string): boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
