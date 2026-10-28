# PresentationOptions

Community declaration reference: Photoshop/2015.5.

Settings for the PDF presentation command.

```typescript
declare class PresentationOptions {
    /**
    - Creation settings for the PDF file.
      */
      static PDFFileOptions: PDFSaveOptions
    /**

    - When true, the presentation advances automatically.
      */
      static autoAdvance: boolean
    /**

    - When true, writes the image file name into the presentation.
      */
      static includeFilename: boolean
    /**

    - Seconds to wait before advancing automatically. This setting matters when 'auto advance' is true. Range: 1 to 60.
      */
      static interval: number
    /**

    - When true, playback returns to the first page after the final page.
      */
      static loop: boolean
    /**

    - Magnification behavior for image viewing.
      */
      static magnification: MagnificationType
    /**

    - When true, saves as presentation; when false, saves as Multi-Page document.
      */
      static presentation: boolean
    /**

    - Transition used between images.
      */
      static transition: TransitionType
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
