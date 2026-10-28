# InsertionPoint

Community declaration reference: Illustrator/2022.

Position between characters where new text objects can be inserted.

```typescript
declare class InsertionPoint {
    /**
    - Character collection for this text range.
      */
      readonly characters: Characters
    /**

    - Line collection for this text range.
      */
      readonly lines: Lines
    /**

    - Paragraph collection for this text range.
      */
      readonly paragraphs: Paragraphs
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Story associated with this text range.
      */
      readonly story: Story
    /**

    - TextRanges collection for this text range.
      */
      readonly textRanges: TextRanges
    /**

    - Object class identifier.
      */
      readonly typename: string
    /**

    - Word collection for this text range.
      */
      readonly words: Words
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
