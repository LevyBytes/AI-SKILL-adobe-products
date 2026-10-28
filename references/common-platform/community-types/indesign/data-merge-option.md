# DataMergeOption

Community declaration reference: InDesign/2023.

Options for data merge.

```typescript
declare class DataMergeOption extends Preference {
    /**
    - When true, the image is centered in the frame while frame size plus content size and proportions are preserved. Note: Content larger than the frame is clipped around the edges by the frame bounding box. This doesn't work with fittingOption CONTENT_AWARE_FIT
      */
      centerImage: boolean
    /**

    - When true, merging records creates a new document.
      */
      createNewDocument: boolean
    /**

    - Maximum pages allowed per document.
      */
      documentSize: number
    /**

    - Instructions for fitting content into a frame.
      */
      fittingOption: Fitting
    /**

    - When true, images are linked to the target document. When false, images are embedded in the target document.
      */
      linkImages: boolean
    /**

    - When true, blank lines created by empty fields are removed.
      */
      removeBlankLines: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
