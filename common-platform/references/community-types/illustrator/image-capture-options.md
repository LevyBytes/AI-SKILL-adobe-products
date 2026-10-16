# ImageCaptureOptions

Community declaration reference: Illustrator/2022.

Options accepted when a portion of the artwork is captured as a 24 bit PNG file.

```typescript
declare class ImageCaptureOptions {
    /**
    - Controls whether the resulting image is antialiased.
      */
      static antiAliasing: boolean
    /**

    - Controls whether the artboard is matted with a color.
      */
      static matte: boolean
    /**

    - Artboard matte color; default: white.
      */
      static matteColor: RGBColor
    /**

    - Specifies the resolution of the captured image file.
      */
      static resolution: number
    /**

    - Controls whether the resulting image uses transparency.
      */
      static transparency: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
