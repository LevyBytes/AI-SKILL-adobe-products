# TrimType

Community declaration reference: Photoshop/2015.5.

Pixel category trimmed around an image.

```typescript
declare enum TrimType {
    /**
    - Removes an image area matching the lower-right pixel color.
      */
      BOTTOMRIGHT = 9,
    /**

    - Removes an image area matching the upper-left pixel color.
      */
      TOPLEFT = 1,
    /**

    - Removes transparent edge pixels, leaving the smallest image that still contains nontransparent pixels.
      */
      TRANSPARENT = 0,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
