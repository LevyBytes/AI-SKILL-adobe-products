# CompressionQuality

Community declaration reference: InDesign/2023.

Bitmap-image compression amount and type.

```typescript
declare enum CompressionQuality {
    /**
    - Applies 8-bit compression. Valid only when bitmap compression is ZIP.
      */
      EIGHT_BIT = 1701722210,
    /**

    - Applies 4-bit compression. Valid only when bitmap compression is ZIP.
      */
      FOUR_BIT = 1701721186,
    /**

    - Applies high compression. Not valid when bitmap compression is ZIP.
      */
      HIGH = 1701726313,
    /**

    - Applies low compression. Not valid when bitmap compression is ZIP.
      */
      LOW = 1701727351,
    /**

    - Applies maximum compression. Not valid when bitmap compression is ZIP.
      */
      MAXIMUM = 1701727608,
    /**

    - Applies medium compression. Not valid when bitmap compression is ZIP.
      */
      MEDIUM = 1701727588,
    /**

    - Applies minimum compression. Not valid when bitmap compression is ZIP.
      */
      MINIMUM = 1701727598,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
