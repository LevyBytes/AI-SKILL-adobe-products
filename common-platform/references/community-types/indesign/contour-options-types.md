# ContourOptionsTypes

Community declaration reference: InDesign/2023.

Path basis choices for contour text wrap.

```typescript
declare enum ContourOptionsTypes {
    /**
    - Uses the specified alpha channel's edges as the text wrap shape. To specify the alpha channel, see contour path name.
      */
      ALPHA_CHANNEL = 1634756707,
    /**

    - Uses the object's bounding box as the text wrap shape.
      */
      BOUNDING_BOX = 1701732962,
    /**

    - Uses the image edges as the text wrap shape.
      */
      DETECT_EDGES = 1685349735,
    /**

    - Uses the wrapped object's graphics frame as the text wrap shape.
      */
      GRAPHIC_FRAME = 1701734246,
    /**

    - Uses the specified Photoshop path as the text wrap shape. To specify the Photoshop path, see contour path name.
      */
      PHOTOSHOP_PATH = 1886613620,
    /**

    - Uses the clipping path, if Photoshop defines one, as the text wrap shape. Note: this enumeration cannot specify a path. To use a specific path for the text wrap shape, use the photoshop path contour options type enumeration value.
      */
      SAME_AS_CLIPPING = 1935762288,
    /**

    - Smart Text Wrap uses Adobe Sensei to choose the key Subject in the content.
      */
      SELECT_SUBJECT = 1685087092,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
