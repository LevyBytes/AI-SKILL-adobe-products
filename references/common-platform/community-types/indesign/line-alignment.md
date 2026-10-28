# LineAlignment

Community declaration reference: InDesign/2023.

Choices for line justification.

```typescript
declare enum LineAlignment {
    /**
    - Centers the text.
      */
      CENTER_LINE_ALIGN = 1818321774,
    /**

    - For horizontal text, justifies both left and right edges and centers the final line; for vertical text, justifies top and bottom and centers the final line.
      */
      CENTER_LINE_JUSTIFY = 1818455658,
    /**

    - For horizontal text, justifies both left and right edges; for vertical text, justifies top and bottom so every line matches in length.
      */
      FULL_LINE_JUSTIFY = 1818651754,
    /**

    - Aligns horizontal text to the left, or vertical text to the top.
      */
      LEFT_OR_TOP_LINE_ALIGN = 1818324084,
    /**

    - For horizontal text, justifies left and right edges while left-aligning the final line; for vertical text, justifies top and bottom while top-aligning the final line.
      */
      LEFT_OR_TOP_LINE_JUSTIFY = 1819047018,
    /**

    - Aligns horizontal text to the right, or vertical text to the bottom.
      */
      RIGHT_OR_BOTTOM_LINE_ALIGN = 1818325602,
    /**

    - For horizontal text, justifies left and right edges while right-aligning the final line; for vertical text, justifies top and bottom while bottom-aligning the final line.
      */
      RIGHT_OR_BOTTOM_LINE_JUSTIFY = 1819435626,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
