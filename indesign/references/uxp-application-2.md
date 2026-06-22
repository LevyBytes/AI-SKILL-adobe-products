# Application (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Application — Instance

### Methods

> Mixed **performanceMetric**( Mixed **for** )
>
> Retrieves the current value for the specified performance metric.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | for | InDesign status value to query. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

> **dumpFromMemoryMark**( Number **from** )
>
> Outputs memory allocations beginning at the specified mark.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | from | Memory mark where the dump starts. |

> **dumpBetweenMemoryMarks**( Number **from**, Number **to** )
>
> Outputs memory allocations for every mark in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | from | First mark in the range. |
| Number | to | Last mark in the range. |

> Mixed **memoryStatistics**()
>
> Retrieves memory statistics from the server.
> String **performanceMetricShortName**( Mixed **for** )
>
> Retrieves the short name for the specified performance metric.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | for | InDesign status value to query. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

> String **performanceMetricLongName**( Mixed **for** )
>
> Retrieves the long name for the specified performance metric.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | for | InDesign status value to query. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

> String **invokeColorPicker**( ColorSpace **space**, Number **colorValue** )
>
> Opens the InDesign Color Picker.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ColorSpace | space | RGB, CMYK, or LAB color space. |
| Number | colorValue | Color values to use. |

> Boolean **openCloudAssetForEdit**( String **jsondata** )
>
> Opens the cloud library asset in edit mode.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | jsondata | JSON-encoded information for the asset to edit. |

> **setCloudLibraryOptions**( Number **maxwidth**, Number **maxheight** )
>
> Sets export options used when generating a cloud asset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | maxwidth | Maximum thumbnail width, in pixels. |
| Number | maxheight | Maximum thumbnail height, in pixels. |

> Boolean **exportSelectionForCloudLibrary**( File **to** )
>
> Exports the selection as assets needed by the cloud library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Path for the export file. |

> Boolean **isUserSharingAppUsageData**()
>
> Indicates whether the user has opted in to share usage data.
> **setCloudLibraryCollection**( String **librariesCollectionInfo** )
>
> Sets cloud libraries information.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | librariesCollectionInfo | JSON-encoded cloud libraries collection information. |

> String **createTemporaryCopy**( File **from** )
>
> Makes a temporary file copy.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File that will be copied. |

> Boolean **removeFileFromRecentFiles**( File **to** )
>
> Removes the file from the most recently used files list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File that will be removed. |

> Boolean **isAppInTouchMode**()
>
> Indicates whether the app is in touch mode.
> String **getCCXUserJSONData**( String **jsondata** )
>
> Produces CCX Welcome dialog data as a JSON string.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | jsondata | Mode setting. (Optional) |

> Mixed **getStyleConflictResolutionStrategy**( StyleType **charOrParaStyle** )
>
> Returns the style-conflict resolution strategy, or false when the user cancels.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleType | charOrParaStyle | Style type to inspect. (Optional) |

> **openPanel**( Number **id** )
>
> Opens the panel tied to the action.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Mixed **getUserChoiceForCloudTextAddition**()
>
> Prompts the user for whether a threaded text frame contributes only that frame's contents or the full story.
> **unpackageUCF**( File **ucfFile**, File **destinationFolder** )
>
> Expands a UCF file into a folder hierarchy.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | ucfFile | UCF file to expand. |
| File | destinationFolder | Folder that receives the unpackaged UCF contents; it is created when absent. |

> **packageUCF**( File **sourceFolder**, File **ucfFile**, String **mimeMediaType** )
>
> Builds a UCF file from a folder.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | sourceFolder | Folder used as the package input for an IDML file. The method does not validate the folder against the IDML spec; the caller must ensure the files are organized correctly. |
| File | ucfFile | Destination UCF file; an existing file at that path is replaced. |
| String | mimeMediaType | MIME media type; the default identifies the package as IDML. (Optional) |

> PreflightProfile **loadPreflightProfile**( File **from** )
>
> Loads a preflight profile from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | InDesign document or InDesign preflight profile file. |

> String **exportArticleFolio**( File **destination**, Document **portraitDocument**, Document **landscapeDocument**, Mixed **folioMetadata**, Mixed **miniFolioParams** )
>
> Writes the supplied documents as an article folio.

Note: The behavior matches @method(exportMiniFolio), while the returned data differs: @method(exportMiniFolio) yields an array of warning strings, and this method yields an XML structure.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | File path for the output. |
| Document | portraitDocument | InDesign document used for the stack's portrait orientation. |
| Document | landscapeDocument | InDesign document used for the stack's landscape orientation. |
| Mixed | folioMetadata | Optional mini folio meta data; accepts Ordered array containing key:String, value:String. (Optional) |
| Mixed | miniFolioParams | Mini folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> String **exportDpsArticle**( File **destination**, Document **document**, Mixed **dpsArticleParams** )
>
> Exports the supplied document as a DPS article.
> Note: Its behavior is similar to @method(exportMiniFolio), but the parameter list is different.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | File path for the output. |
| Document | document | Source InDesign document. |
| Mixed | dpsArticleParams | DPS article export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. |

> String **getDigpubArticleVersion**( DigpubArticleVersion **digpubArticleVersion** )
>
> Returns the current digital publishing article version number requested by the parameter.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DigpubArticleVersion | digpubArticleVersion | Version string(s) to return. |

> String **getSupportedArticleViewerVersions**()
>
> Returns the article viewer versions supported by the digital publishing plugin.
> String **getDigpubVersion**( DigpubVersion **digpubVersion** )
>
> Returns the current digital publishing version number requested by the parameter.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DigpubVersion | digpubVersion | Version string(s) to return. |

> String **getSupportedViewerVersions**()
>
> Returns the viewer versions supported by the digital publishing plugin.
> String **exportMiniFolio**( File **destination**, Document **portraitDocument**, Document **landscapeDocument**, Mixed **folioMetadata**, Mixed **miniFolioParams** )
>
> Exports the supplied documents as a mini-folio.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | File path for the output. |
| Document | portraitDocument | InDesign document used for the stack's portrait orientation. |
| Document | landscapeDocument | InDesign document used for the stack's landscape orientation. |
| Mixed | folioMetadata | Optional mini folio meta data; accepts Ordered array containing key:String, value:String. (Optional) |
| Mixed | miniFolioParams | Mini folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> **exportFolioToPackage**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
>
> Writes the selected documents to a compressed folio package containing compressed mini folios.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | Package output location. |
| Mixed | miniFolioList | Mini folio entry or entries to include in the folio; accepts File or Array of Files. |
| Mixed | folioMetadata | Folio meta data; accepts Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Extra folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> **exportFolioToDirectory**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
>
> Writes the selected documents into a directory.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | Directory where the folio is written. |
| Mixed | miniFolioList | Mini folio entry or entries to include in the folio; accepts File or Array of Files. |
| Mixed | folioMetadata | Folio meta data; accepts Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Extra folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> **exportFolioToDirectoryPackage**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
>
> Writes the selected documents to a compressed folio package containing non-compressed mini folios.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | destination | Package output location. |
| Mixed | miniFolioList | Mini folio entry or entries to include in the folio; accepts File or Array of Files. |
| Mixed | folioMetadata | Folio meta data; accepts Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Extra folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> Mixed **getAllOverlays**( Document **portraitDocumentForCheckingOverlays**, Document **landscapeDocumentForCheckingOverlays**, Mixed **miniFolioParams** )
>
> Retrieves every overlay.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Document | portraitDocumentForCheckingOverlays | Portrait document used while checking overlays. |
| Document | landscapeDocumentForCheckingOverlays | Landscape document used while checking overlays. |
| Mixed | miniFolioParams | Mini folio export settings; accepts Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

> **createCustomMiniFolio**( Mixed **miniFolioDescription**, File **destination** )
>
> Builds a mini-folio using the supplied asset and overlay descriptions.

Mini folio description schema:
|| Key || Type || Required? || Description ||
| contentstackid | string | yes | Explicit ID assigned to this stack |
| tocImage | file | no | TOC image for the mini-folio |
| narrowdimension | int | no | Target export size measured along the narrow dimension |
| widedimension | int | no | Target export size measured along the wide dimension |
| smoothscrolling | @enum(SmoothScrollingOptions) | no | Smooth scrolling behavior for this stack; default is noSmoothScroll |
| locationforgeneratedassets | file | no | Existing directory where generated assets are created, when supplied. |
| overlays | array | no | see the SDK Overlay Builder APIs |
| assets | array | yes | Asset entries for the mini - folio, described below. |
| assetDependencies | array | no | Files required by the asset; included in the package but omitted from the manifest. |
| metadata | array | no | Metadata entries; details follow below. |
| showprogressbar | boolean | no | Either true or false, controlling whether a progress bar appears; default is false |
| targetviewerversion | string | no | If supplied in the form "major.minor.revision", produces a folio compatible with that viewer version. If omitted, produces the latest folio format. | CS5 |

For the "assets" array, these fields are available:
|| Key || Type || Required? || Description ||
| file | file | yes | Asset file |
| type | string | yes | Kind of asset file: either "web" for HTML or "image" for a raster |
| width | int | yes | Asset width |
| height | int | yes | Asset height |
| orientation | string | yes | Asset orientation: either "portrait" or "landscape" |
| thumbnail | file | no | Thumbnail used for the asset in browse mode |
| scrubber | file | no | Thumbnail used for the asset in scrubber mode |

For the "assetDependencies" array, these fields are available:
|| Key || Type || Required? || Description ||
| file | file | no | Dependent file |
| relativePath | string | no | Relative path to the file for package use |

For the "metadata" array, these fields are available:
|| Key || Type || Required? || Description ||
| any string | string or boolean | no | Freeform metadata entry, including examples from "export folio meta data" |

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | miniFolioDescription | Dictionary for the custom mini folio to create; accepts Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types. |
| File | destination | File path for the output. |

> **deleteUnusedTags**()
>
> Removes unused XML markup tags.
> **loadXMLTags**( File **from** )
>
> Loads XML markup tags from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File path containing the tags. |

> **saveXMLTags**( File **to**, String **versionComments**, Boolean **forceSave** )
>
> Writes a tag set to an external file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full path of the file where the tags are saved. |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> **mountProject**( String **serverURL**, String **projectName** )
>
> Mounts a Version Cue project.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | serverURL | URL of the Version Cue server that contains the project |
| String | projectName | Version Cue project name to mount |

> **importStyles**( ImportFormat **format**, File **from**, GlobalClashResolutionStrategy **globalStrategy** )
>
> Imports the requested styles.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ImportFormat | format | Style types to import. |
| File | from | File containing the styles to import. |
| GlobalClashResolutionStrategy | globalStrategy | Clash handling for imported styles with names already in use. (Optional) |

> **exportStrokeStyles**( File **to**, StrokeStyle **strokeStyleList**, String **versionComments**, Boolean **forceSave** )
>
> Exports stroke styles or presets.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File path to save to |
| StrokeStyle | strokeStyleList | Stroke style list to save |
| String | versionComments | Comment stored for this version (Optional) |
| Boolean | forceSave | Force a version save (Optional) |

> Number **findColor**()
>
> Finds color matching the find what value.
> Number **changeColor**()
>
> Finds color matching the find what value, then substitutes the change to value.
> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> **saveFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
>
> Saves the named find/change query.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | queryName | Query name to save. |
| SearchModes | searchMode | Search mode. |

> **loadFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
>
> Loads the named find/change query.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | queryName | Query name to load. |
| SearchModes | searchMode | Search mode. |

> **deleteFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
>
> Deletes the named find/change query.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | queryName | Query name to delete. |
| SearchModes | searchMode | Search mode. |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value, then substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses result order. (Optional) |

> **print**( Mixed **from**, Boolean **printDialog**, Mixed **using** )
>
> Sends the selected file or files to print.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | One or more file paths; accepts File or Array of Files. |
| Boolean | printDialog | Whether to show the print dialog (Optional) |
| Mixed | using | Preset used for printing; accepts PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

> **exportPresets**( ExportPresetFormat **format**, File **to**, String **versionComments**, Boolean **forceSave** )
>
> Exports presets to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ExportPresetFormat | format | Preset format. |
| File | to | Export destination file. |
| String | versionComments | Comments stored for this version. (Optional) |
| Boolean | forceSave | Force a version save. (Optional) |

> **importFile**( ExportPresetFormat **format**, File **from** )
>
> Imports presets from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ExportPresetFormat | format | Preset type to import. |
| File | from | File from which presets are imported. |

> **place**( Mixed **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places one or more files using the place menu item's behavior. Depending on current preferences, this can load the place gun or replace the selected object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | fileName | One or more files to place; accepts File or Array of Files. |
| Boolean | showingOptions | Whether to show the import options dialog (Optional) |
| Object | withProperties | Initial property values for the placed object(s) (Optional) |

> **clearFrameFittingOptions**()
>
> Clears frame fitting options and returns them to the initial state.
> **updateFonts**()
>
> Forces a scan for new fonts in the various Fonts folders.
> MotionPreset **loadMotionPreset**( File **from** )
>
> Loads a motion preset from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | Flash motion preset file. |

> **cut**()
>
> Cuts the active document window's selection and stores it on the clipboard.
> **copy**()
>
> Copies the active document window's selection to the clipboard.
> **paste**()
>
> Inserts clipboard data into the active document window.
> **pasteInto**()
>
> Inserts clipboard data into the selected object in the active document window.
> **pasteInPlace**()
>
> Inserts clipboard data into the active document window at the same position it used in the original document.
> Number **getUntitledCount**()
>
> Gets the count used when naming the next untitled document.
> **setUntitledCount**( Number **untitledCount** )
>
> Sets the count used when naming the next untitled document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | untitledCount | Count used in the next untitled document name. Expected values are positive only |

> Number **colorTransform**( Number **colorValue**, ColorSpace **sourceColorSpace**, ColorSpace **destinationColorSpace** )
>
> Converts color values between color spaces.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | colorValue | Input color value |
| ColorSpace | sourceColorSpace | Input color space |
| ColorSpace | destinationColorSpace | Output color space |

> **pasteWithoutFormatting**()
>
> Inserts clipboard data into the active document window without formatting.
> **loadSwatches**( File **from** )
>
> Loads swatches from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | Source InDesign document or swatch file. |

> **saveSwatches**( File **to**, Swatch **swatchList**, String **versionComments**, Boolean **forceSave** )
>
> Writes selected swatches into a swatchbook file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Swatchbook file destination. |
| Swatch | swatchList | Swatch or swatches to save. |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> Color **importAdobeSwatchbookSpotColor**( String **name** )
>
> Loads the named Adobe color book spot swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Spot color name to load. |

> Color **importAdobeSwatchbookProcessColor**( String **name** )
>
> Loads the named process swatch from an Adobe color book already preloaded.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Process color name to load. |

> **loadConditions**( File **from**, Boolean **loadConditionSets** )
>
> Loads conditions from the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File path containing the conditions. |
| Boolean | loadConditionSets | When true, also loads the condition sets. (Optional) |
