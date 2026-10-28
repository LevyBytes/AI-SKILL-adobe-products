# CharacterStyle

Community declaration reference: Illustrator/2022.

Named style storing character attributes.

```typescript
declare class CharacterStyle {
    /**
    - Character formatting attributes for this text range.
      */
      readonly characterAttributes: CharacterAttributes
    /**

    - Name assigned to the character style.
      */
      name: string
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Object class identifier.
      */
      readonly typename: string
    /**

    - Appends an element.
      */
      add(): CharacterStyle
    /**

    - Applies this character style to text object(s).
    - @param textItem Text object(s) that receive the style.
    - @param clearingOverrides Whether existing text attributes are cleared before applying the style.
      */
      applyTo(textItem: any, clearingOverrides?: boolean): void
    /**

    - Clears every attribute from this character style.
      */
      clear(): void
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Clears every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
