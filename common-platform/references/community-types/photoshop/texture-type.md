# TextureType

Community declaration reference: Photoshop/2015.5.

Selects the texture or glass-surface source image for a texturizer or glass filter.

```typescript
declare enum TextureType {
    /**
    - Makes the image look viewed through glass blocks.
      */
      BLOCKS = 1,
    /**

    - Makes the image look painted on canvas.
      */
      CANVAS = 2,
    /**

    - Uses texture from an open document.
      */
      FILE = 5,
    /**

    - Gives the image a frosted appearance.
      */
      FROSTED = 3,
    /**

    - Makes the image look viewed through many tiny lenses.
      */
      TINYLENS = 4,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
