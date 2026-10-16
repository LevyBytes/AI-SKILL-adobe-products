# PanningTypes

Community declaration reference: InDesign/2023.

Display-performance settings used while scrolling.

```typescript
declare enum PanningTypes {
    /**
    - During scrolling, newly revealed images are greeked until mouse release; display quality and performance are both medium.
      */
      GREEK_IMAGES = 1699111248,
    /**

    - During scrolling, newly revealed images and text are greeked until mouse release; display quality is highest and performance slowest.
      */
      GREEK_IMAGES_AND_TEXT = 1699639120,
    /**

    - During scrolling, images and text are not greeked; display quality is lowest and performance fastest.
      */
      NO_GREEKING = 1699116368,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
