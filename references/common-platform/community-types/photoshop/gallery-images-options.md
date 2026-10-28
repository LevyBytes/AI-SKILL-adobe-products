# GalleryImagesOptions

Community declaration reference: Photoshop/2015.5.

Deprecated; Bridge now owns the make photo gallery method.

```typescript
declare class GalleryImagesOptions {
    /**
    - Border-pixel amount placed between images.
      */
      static border: number
    /**

    - Turns on caption generation for images.
      */
      static caption: boolean
    /**

    - Resized image dimension, in pixels.
      */
      static dimension: number
    /**

    - Font used for gallery image text.
      */
      static font: GalleryFontType
    /**

    - Font size used for gallery image text.
      */
      static fontSize: number
    /**

    - JPEG image quality setting.
      */
      static imageQuality: number
    /**

    - Adds copyright text to gallery image text.
      */
      static includeCopyright: boolean
    /**

    - Adds credits text to gallery image text.
      */
      static includeCredits: boolean
    /**

    - Adds the file name to gallery image text.
      */
      static includeFilename: boolean
    /**

    - Adds the title to gallery image text.
      */
      static includeTitle: boolean
    /**

    - Adds numeric navigation links.
      */
      static numericLinks: boolean
    /**

    - Constraint mode for image resizing.
      */
      static resizeConstraint: GalleryConstrainType
    /**

    - Enables image resizing data.
      */
      static resizeImages: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
