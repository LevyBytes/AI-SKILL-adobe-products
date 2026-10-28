# EmptyFrameFittingOptions

Community declaration reference: InDesign/2023.

Fitting choices for content placed in an empty frame.

```typescript
declare enum EmptyFrameFittingOptions {
    /**
    - Resizes content so it fits the frame. Note: content with proportions different from the frame is stretched or squeezed.
      */
      CONTENT_TO_FRAME = 1668575078,
    /**

    - Resizes content to fill the frame while preserving the content's proportions. If frame and content proportions differ, the frame hides part of the content.
      */
      FILL_PROPORTIONALLY = 1718185072,
    /**

    - Uses no fitting option.
      */
      NONE = 1852796517,
    /**

    - Resizes content to fit the frame without changing content proportions. If the proportions differ, empty space remains inside the frame.
      */
      PROPORTIONALLY = 1668247152,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
