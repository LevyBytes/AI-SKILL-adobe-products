# SoundItem

Community declaration reference: Animate/22.0.

SoundItem extends Item and represents a library entry used for sound creation. See also frame.soundLibraryItem and Item object.

```typescript
declare class SoundItem extends Item {
    /**
    - Provides the library sound bit rate string, but only when the sound uses MP3 compression. Allowed values: "8 kbps", "16 kbps", "20 kbps", "24 kbps", "32 kbps", "48 kbps", "56 kbps", "64 kbps", "80 kbps", "112 kbps", "128 kbps", and "160 kbps". Stereo exports at 8 Kbps or 16 Kbps become mono. For compression types other than MP3, this property is undefined.
    - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
      */
      bitRate: string | undefined
    /**
    - Gives the ADPCM-compressed library sound bits setting. Allowed values: "2 bit", "3 bit", "4 bit", and "5 bit".
      */
      bits: string
    /**
    - Selects the compression type for a library sound. Allowed values: "Default", "ADPCM", "MP3", "Raw", and "Speech".
    - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
      */
      compressionType: string
    /**
    - Applies only to MP3 and Raw compression. true folds stereo audio down to mono; false leaves stereo unchanged. With MP3 compression, a soundItem.bitRate below 20 Kbps causes this setting to be ignored and forced to true (see soundItem.bitRate).
    - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
      */
      convertStereoToMono: boolean
    /**
    - Contains a hexadecimal number string for the elapsed seconds between January 1, 1970, and the original disk file's modification date when it was imported into the library. If that file is no longer present, the value is "00000000".
      */
      readonly fileLastModifiedDate: string | number
    /**
    - Holds a hexadecimal value for the sound item's modification date and time. Each import of the sound item increments this value. For example, choosing the Update button in the Sound Properties dialog triggers an import.
      */
      readonly lastModifiedDate: string | number
    /**
    - Marks the imported sound's original compression kind. Values: "RAW" and "MP3".
      */
      readonly originalCompressionType: string
    /**
    - Sets MP3 playback quality for the library sound. This property is available only for the MP3 compression type. Allowed values: "Fast", "Medium", and "Best".
    - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
      */
      quality: string
    /**
    - Sets the audio clip sample rate for ADPCM, Raw, or Speech compression. Allowed values: "5 kHz", "11 kHz", "22 kHz", and "44 kHz".
    - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
      */
      sampleRate: string
    /**
    - Returns true when the imported file still exists in the Library import location; otherwise returns false.
      */
      readonly sourceFileExists: boolean
    /**
    - Returns true when the Library item's file modification date matches the imported file's disk modification date; otherwise returns false.
      */
      readonly sourceFileIsCurrent: boolean
    /**
    - Stores the path and file name for the imported Library file as a file:/// URI string.
      */
      readonly sourceFilePath: string
    /**
    - Boolean flag. When true, imported MP3 quality takes precedence and all other properties are ignored.
      */
      useImportedMP3Quality: boolean
    /**
    - Writes the item to a WAV or MP3 file. The item being exported determines the export settings.
    - For sound item exports, compare soundItem.originalCompressionType with "RAW." If it does not match, MP3 is the only guaranteed export format. Optionally, try WAV export first and, if the function returns false, retry as MP3.
    - @returns true when export succeeds; false when it does not.
    - @param fileURI A file:/// URI string giving the exported file path and name.
      */
      exportToFile(fileURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
