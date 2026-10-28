# DocumentMode

Community declaration reference: Photoshop/2015.5.

Color mode assigned to the document.

```typescript
declare enum DocumentMode {
    /**
    - Bitmap mode; pixels are represented by either black or white.
      */
      BITMAP = 5,
    /**

    - CMYK mode.
      */
      CMYK = 3,
    /**

    - Duotone mode creates grayscale images using one to four custom inks: monotone, duotone (two-color), tritone (three-color), or quadtone (four-color).
      */
      DUOTONE = 8,
    /**

    - Grayscale mode.
      */
      GRAYSCALE = 1,
    /**

    - Indexed color limits the image to at most 256 colors, matching GIF and PNG-8 conventions and many multimedia workflows.
      */
      INDEXEDCOLOR = 6,
    /**

    - Lab mode.
      */
      LAB = 4,
    /**

    - Image mode with multiple color channels.
      */
      MULTICHANNEL = 7,
    /**

    - RGB mode.
      */
      RGB = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
