# Image

Community declaration reference: InDesign/2023.

Imported bitmap image using a bitmap format such as TIFF, JPEG, or GIF.

```typescript
declare class Image extends Graphic {
    /**
    - Native resolution for a placed graphic.
      */
      readonly actualPpi: number[]
    /**

    - Settings for the clipping path.
      */
      readonly clippingPath: ClippingPathSettings
    /**

    - Graphic resolution after resizing.
      */
      readonly effectivePpi: number[]
    /**

    - Settings for graphic layer options.
      */
      readonly graphicLayerOptions: GraphicLayerOption
    /**

    - Image I/O preference properties used to control image import preferences.
      */
      readonly imageIOPreferences: ImageIOPreference
    /**

    - Rendering intent override used for the image.
      */
      imageRenderingIntent: RenderingIntent
    /**

    - Color profile value.
      */
      profile: Profile | string
    /**

    - List containing valid RGB profiles.
      */
      readonly profileList: string[]
    /**

    - Color space value.
      */
      readonly space: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
