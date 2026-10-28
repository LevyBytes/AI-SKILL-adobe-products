# Fitting

Community declaration reference: InDesign/2023.

Choices for fitting content into a frame.

```typescript
declare enum Fitting {
    /**
    - Uses Adobe Sensei to select the best content crop region for the frame. Note: Frame size is preserved, content size may scale, and centerImage property is turned off when this fitting is set.
      */
      CONTENT_AWARE_FITTING = 1684882241,
    /**

    - Scales content to fill the frame while maintaining content proportions. If content and frame proportions differ, the frame bounding box hides some content.
      */
      FILL_PROPORTIONAL = 1684883056,
    /**

    - Scales content to fit the frame. Note: Content with a different size than the frame appears stretched or squeezed.
      */
      FIT_CONTENT_TO_FRAME = 1684883043,
    /**

    - Changes the frame size so it fits the content.
      */
      FIT_FRAME_TO_CONTENT = 1684883046,
    /**

    - Applies frame fitting from the existing setting on the original frame.
      */
      HONOUR_EXISTING_STYLE = 1684883539,
    /**

    - Keeps the original sizes of both the frame and the content. Note: Content larger than the frame is hidden along the edges.
      */
      PRESERVE_SIZES = 1684885619,
    /**

    - Scales content to fit the frame while keeping content proportions. If their proportions differ, empty space appears inside the frame.
      */
      PROPORTIONAL = 1684885618,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
