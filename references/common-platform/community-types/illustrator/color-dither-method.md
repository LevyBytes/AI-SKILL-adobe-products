# ColorDitherMethod

Community declaration reference: Illustrator/2022.

Color dither method for PNG8 and GIF exports.

```typescript
declare enum ColorDitherMethod {
    /**
    - */
      DIFFUSION = 0x4466736e,
    /**

    - */
      NOISE = 0x424e6f69,
    /**

    - Dithering is not applied.
      */
      NOREDUCTION = 0x4e6f6e65,
    /**

    - */
      PATTERNDITHER = 0x5074726e,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
