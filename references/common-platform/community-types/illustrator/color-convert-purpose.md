# ColorConvertPurpose

Community declaration reference: Illustrator/2022.

Purpose codes for color conversion through ConvertSmapleColor.

```typescript
declare enum ColorConvertPurpose {
    /**
    - Standard conversion, with no black preservation.
      */
      defaultpurpose = 0,
    /**

    - Placeholder option.
      */
      dummypurpose = 4,
    /**

    - Options suited to building an image for print or export.
      */
      exportpurpose = 2,
    /**

    - Options suited to building an image for screen display.
      */
      previewpurpose = 1,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
