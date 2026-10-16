# BatchOptions

Community declaration reference: Photoshop/2015.5.

Settings for running a Batch command.

```typescript
declare class BatchOptions {
    /**
    - Destination type for processed files.
      */
      static destination: BatchDestinationType
    /**

    - Folder location for processed files. Applies only when 'destination' = folder.
      */
      static destinationFolder: File
    /**

    - File used to log errors. Leave blank to display errors onscreen and stop batch processing when errors occur.
      */
      static errorFile: File
    /**

    - File naming option list. Maximum: 6.
      */
      static fileNaming: FileNamingType[]
    /**

    - When true, final file names are Macintosh compatible.
      */
      static macintoshCompatible: boolean
    /**

    - When true, action open commands are overridden.
      */
      static overrideOpen: boolean
    /**

    - When true, specified-destination save action steps are overridden.
      */
      static overrideSave: boolean
    /**

    - Initial serial number used when naming files.
      */
      static startingSerial: number
    /**

    - When true, file open options dialogs are suppressed.
      */
      static suppressOpen: boolean
    /**

    - When true, color profile warnings are suppressed.
      */
      static suppressProfile: boolean
    /**

    - When true, final file names are Unix compatible.
      */
      static unixCompatible: boolean
    /**

    - When true, final file names are Windows compatible.
      */
      static windowsCompatible: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
