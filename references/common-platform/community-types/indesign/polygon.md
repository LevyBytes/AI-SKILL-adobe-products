# Polygon

Community declaration reference: InDesign/2023.

Polygon object. It covers shapes other than rectangles, ellipses, or graphic lines. When one is added, InDesign builds a regular polygon from the active polygon preferences settings.

```typescript
declare class Polygon extends SplineItem {
    /**
    - Frame fitting option used for placed or pasted content; it can apply at the frame, object style, document, or application level.
      */
      readonly frameFittingOptions: FrameFittingOption
    /**

    - Options used when exporting the InCopy INCX document format.
      */
      readonly incopyExportOptions: InCopyExportOption
    /**

    - Title assigned to this InCopy story.
      */
      storyTitle: string
    /**

    - Clears frame fitting options and restores the starting state.
      */
      clearFrameFittingOptions(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
