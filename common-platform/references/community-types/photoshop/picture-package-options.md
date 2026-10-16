# PicturePackageOptions

Community declaration reference: Photoshop/2015.5.

Settings available for a Picture Package.

```typescript
declare class PicturePackageOptions {
    /**
    - Content information value.
      */
      static content: PicturePackageTextType
    /**

    - When true, merges all layers in the resulting document.
      */
      static flatten: boolean
    /**

    - Font used by security text.
      */
      static font: GalleryFontType
    /**

    - Font size value.
      */
      static fontSize: number
    /**

    - Layout used to build the picture package.
      */
      static layout: string
    /**

    - Document color mode setting.
      */
      static mode: NewDocumentMode
    /**

    - Web page security text opacity percentage. Range: 0 to 100.
      */
      static opacity: number
    /**

    - Document resolution, measured in pixels per inch.
      */
      static resolution: number
    /**

    - Custom text for the picture package.
      */
      static text: string
    /**

    - Security text color.
      */
      static textColor: RGBColor
    /**

    - Security text position.
      */
      static textPosition: GallerySecurityTextPositionType
    /**

    - Security text orientation.
      */
      static textRotate: GallerySecurityTextRotateType
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
