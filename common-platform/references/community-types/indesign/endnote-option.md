# EndnoteOption

Community declaration reference: InDesign/2023.

Options that define default endnote formatting.

```typescript
declare class EndnoteOption extends Preference {
    /**
    - Position of endnote reference numbers in main text.
      */
      endnoteMarkerPositioning: FootnoteMarkerPositioning | string
    /**

    - Character style applied to endnote reference numbers in main text.
      */
      endnoteMarkerStyle: CharacterStyle
    /**

    - Endnote numbering style.
      */
      endnoteNumberingStyle: FootnoteNumberingStyle | string
    /**

    - Endnote prefix text. (Limit: 0 to 100 characters)
      */
      endnotePrefix: string
    /**

    - Text inserted between the endnote marker number and endnote text. (Range: 0 to 100 characters)
      */
      endnoteSeparatorText: string
    /**

    - Endnote suffix text. (Limit: 0 to 100 characters)
      */
      endnoteSuffix: string
    /**

    - Paragraph style applied to endnote text.
      */
      endnoteTextStyle: ParagraphStyle
    /**

    - Endnote title. (Limit: 0 to 100 characters)
      */
      endnoteTitle: string
    /**

    - Paragraph style applied to the endnote title.
      */
      endnoteTitleStyle: ParagraphStyle
    /**

    - Endnote frame creation behavior.
      */
      frameCreateOption: EndnoteFrameCreate | string
    /**

    - Point where endnote numbering restarts.
      */
      restartEndnoteNumbering: EndnoteRestarting | string
    /**

    - Scope value for endnotes.
      */
      scopeValue: EndnoteScope | string
    /**

    - Position for the endnote prefix and/or suffix.
      */
      showEndnotePrefixSuffix: FootnotePrefixSuffix | string
    /**

    - Starting number for endnote numbering.
      */
      startEndnoteNumberAt: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
