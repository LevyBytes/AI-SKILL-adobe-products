# Sound

Community declaration reference: InDesign/2023.

Sound clip.

```typescript
declare class Sound extends MediaItem {
    /**
    - Description text for the Sound.
      */
      description: string
    /**

    - When true, the sound poster is excluded from document printing.
      */
      doNotPrintPoster: boolean
    /**

    - When true, the file is embedded in the PDF; when false, it remains linked to the PDF. Embedding movie files requires acrobat compatibility of acrobat 6 or higher.
      */
      embedInPDF: boolean
    /**

    - File path, using colon delimiters on the Mac OS.
      */
      filePath: string | File
    /**

    - Bitmap images are available here across formats such as TIFF, JPEG, or GIF.
      */
      readonly images: Images
    /**

    - Source file for the link.
      */
      readonly itemLink: Link
    /**

    - When true, the movie starts automatically when the user views the page containing its poster in the PDF document.
      */
      playOnPageTurn: boolean
    /**

    - Poster file reference.
      */
      posterFile: string
    /**

    - When true, the sound repeats indefinitely.
      */
      soundLoop: boolean
    /**

    - Poster type used for the sound.
      */
      soundPosterType: SoundPosterTypes
    /**

    - When true, sound stops playing as its page turns.
      */
      stopOnPageTurn: boolean
    /**

    - Moves the Sound one layer step forward.
      */
      bringForward(): void
    /**

    - Places the Sound at the layer front, optionally ahead of a supplied item.
    - @param reference Item to place this object in front of; it must share the same parent.
      */
      bringToFront(reference: PageItem): void
    /**

    - Moves the Sound one layer step backward.
      */
      sendBackward(): void
    /**

    - Places the Sound at the layer back, optionally behind a supplied item with the same parent.
    - @param reference Item to place this object behind.
      */
      sendToBack(reference: PageItem): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
