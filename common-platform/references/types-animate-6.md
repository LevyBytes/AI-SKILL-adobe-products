# Animate (part 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Item is an abstract base class. Every library entry derives from Item. See also library object.
  \*/
  declare class Item {
  /\*\*
  - Element type string. Supported strings include "undefined" and "component"; symbol types "movie clip", "graphic", and "button"; and item kinds "folder", "font", "sound", "bitmap", "compiled clip", "screen", and "video". When this property is "video", videoItem.videoType identifies the video type.
    \*/
    readonly itemType: string
    /\*\*
  - ActionScript 3.0 class name associated with the symbol. The specified value is shown in the authoring environment's Linkage dialog box and in other dialog boxes that include those Linkage controls, including the Symbol Properties dialog box. For an ActionScript 2.0 class value, use item.linkageClassName.
  - When the base class is the default for the symbol type, such as "flash.display.MovieClip" for movie clips or "flash.display.SimpleButton" for buttons, this property is an empty string (""). To restore an item to the default base class, set this value to an empty string as well.
  - Setting this property by script does not run the validation performed by the Linkage dialog box, and Flash does not throw errors if it cannot set the base class to the provided value. For example, the Linkage dialog box checks that the base class exists in the FLA file's classpath, that ActionScript 3.0 is selected in the Flash tab of the Publish Settings dialog box, and similar conditions. Script assignment skips those checks.
    \*/
    linkageBaseClass: string
    /\*\*
  - ActionScript 2.0 class name for the symbol. For the ActionScript 3.0 version of this setting, use item.linkageBaseClass.
  - This property is defined only when item.linkageExportForAS and/or item.linkageExportForRS are true and item.linkageImportForRS is false.
    \*/
    linkageClassName: string
    /\*\*
  - Boolean flag; true exports the item for ActionScript. item.linkageExportForRS and item.linkageExportInFirstFrame can also be set to true. When this property is true, item.linkageImportForRS must be false, and both item.linkageIdentifier and item.linkageURL must be specified.
    \*/
    linkageExportForAS: boolean
    /\*\*
  - Boolean flag; true exports the item for run-time sharing. item.linkageExportForAS and item.linkageExportInFirstFrame can also be set to true.
  - When this property is true, item.linkageImportForRS must be false, and both item.linkageIdentifier and item.linkageURL must be specified.
    \*/
    linkageExportForRS: boolean
    /\*\*
  - Boolean flag; true exports the item in the first frame, while false exports it in the frame containing the first instance. Items absent from the Stage are not exported.
  - This property can be true only when item.linkageExportForAS and/or item.linkageExportForRS are true.
    \*/
    linkageExportInFirstFrame: boolean
    /\*\*
  - Asset identifier used by Flash when linking to the destination SWF file. Flash ignores this property when item.linkageImportForRS, item.linkageExportForAS, and item.linkageExportForRS are all false. Conversely, it is required when any one of those properties is true.
    \*/
    linkageIdentifier: string
    /\*\*
  - Boolean flag; true imports the item for run-time sharing. When this property is true, item.linkageExportForAS and item.linkageExportForRS must both be false. item.linkageIdentifier and item.linkageURL must also be specified.
    \*/
    linkageImportForRS: boolean
    /\*\*
  - URL of the SWF file containing the shared asset. Flash ignores this property when item.linkageImportForRS, item.linkageExportForAS, and item.linkageExportForRS are all false. Conversely, it is required when any one of those properties is true. A web URL or platform-dependent filename can be supplied, using forward slashes [/] or backward slashes [\] according to the platform.
    \*/
    linkageURL: string
    /\*\*
  - Library item name, including its folder structure. For example, when Symbol_1 is inside a folder named Folder_1, the name property of Symbol_1 is "Folder_1/Symbol_1".
    \*/
    name: string
    /\*\*
  - Adds data to a library item.
  - @param name String naming the data.
  - @param type String identifying the data type. Valid types are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
  - @param data Data to attach to the specified library item. The data type follows the type parameter value; for example, type "integer" requires data to contain an integer.
    \*/
    addData(name: string, type: string, data: any): void
    /\*\*
  - Retrieves the named stored data value.
  - @returns Data identified by the name parameter. The returned data type depends on the stored data type.
  - @param name String naming the data to retrieve.
    \*/
    getData(name: string): any
    /\*\*
  - Reports whether publishing is enabled for the named persistent data, for the requested format, on the library item.
  - @returns Boolean value indicating whether publishing of the named persistent data is enabled for that format on this library item.
  - @param name String containing the persistent data item name, as specified in "item.addData()".
  - @param format String naming the publishing format. Note: _`EMBED_SWF`_ is the built-in special format for persistent data publishing. When selected, each publish embeds the persistent data into the SWF file. ActionScript can read it through the .metaData property. The feature is available for SWF version 19 (Flash Player 11.6) and above, only on symbol instances that are onstage. Custom JSFL scripts can use additional custom publishing formats when getPublishPersistentData() is invoked using that format value.
    \*/
    getPublishData(name: string, format: string): boolean
    /\*\*
  - Determines whether the library item contains data under the given name.
  - @returns Boolean result: true means the specified data exists; false means it does not.
  - @param name String naming the data to look for in the library item.
    \*/
    hasData(name: string): boolean
    /\*\*
  - Deletes persistent data from the library item.
  - @param name Name identifying the library item data to remove.
    \*/
    removeData(name: string): void
    /\*\*
  - Turns publishing for a library item's persistent data on or off.
  - @param name String containing the persistent data item name, as specified in "item.addData()".
  - @param format String naming the publishing format. Note: _`EMBED_SWF`_ is the built-in special format for persistent data publishing. When selected, each publish embeds the persistent data into the SWF file. ActionScript can read it through the .metaData property. The feature is available for SWF version 19 (Flash Player 11.6) and above, only on symbol instances that are onstage. Custom JSFL scripts can use additional custom publishing formats when getPublishPersistentData() is invoked using that format value.
  - @param publish Boolean indicating whether publishing of persistent data is enabled or disabled for the specified format.
    \*/
    setPublishData(name: string, format: string, publish: boolean): void
    }

/\*\*

- BitmapItem identifies a bitmap stored in a document library. BitmapItem subclasses Item (see Item object).
  \*/
  declare class BitmapItem extends Item {
  /\*\*
  - true allows bitmap smoothing; false does not.
    \*/
    allowSmoothing: boolean
    /\*\*
  - Image compression type applied to the bitmap. Valid values are "photo" and "lossless". When bitmapItem.useImportedJPEGQuality is false, "photo" means JPEG with quality from 0 to 100; when bitmapItem.useImportedJPEGQuality is true, "photo" means JPEG using the document default quality value. "lossless" maps to GIF or PNG format (see bitmapItem.useImportedJPEGQuality).
    \*/
    compressionType: string
    /\*\*
  - Hexadecimal-number string representing the seconds elapsed between January 1, 1970 and the original file modification date at import time. When the file is gone, the value becomes "00000000".
    \*/
    readonly fileLastModifiedDate: string
    /\*\*
  - Boolean indicating whether a library bitmap has a valid and useful alpha channel. Use this flag to decide whether bitmapItem.exportToFile() should export the bitmap item as a PNG rather than a JPEG.
    \*/
    readonly hasValidAlphaLayer: boolean
    /\*\*
  - Bitmap width in pixels, stored as an int.
    \*/
    readonly hPixels: number
    /\*\*
  - Hexadecimal value representing the bitmap item's modification date and time. Each import of the bitmap item increments this value. For example, selecting the Update button in the Bitmap Properties dialog triggers an import.
    \*/
    readonly lastModifiedDate: string
    /\*\*
  - String indicating whether the item was originally imported as a jpeg file. Possible values: "photo" means jpeg files; "lossless" means uncompressed file types such as GIF and PNG.
    \*/
    readonly originalCompressionType: string
    /\*\*
  - Bitmap quality as an integer. Specify -1 for the default document quality; otherwise choose a value in the 0 to 100 range. Available only for JPEG compression.
    \*/
    quality: number
    /\*\*
  - true means the imported file still exists at its original Library import location; false means it does not.
    \*/
    readonly sourceFileExists: boolean
    /\*\*
  - true means the Library item's file modification date matches the on-disk modification date of the imported file; false means it does not.
    \*/
    readonly sourceFileIsCurrent: boolean
    /\*\*
  - file:/// URI string representing the path and name of the file imported into the Library.
    \*/
    readonly sourceFilePath: string
    /\*\*
  - true enables deblocking; false leaves it disabled.
    \*/
    useDeblocking: boolean
    /\*\*
  - true uses the default imported JPEG quality; false does not. Available only for JPEG compression.
    \*/
    useImportedJPEGQuality: boolean
    /\*\*
  - Bitmap height in pixels, stored as an int.
    \*/
    readonly vPixels: number
    /\*\*
  - Writes the specified item as a PNG or JPG file.
  - @returns Boolean value true when the file exports successfully; false otherwise.
  - @param fileURI String expressed as a file:/// URI giving the path and name for the exported file.
  - @param quality Number from 1-100 controlling exported image quality. Larger numbers produce better quality. Default: 80. New in Flash CS6 Professional.
    \*/
    exportToFile(fileURI: string, quality: number): boolean
    }

/\*\*

- folderItem subclasses Item. It adds no methods or properties of its own. See Item object.
  \*/
  declare class FolderItem extends Item {}

/\*\*

- FontItem extends Item; see Item object for the inherited base behavior.
  \*/
  declare class FontItem extends Item {
  /\*\*
  - Reports whether the Font item is bitmapped: true means bitmapped, and false means it is not.
    \*/
    bitmap: boolean
    /\*\*
  - Reports the bold styling state for the Font item: true for bold, false otherwise.
    \*/
    bold: boolean
    /\*\*
  - Sets the characters embedded in a SWF file so playback targets do not need those characters installed locally. This mirrors what the Font Embedding dialog box controls.
  - The value is readable as well, so scripts can inspect which characters the Font Embedding dialog box assigned to a particular Font item.
    \*/
    embeddedCharacters: string
    /\*\*
  - Stores delimited integer ranges for selections available in the Font Embedding dialog box.
  - The same field can be read to discover which characters the Font Embedding dialog box recorded for a Font item.
  - Note: These range numbers map to FontEmbedding/UnicodeTables.xml in the configuration folder.
    \*/
    embedRanges: string
    /\*\*
  - Note: Flash CS5 Professional exposes this property, but Text Layout Framework (TLF) text ignores it. Starting with Flash Professional CS5, fonts used with TLF text always include variant glyphs. The flash.text.engine (FTE) reference below applies only to Flash Professional CS4.
  - Property; controls variant-glyph output during SWF publishing. true includes those glyphs in the font, while false omits them. Enabling it increases SWF file size, and false is the default.
  - Some languages replace typed characters with context-specific glyphs, including Thai, Arabic, Hebrew, and Greek. For layout or input in those languages, set this property to
    true.
    \*/
    embedVariantGlyphs: boolean
    /\*\*
  - Names the device font associated with the Font item. Animate shows an error if the string does not match an installed device font. Use fl.isFontInstalled() to check whether a system font is present.
  - Note: After assignment, the stored property value can differ from the string supplied by the script. See the following example.
    \*/
    font: string
    /\*\*
  - Determines the font format produced during SWF publishing. true emits a font compatible with flash.text.engine (FTE) APIs; false targets flash.text APIs, including text fields. Default is false.
    \*/
    isDefineFont4Symbol: boolean
    /\*\*
  - Reports the italic styling state for the Font item: true for italic, false otherwise.
    \*/
    italic: boolean
    /\*\*
  - Gives the Font item size as an integer count of points.
    \*/
    size: number
    }

/\*\*

- SoundItem extends Item and represents a library entry used for sound creation. See also frame.soundLibraryItem and Item object.
  \*/
  declare class SoundItem extends Item {
  /\*\*
  - Provides the library sound bit rate string, but only when the sound uses MP3 compression. Allowed values: "8 kbps", "16 kbps", "20 kbps", "24 kbps", "32 kbps", "48 kbps", "56 kbps", "64 kbps", "80 kbps", "112 kbps", "128 kbps", and "160 kbps". Stereo exports at 8 Kbps or 16 Kbps become mono. For compression types other than MP3, this property is undefined.
  - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
    \*/
    bitRate: string | undefined
    /\*\*
  - Gives the ADPCM-compressed library sound bits setting. Allowed values: "2 bit", "3 bit", "4 bit", and "5 bit".
    \*/
    bits: string
    /\*\*
  - Selects the compression type for a library sound. Allowed values: "Default", "ADPCM", "MP3", "Raw", and "Speech".
  - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
    \*/
    compressionType: string
    /\*\*
  - Applies only to MP3 and Raw compression. true folds stereo audio down to mono; false leaves stereo unchanged. With MP3 compression, a soundItem.bitRate below 20 Kbps causes this setting to be ignored and forced to true (see soundItem.bitRate).
  - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
    \*/
    convertStereoToMono: boolean
    /\*\*
  - Contains a hexadecimal number string for the elapsed seconds between January 1, 1970, and the original disk file's modification date when it was imported into the library. If that file is no longer present, the value is "00000000".
    \*/
    readonly fileLastModifiedDate: string | number
    /\*\*
  - Holds a hexadecimal value for the sound item's modification date and time. Each import of the sound item increments this value. For example, choosing the Update button in the Sound Properties dialog triggers an import.
    \*/
    readonly lastModifiedDate: string | number
    /\*\*
  - Marks the imported sound's original compression kind. Values: "RAW" and "MP3".
    \*/
    readonly originalCompressionType: string
    /\*\*
  - Sets MP3 playback quality for the library sound. This property is available only for the MP3 compression type. Allowed values: "Fast", "Medium", and "Best".
  - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
    \*/
    quality: string
    /\*\*
  - Sets the audio clip sample rate for ADPCM, Raw, or Speech compression. Allowed values: "5 kHz", "11 kHz", "22 kHz", and "44 kHz".
  - To assign this property yourself, set soundItem.useImportedMP3Quality to false first.
    \*/
    sampleRate: string
    /\*\*
  - Returns true when the imported file still exists in the Library import location; otherwise returns false.
    \*/
    readonly sourceFileExists: boolean
    /\*\*
  - Returns true when the Library item's file modification date matches the imported file's disk modification date; otherwise returns false.
    \*/
    readonly sourceFileIsCurrent: boolean
    /\*\*
  - Stores the path and file name for the imported Library file as a file:/// URI string.
    \*/
    readonly sourceFilePath: string
    /\*\*
  - Boolean flag. When true, imported MP3 quality takes precedence and all other properties are ignored.
    \*/
    useImportedMP3Quality: boolean
    /\*\*
  - Writes the item to a WAV or MP3 file. The item being exported determines the export settings.
  - For sound item exports, compare soundItem.originalCompressionType with "RAW." If it does not match, MP3 is the only guaranteed export format. Optionally, try WAV export first and, if the function returns false, retry as MP3.
  - @returns true when export succeeds; false when it does not.
  - @param fileURI A file:/// URI string giving the exported file path and name.
    \*/
    exportToFile(fileURI: string): boolean
    }

/\*\*

- SymbolItem extends Item.
  \*/
  declare class SymbolItem extends Item {
  /\*\*
  - Provides the symbol modification date as a hexadecimal date-and-time string. Editing the symbol's timeline increments this value.
    \*/
    readonly lastModifiedDate: string
    /\*\*
  - Enables or disables 9-slice scaling for the item.
    \*/
    scalingGrid: boolean
    /\*\*
  - Supplies a Rectangle object with the positions of the four 9-slice guides. For the rectangle format, see document.addNewRectangle().
    \*/
    scalingGridRect: Rectangle
    /\*\*
  - Controls whether publishing the FLA file updates the item. The default value is false. Shared library symbols use this property.
    \*/
    sourceAutoUpdate: boolean
    /\*\*
  - Holds the source FLA file path as a file:/// URI. The path must be absolute rather than relative. Shared library symbols use this property.
    \*/
    sourceFilePath: string
    /\*\*
  - Names the item inside the source file library. Shared library symbols use this property.
    \*/
    sourceLibraryName: string
    /\*\*
  - Defines the symbol type. Allowed values: "movie clip", "button", and "graphic".
    \*/
    symbolType: string
    /\*\*
  - Timeline Object reference.
    \*/
    readonly timeline: Timeline
    /\*\*
  - Changes a library symbol item into a compiled movie clip.
    \*/
    convertToCompiledClip(): void
    /\*\*
  - Writes the symbol item to a SWC file.
  - @param outputURI A file:/// URI string for the SWC file that receives the exported symbol. The outputURI must point to a local file; Flash will not create a missing folder for it.
    \*/
    exportSWC(outputURI: string): void
    /\*\*
  - Writes the symbol item to a SWF file.
  - @param outputURI A file:/// URI string for the SWF file that receives the exported symbol. The outputURI must point to a local file; Flash will not create a missing folder for it.
    \*/
    exportSWF(outputURI: string): void
    /\*\*
  - Sends one frame from the selected movie clip, graphic, or button symbol instance on the Stage into the Library as a bitmap.
  - @param frameNumber Integer for the frame inside the symbol to export.
  - @param bitmapName String naming the new bitmap added to the Library.
    \*/
    exportToLibrary(frameNumber: number, bitmapName: string): void
    /\*\*
  - Writes a movie clip, graphic, or button symbol to disk as a PNG sequence.
  - @param outputURI URI for the PNG sequence export destination. This URI must point to a local file. For example: file:///c|/tests/mytest.png.
  - @param startFrameNum Integer for the first frame inside the symbol to export. If this parameter is omitted, all frames are exported.
  - @param endFrameNum Integer for the final frame inside the symbol to export. If this parameter is omitted, all frames are exported.
  - @param matrix Optional. Matrix to append to the PNG sequence being exported.
    \*/
    exportToPNGSequence(
    outputURI: string,
    startFrameNum?: number,
    endFrameNum?: number,
    matrix?: Matrix,
    ): void
    }

/\*\*

- VideoItem extends Item.
  \*/
  declare class VideoItem extends Item {
  /\*\*
  - Contains a hexadecimal number string for the elapsed seconds between January 1, 1970, and the original disk file's modification date when it was imported into the library. If that file is no longer present, the value is "00000000".
    \*/
    readonly fileLastModifiedDate: string
    /\*\*
  - Stores a hexadecimal value for the video item's modification date and time. Each import of the video item increments this value.
    \*/
    readonly lastModifiedDate: string
    /\*\*
  - Returns true when the imported file still exists in the location from which it entered the Library; otherwise returns false.
    \*/
    readonly sourceFileExists: boolean
    /\*\*
  - Returns true when the Library item's file modification date matches the imported file's disk modification date; otherwise returns false.
    \*/
    readonly sourceFileIsCurrent: boolean
    /\*\*
  - Gives the video item path as a file:/// URI string.
    \*/
    readonly sourceFilePath: string
    /\*\*
  - Identifies the represented video kind. Possible values are "embedded video" and "video".
    \*/
    readonly videoType: string
    /\*\*
  - Exports the item to an FLV file.
  - @returns true when file export succeeds; false when it does not.
  - @param fileURI A file:/// URI string giving the exported file path and name.
    \*/
    exportToFLV(fileURI: string): boolean
    }
