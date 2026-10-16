# FitOptions

Community declaration reference: InDesign/2023.

Choices for fitting content to a frame.

```typescript
declare enum FitOptions {
    /**
    - Applies the frame's current fitting options to both frame and content. Before using this, confirm that the expected Frame Fitting Options are set on the frame. For example, placing an image in a frame set to 'Fit Content Proportionally' can alter crop settings in the Frame Fitting Options; those changed settings may later be applied to subsequent image placements when this API is called.
      */
      APPLY_FRAME_FITTING_OPTIONS = 1634100847,
    /**

    - Centers the content within the frame while preserving frame size, content size, and proportions. Note: when content exceeds the frame, edge content is hidden.
      */
      CENTER_CONTENT = 1667591779,
    /**

    - Uses Adobe Sensei to choose the best crop region of the content for the frame. Note: frame size is preserved, but content size may be scaled.
      */
      CONTENT_AWARE_FIT = 1667327593,
    /**

    - Resizes content so it fits the frame. Note: content with a different size than the frame is stretched or squeezed.
      */
      CONTENT_TO_FRAME = 1668575078,
    /**

    - Resizes content to fill the frame while preserving the content's proportions. If frame and content proportions differ, the frame's bounding box hides some content.
      */
      FILL_PROPORTIONALLY = 1718185072,
    /**

    - Adjusts the frame dimensions to match the content.
      */
      FRAME_TO_CONTENT = 1718906723,
    /**

    - Fits the content inside the frame without changing its proportions. If frame and content proportions differ, empty space remains in the frame.
      */
      PROPORTIONALLY = 1668247152,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
