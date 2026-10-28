# Story

Community declaration reference: Illustrator/2022.

Contiguous text block object.

```typescript
declare class Story {
    /**
    - Character collection for this text range.
      */
      readonly characters: Characters
    /**

    - Insertion-point collection for this text range.
      */
      readonly insertionPoints: InsertionPoints
    /**

    - Character count for the story.
      */
      readonly length: number
    /**

    - Line collection for this text range.
      */
      readonly lines: Lines
    /**

    - Paragraph collection for this text range.
      */
      readonly paragraphs: Paragraphs
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Text frame items for this story.
      */
      readonly textFrames: TextFrameItems
    /**

    - Text range for the story.
      */
      readonly textRange: TextRange
    /**

    - Complete text collection for this text range.
      */
      readonly textRanges: TextRanges
    /**

    - Selected text range(s) for the story.
      */
      readonly textSelection: TextRange[]
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Word collection for this text range.
      */
      readonly words: Words
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
