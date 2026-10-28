# JPEGOptionsFormat

Community declaration reference: InDesign/2023.

Format selections for JPEG images after conversion.

```typescript
declare enum JPEGOptionsFormat {
    /**
    - Downloads the image with baseline encoding in a single pass.
      */
      BASELINE_ENCODING = 1785751394,
    /**

    - Downloads the image through progressive encoding, starting with a low-resolution pass and adding detail with later passes.
      */
      PROGRESSIVE_ENCODING = 1785751408,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
