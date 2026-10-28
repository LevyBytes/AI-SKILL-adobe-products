# ImageFormat

Community declaration reference: Animate/22.0.

ImageFormat value accepted by SpriteSheetExporter.exportSpriteSheet();

```typescript
declare interface ImageFormat {
    /**
    - "png" and "jpg" are the valid values.
      */
      format: string
    /**
    - Valid color value, with optional alpha.
      */
      backgroundColor: string | number
    /**
    - Applies only when ImageFormat.format is "jpg".
    - Integer range is 1 to 100.
      */
      quality: number
    /**
    - Applies only when ImageFormat.format is "png".
    - Allowed integer values are 8, 24, or 32.
      */
      bitDepth: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
