# ParagraphStyle

Community declaration reference: Illustrator/2022.

Named style storing paragraph attributes.

```typescript
declare class ParagraphStyle {
    /**
    - Character formatting attributes for this text range.
      */
      readonly characterAttributes: CharacterAttributes
    /**

    - Name assigned to the paragraph style.
      */
      name: string
    /**

    - Paragraph formatting attributes for this text range.
      */
      readonly paragraphAttributes: ParagraphAttributes
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
      add(): ParagraphStyle
    /**

    - Applies this paragraph style to text object(s).
    - @param textItem Text object(s) that receive the style.
    - @param clearingOverrides Whether existing text attributes are cleared before applying the style.
      */
      applyTo(textItem: any, clearingOverrides?: boolean): void
    /**

    - Clears every attribute from this paragraph style.
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
