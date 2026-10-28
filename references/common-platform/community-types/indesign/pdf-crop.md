# PDFCrop

Community declaration reference: InDesign/2023.

Portion of a PDF document used for placement.

```typescript
declare enum PDFCrop {
    /**
    - Places only the placeable-artwork area designated by the PDF author.
      */
      CROP_ART = 1131573313,
    /**

    - Places only the area representing clipped content.
      */
      CROP_BLEED = 1131573314,
    /**

    - Places the page bounding box while using all layers.
      */
      CROP_CONTENT_ALL_LAYERS = 1131561324,
    /**

    - Places the page bounding box while using visible layers only.
      */
      CROP_CONTENT_VISIBLE_LAYERS = 1131566703,
    /**

    - Places the area corresponding to the original PDF document's physical paper size.
      */
      CROP_MEDIA = 1131573325,
    /**

    - Places only the area shown by Acrobat.
      */
      CROP_PDF = 1131573328,
    /**

    - Places only the area corresponding to the document's final trim size.
      */
      CROP_TRIM = 1131573332,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
