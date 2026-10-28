# BitmapItem

Community declaration reference: Animate/22.0.

BitmapItem identifies a bitmap stored in a document library. BitmapItem subclasses Item (see Item object).

```typescript
declare class BitmapItem extends Item {
    /**
    - true allows bitmap smoothing; false does not.
      */
      allowSmoothing: boolean
    /**
    - Image compression type applied to the bitmap. Valid values are "photo" and "lossless". When bitmapItem.useImportedJPEGQuality is false, "photo" means JPEG with quality from 0 to 100; when bitmapItem.useImportedJPEGQuality is true, "photo" means JPEG using the document default quality value. "lossless" maps to GIF or PNG format (see bitmapItem.useImportedJPEGQuality).
      */
      compressionType: string
    /**
    - Hexadecimal-number string representing the seconds elapsed between January 1, 1970 and the original file modification date at import time. When the file is gone, the value becomes "00000000".
      */
      readonly fileLastModifiedDate: string
    /**
    - Boolean indicating whether a library bitmap has a valid and useful alpha channel. Use this flag to decide whether bitmapItem.exportToFile() should export the bitmap item as a PNG rather than a JPEG.
      */
      readonly hasValidAlphaLayer: boolean
    /**
    - Bitmap width in pixels, stored as an int.
      */
      readonly hPixels: number
    /**
    - Hexadecimal value representing the bitmap item's modification date and time. Each import of the bitmap item increments this value. For example, selecting the Update button in the Bitmap Properties dialog triggers an import.
      */
      readonly lastModifiedDate: string
    /**
    - String indicating whether the item was originally imported as a jpeg file. Possible values: "photo" means jpeg files; "lossless" means uncompressed file types such as GIF and PNG.
      */
      readonly originalCompressionType: string
    /**
    - Bitmap quality as an integer. Specify -1 for the default document quality; otherwise choose a value in the 0 to 100 range. Available only for JPEG compression.
      */
      quality: number
    /**
    - true means the imported file still exists at its original Library import location; false means it does not.
      */
      readonly sourceFileExists: boolean
    /**
    - true means the Library item's file modification date matches the on-disk modification date of the imported file; false means it does not.
      */
      readonly sourceFileIsCurrent: boolean
    /**
    - file:/// URI string representing the path and name of the file imported into the Library.
      */
      readonly sourceFilePath: string
    /**
    - true enables deblocking; false leaves it disabled.
      */
      useDeblocking: boolean
    /**
    - true uses the default imported JPEG quality; false does not. Available only for JPEG compression.
      */
      useImportedJPEGQuality: boolean
    /**
    - Bitmap height in pixels, stored as an int.
      */
      readonly vPixels: number
    /**
    - Writes the specified item as a PNG or JPG file.
    - @returns Boolean value true when the file exports successfully; false otherwise.
    - @param fileURI String expressed as a file:/// URI giving the path and name for the exported file.
    - @param quality Number from 1-100 controlling exported image quality. Larger numbers produce better quality. Default: 80. New in Flash CS6 Professional.
      */
      exportToFile(fileURI: string, quality: number): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
