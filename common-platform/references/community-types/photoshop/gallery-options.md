# GalleryOptions

Community declaration reference: Photoshop/2015.5.

Deprecated; Bridge now owns the make photo gallery method.

```typescript
declare class GalleryOptions {
    /**
    - Adds width and height attributes to images.
      */
      static addSizeAttributes: boolean
    /**

    - Banner-related settings.
      */
      static bannerOptions: GalleryBannerOptions
    /**

    - Custom-color related settings.
      */
      static customColorOptions: GalleryCustomColorOptions
    /**

    - Email address displayed on the web page.
      */
      static emailAddress: string
    /**

    - Image-related settings.
      */
      static imagesOptions: GalleryImagesOptions
    /**

    - Includes every file found inside subfolders of the input folder.
      */
      static includeSubFolders: boolean
    /**

    - Layout style for arranging the web page.
      */
      static layoutStyle: string
    /**

    - Preserves all metadata in the JPEG files.
      */
      static preserveAllMetadata: boolean
    /**

    - Security-related settings.
      */
      static securityOptions: GallerySecurityOptions
    /**

    - Thumbnail-related settings.
      */
      static thumbnailOptions: GalleryThumbnailOptions
    /**

    - Chooses short .htm or long .html web page extension.
      */
      static useShortExtension: boolean
    /**

    - Enables UTF-8 encoding for the web page.
      */
      static useUTF8Encoding: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
