# Endnote Text Frames, Endnote, Endnotes, Ep Ss ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EndnoteTextFrames; Endnote — Instance; Endnotes; EPSs; EPSColorSpace; EPSExportPreference; EPSImageData; EPSImportPreference.

## EndnoteTextFrames

Collection of EndnoteTextFrame objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> EndnoteTextFrame **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates an EndnoteTextFrame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the EndnoteTextFrame is created. (Optional) |
| LocationOptions | at | Placement for inserting the EndnoteTextFrame relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: Required when the at parameter is before or after. Accepted types: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new EndnoteTextFrame. (Optional) |

> Number **count**()
>
> Shows how many EndnoteTextFrame elements are present.
> EndnoteTextFrame **item**( Mixed **index** )
>
> Gets the EndnoteTextFrame identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted types: Long Integer or String. |

> EndnoteTextFrame **itemByName**( String **name** )
>
> Gets the EndnoteTextFrame with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> EndnoteTextFrame **itemByID**( Number **id** )
>
> Gets the EndnoteTextFrame with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> EndnoteTextFrame **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the EndnoteTextFrames inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | EndnoteTextFrame, index, or name at the start of the range. Accepted types: EndnoteTextFrame, Long Integer or String. |
| Mixed | to | EndnoteTextFrame, index, or name at the end of the range. Accepted types: EndnoteTextFrame, Long Integer or String. |

> EndnoteTextFrame **firstItem**()
>
> Gets the first EndnoteTextFrame in this collection.
> EndnoteTextFrame **lastItem**()
>
> Gets the last EndnoteTextFrame in this collection.
> EndnoteTextFrame **middleItem**()
>
> Gets the middle EndnoteTextFrame in this collection.
> EndnoteTextFrame **previousItem**( EndnoteTextFrame **obj** )
>
> Gets the EndnoteTextFrame located immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EndnoteTextFrame | obj | Index of the EndnoteTextFrame after the one being requested. |

> EndnoteTextFrame **nextItem**( EndnoteTextFrame **obj** )
>
> Gets the EndnoteTextFrame located immediately after the specified EndnoteTextFrame in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EndnoteTextFrame | obj | EndnoteTextFrame immediately before the one being requested. |

> EndnoteTextFrame **anyItem**()
>
> Gets any EndnoteTextFrame from this collection.
> EndnoteTextFrame **everyItem**()
>
> Gets every EndnoteTextFrame in this collection.
> String **toSource**()
>
> Builds source text that, when run, returns the EndnoteTextFrame.
> EndnoteTextFrame **[]**( Number **index** )
>
> Gets the EndnoteTextFrame at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## Endnote — Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Position of the endnote marker in the parent story.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Endnote.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Endnote. Possible parent types: InsertionPoint, Story, XmlStory, Cell or Table.
> _Read Only_
>
> Number **index**
>
> Endnote index within its container.
> _Read Only_
>
> TextColumns **textColumns**
>
> Collection of text columns.
> _Read Only_
>
> Texts **texts**
>
> Collection of text objects.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Collection of text style ranges.
> _Read Only_
>
> Lines **lines**
>
> Collection of lines.
> _Read Only_
>
> Words **words**
>
> Collection of words.
> _Read Only_
>
> Characters **characters**
>
> Collection of characters.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Collection of insertion points.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> EndnoteRange **endnoteTextRange**
>
> Endnote range object.
> String **label**
>
> Settable string-valued property.
> String **name**
>
> Endnote name; this aliases the Endnote's label property.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **deleteEndnote**()
>
> Removes the endnote reference together with the related endnote text range.
> **insertTextInEndnote**( InsertionPoint **storyOffset**, String **contents** )
>
> Adds contents to the endnote text range at the specified text index. The insertion point must fall inside the start and end range indices and outside the markers.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| InsertionPoint | storyOffset | Location in the story, supplied as an insertion point. |
| String | contents | Text content to insert. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the given label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds source text that, when run, returns the Endnote.
> Endnote **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Endnotes

Collection of Endnote objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Shows how many Endnote elements are present.
> Endnote **item**( Mixed **index** )
>
> Gets the Endnote identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted types: Long Integer or String. |

> Endnote **itemByName**( String **name** )
>
> Gets the Endnote with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Endnote **itemByID**( Number **id** )
>
> Gets the Endnote with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> Endnote **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Endnotes inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Endnote, index, or name at the start of the range. Accepted types: Endnote, Long Integer or String. |
| Mixed | to | Endnote, index, or name at the end of the range. Accepted types: Endnote, Long Integer or String. |

> Endnote **firstItem**()
>
> Gets the first Endnote in this collection.
> Endnote **lastItem**()
>
> Gets the last Endnote in this collection.
> Endnote **middleItem**()
>
> Gets the middle Endnote in this collection.
> Endnote **previousItem**( Endnote **obj** )
>
> Gets the Endnote located immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Endnote | obj | Index of the Endnote after the one being requested. |

> Endnote **nextItem**( Endnote **obj** )
>
> Gets the Endnote located immediately after the specified Endnote in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Endnote | obj | Endnote immediately before the one being requested. |

> Endnote **anyItem**()
>
> Gets any Endnote from this collection.
> Endnote **everyItem**()
>
> Gets every Endnote in this collection.
> String **toSource**()
>
> Builds source text that, when run, returns the Endnote.
> Endnote **[]**( Number **index** )
>
> Gets the Endnote at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## EPSs

Collection of EPS files.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Shows how many EPS elements are present.
> EPS **item**( Mixed **index** )
>
> Gets the EPS identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted types: Long Integer or String. |

> EPS **itemByName**( String **name** )
>
> Gets the EPS with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> EPS **itemByID**( Number **id** )
>
> Gets the EPS with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> EPS **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the EPSs inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | EPS, index, or name at the start of the range. Accepted types: EPS, Long Integer or String. |
| Mixed | to | EPS, index, or name at the end of the range. Accepted types: EPS, Long Integer or String. |

> EPS **firstItem**()
>
> Gets the first EPS in this collection.
> EPS **lastItem**()
>
> Gets the last EPS in this collection.
> EPS **middleItem**()
>
> Gets the middle EPS in this collection.
> EPS **previousItem**( EPS **obj** )
>
> Gets the EPS located immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EPS | obj | Index of the EPS after the one being requested. |

> EPS **nextItem**( EPS **obj** )
>
> Gets the EPS located immediately after the specified EPS in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EPS | obj | EPS immediately before the one being requested. |

> EPS **anyItem**()
>
> Gets any EPS from this collection.
> EPS **everyItem**()
>
> Gets every EPS in this collection.
> String **toSource**()
>
> Builds source text that, when run, returns the EPS.
> EPS **[]**( Number **index** )
>
> Gets the EPS at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## EPSColorSpace

Options that choose the color space used to represent color in the exported EPS.

### Class

> _Read Only_
>
> Number **RGB** = 1666336578
>
> Uses the RGB color space for every color value. Best suited to documents intended for on-screen viewing.
> _Read Only_
>
> Number **CMYK** = 1129142603
>
> Produces a separable file by mapping all color values to the gamut of CYMK process color inks.
> _Read Only_
>
> Number **GRAY** = 1766290041
>
> Changes all color values into high-quality black-and-white images. Converted gray levels reflect the original objects' luminosity.
> _Read Only_
>
> Number `UNCHANGED_COLOR_SPACE` = 1970161251
>
> Keeps every image in its original color space.
> _Read Only_
>
> Number `POSTSCRIPT_COLOR_MANAGEMENT` = 1164208483
>
> Applies PostScript color management, including profiles.

## EPSExportPreference

EPS export preference settings.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the EPSExportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> Measurement Unit (Number or String)=any **bleedBottom**
>
> Bottom-page bleed area height. Note: requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedInside**
>
> Inside-page bleed area width. Note: requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedOutside**
>
> Outside-page bleed area width. Note: requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedTop**
>
> Top-page bleed area height. Note: requires use document bleed to print set to true.
> EPSColorSpace **epsColor**
>
> Color space used to represent color in the exported EPS.
> DataFormat **dataFormat**
>
> Format used when image data is sent to the printer.
> FlattenerPreset **appliedFlattenerPreset**
>
> Transparency flattener preset selected for use.
> FontEmbedding **fontEmbedding**
>
> Determines the way fonts are embedded in the exported EPS.
> Boolean **ignoreSpreadOverrides**
>
> When true, flattener spread overrides are ignored.
> Boolean **omitBitmaps**
>
> When true, bitmap images are replaced by OPI links.
> Boolean **omitEPS**
>
> When true, EPS images are replaced by OPI links.
> Boolean **omitPDF**
>
> When true, PDF images are replaced by OPI links.
> Boolean **opiImageReplacement**
>
> When true, prints graphics represented by OPI comments stored in imported EPS files or by links that use OPI comments. For details about OPI-comment linking, see omit EPS, omit PDF, or omit bitmaps.
> Mixed **pageRange**
>
> Pages selected for printing, given as an enumeration or a string. Use a hyphen (-) between page numbers for a range. Use a comma (,) between individual pages. Can return: PageRange enumerator or String.
> PreviewTypes **preview**
>
> Preview image file format saved with the exported EPS file.
> PostScriptLevels **postscriptLevel**
>
> PostScript level for the printer.
> Boolean **epsSpreads**
>
> When true, facing pages export as one page with spread width. When false, spread pages export separately.
> EPSImageData **imageData**
>
> Image data exported to the EPS document.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the EPSExportPreference.
> EPSExportPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## EPSImageData

Options controlling image-data export to the EPS document.

### Class

> _Read Only_
>
> Number `ALL_IMAGE_DATA` = 1853058416
>
> Outputs high-resolution data. Note: Choose this for files destined for a high-resolution output device.
> _Read Only_
>
> Number `PROXY_IMAGE_DATA` = 1819243130
>
> Outputs only 72 dpi screen-resolution versions of placed bitmap images. Note: Use with OPI image replacement, or when the result is meant for on-screen viewing.

## EPSImportPreference

EPS import preference settings.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the EPSImportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> Boolean **opiComments**
>
> When true, reads OPI image links from the imported EPS file. When false, leaves the OPI links intact without reading them.
> Boolean **epsFrames**
>
> When true, applies clipping paths saved in the EPS file.
> CreateProxy **epsProxy**
>
> Specifies when preview images should be created.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the EPSImportPreference.
> EPSImportPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## See also

- [Characters](uxp-characters.md)
