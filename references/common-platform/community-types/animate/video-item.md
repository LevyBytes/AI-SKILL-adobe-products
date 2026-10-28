# VideoItem

Community declaration reference: Animate/22.0.

VideoItem extends Item.

```typescript
declare class VideoItem extends Item {
    /**
    - Contains a hexadecimal number string for the elapsed seconds between January 1, 1970, and the original disk file's modification date when it was imported into the library. If that file is no longer present, the value is "00000000".
      */
      readonly fileLastModifiedDate: string
    /**
    - Stores a hexadecimal value for the video item's modification date and time. Each import of the video item increments this value.
      */
      readonly lastModifiedDate: string
    /**
    - Returns true when the imported file still exists in the location from which it entered the Library; otherwise returns false.
      */
      readonly sourceFileExists: boolean
    /**
    - Returns true when the Library item's file modification date matches the imported file's disk modification date; otherwise returns false.
      */
      readonly sourceFileIsCurrent: boolean
    /**
    - Gives the video item path as a file:/// URI string.
      */
      readonly sourceFilePath: string
    /**
    - Identifies the represented video kind. Possible values are "embedded video" and "video".
      */
      readonly videoType: string
    /**
    - Exports the item to an FLV file.
    - @returns true when file export succeeds; false when it does not.
    - @param fileURI A file:/// URI string giving the exported file path and name.
      */
      exportToFLV(fileURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
