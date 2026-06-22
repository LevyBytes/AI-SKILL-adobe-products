# Printer Presets, Printer, Profile, Proofing Type ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PrinterPresets; Printer — Class; Profile; ProofingType; PublishCoverEnum; PublishExportPreference; PublishFormatEnum.

## PrinterPresets

Collection of printer presets.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> PrinterPreset **add**( Object **withProperties** )
>
> Adds a PrinterPreset instance.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the added PrinterPreset. (Optional) |

> Number **count**()
>
> Reports how many elements the PrinterPreset collection contains.
> PrinterPreset **item**( Mixed **index** )
>
> Gets the PrinterPreset identified by index or by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Accepts Long Integer or String. |

> PrinterPreset **itemByName**( String **name** )
>
> Gets the PrinterPreset that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> PrinterPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PrinterPresets contained inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as a PrinterPreset, index, or name. Accepts PrinterPreset, Long Integer or String. |
| Mixed | to | Range end, given as a PrinterPreset, index, or name. Accepts PrinterPreset, Long Integer or String. |

> PrinterPreset **firstItem**()
>
> Gets the first PrinterPreset from the collection.
> PrinterPreset **lastItem**()
>
> Gets the final PrinterPreset from the collection.
> PrinterPreset **middleItem**()
>
> Gets the middle PrinterPreset from the collection.
> PrinterPreset **previousItem**( PrinterPreset **obj** )
>
> Gets the PrinterPreset immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PrinterPreset | obj | PrinterPreset index that comes after the target PrinterPreset. |

> PrinterPreset **nextItem**( PrinterPreset **obj** )
>
> Gets the PrinterPreset immediately after the supplied collection member.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PrinterPreset | obj | PrinterPreset whose position comes before the target PrinterPreset. |

> PrinterPreset **anyItem**()
>
> Gets any PrinterPreset from the collection.
> PrinterPreset **everyItem**()
>
> Gets every PrinterPreset in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the PrinterPreset.
> PrinterPreset **[]**( Number **index** )
>
> Gets the PrinterPreset at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Printer — Class

> _Read Only_
>
> Number `POSTSCRIPT_FILE` = 1886611052
>
> Sends output to a PostScript file.

## Profile

Options that control color profiles.

### Class

> _Read Only_
>
> Number `POSTSCRIPT_CMS` = 1970303843
>
> Selects the PostScript CMS profile.
> _Read Only_
>
> Number `USE_DOCUMENT` = 1967419235
>
> Selects the document profile.
> _Read Only_
>
> Number **WORKING** = 1466921579
>
> Selects the working profile.
> _Read Only_
>
> Number `NO_CMS` = 1970499183
>
> Applies no CMS profile.

## ProofingType

Options used for color proofing.

### Class

> _Read Only_
>
> Number `PROOF_OFF` = 1347710822
>
> Disables the soft proof display.
> _Read Only_
>
> Number `DOCUMENT_CMYK` = 1347708003
>
> Builds a soft proof with the document's CMYK profile.
> _Read Only_
>
> Number `WORKING_CMYK` = 1347712867
>
> Builds a soft proof with the active CMYK working space.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Enables a custom proofing setup for a specific output condition.

## PublishCoverEnum

Cover-image options for publish export.

### Class

> _Read Only_
>
> Number `FIRST_PAGE` = 1700947536
>
> Uses a rasterized first page as the cover image.
> _Read Only_
>
> Number `EXTERNAL_IMAGE` = 1700952169
>
> Uses an external image for the cover image.
> _Read Only_
>
> Number `CHOSEN_PAGE` = 1701013072
>
> Uses a rasterized chosen page as the cover image.

## PublishExportPreference

Preferences for publish export.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent Document for the PublishExportPreference.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> PublishCoverEnum **publishCover**
>
> Publish cover selection.
> String **coverImageFile**
>
> File path for the epub cover image.
> String **publishPageRange**
>
> Page range used for publishing.
> PageRangeFormat **publishPageRangeFormat**
>
> Page range format used for publishing.
> ImageConversion **imageConversion**
>
> Converted-image file format. Note: Requires copy optimized images or copy formatted images to be true.
> ImageResolution **imageExportResolution**
>
> Export resolution value.
> String **publishDescription**
>
> Description used for publishing.
> String **publishFileName**
>
> Output file name.
> PublishFormatEnum **publishFormat**
>
> Publish format value.
> String **coverPage**
>
> Cover page value.
> GIFOptionsPalette **gifOptionsPalette**
>
> Palette used for GIF output. Note: Invalid when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> JPEG conversion quality setting. Note: Invalid when image conversion is GIF.
> Boolean **publishPdf**
>
> Controls whether PDF content is uploaded during publishing.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the PublishExportPreference.
> PublishExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the specifier string for this object.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Legacy captures flag. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Legacy captures flag. (Optional) |

## PublishFormatEnum

Publish format choices.

### Class

> _Read Only_
>
> Number `PUBLISH_BY_PAGES` = 1700950134
>
> Publishes by pages.
> _Read Only_
>
> Number `PUBLISH_BY_SPREAD` = 1700950902
>
> Publishes by spread.
