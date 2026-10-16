# ImageIOPreference

Community declaration reference: InDesign/2023.

Preferences for Image I/O.

```typescript
declare class ImageIOPreference extends Preference {
    /**
    - When true, auto embedding is allowed.
      */
      allowAutoEmbedding: boolean
    /**

    - Alpha channel name.
      */
      alphaChannelName: string
    /**

    - When true, clipping paths defined in Photoshop are applied to placed images.
      */
      applyPhotoshopClippingPath: boolean
    /**

    - Image resolution in ppi, assigned when the graphic is imported.
      */
      readonly previewResolution: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
