# Xmp Const, Xmp Date Time, Xmp File Info, Xmp Iterator

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMP Classes; require('uxp').xmp.XMPConst; require('uxp').xmp.XMPDateTime — XMPDateTime(); XMPFileInfo; XMPIterator.

## XMP Classes

- [XMPConst](uxp-xmp-classes.md)
- [XMPDateTime](uxp-xmp-classes.md)
- [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md)
- [XMPFileInfo](uxp-xmp-classes.md)
- [XMPIterator](uxp-xmp-classes.md)
- [XMPMeta](uxp-xmp-meta.md)
- [XMPPacketInfo](uxp-xmp-classes-2.md)
- [XMPProperty](uxp-xmp-classes-2.md)
- [XMPUtils](uxp-xmp-classes-2.md)

## require('uxp').xmp.XMPConst

`XMPConst` groups read-only constants used by the JavaScript XMP API. Individual constants also appear near the operations that use them, while extended lists are collected in this reference.

### Schema namespace string constants

Use these constants as namespace URI values during XMP get/set property calls. For API context, consult XMPMeta object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `NS_DC` | string | Read-only | The XML namespace for the Dublin Core schema, [http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1) |
| `NS_IPTC_CORE` | string | Read-only | The XML namespace for the IPTC Core schema. |
| `NS_RDF` | string | Read-only | The XML namespace for RDF. |
| `NS_XML` | string | Read-only | The XML namespace for XML. |
| `NS_XMP` | string | Read-only | The XML namespace for the XMP basic schema. |
| `NS_XMP_RIGHTS` | string | Read-only | The XML namespace for the XMP copyright schema. |
| `NS_XMP_MM` | string | Read-only | The XML namespace for the XMP digital asset management schema. |
| `NS_XMP_BJ` | string | Read-only | The XML namespace for the job management schema. |
| `NS_XMP_NOTE` | string | Read-only | The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties. |
| `NS_PDF` | string | Read-only | The XML namespace for the PDF schema. |
| `NS_PDFX` | string | Read-only | The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties. |
| `NS_PHOTOSHOP` | string | Read-only | The XML namespace for the Adobe Photoshop custom schema. |
| `NS_PS_ALBUM` | string | Read-only | The XML namespace for the Adobe Photoshop Album custom schema. |
| `NS_EXIF` | string | Read-only | The XML namespace for Adobeâ€™s EXIF schema. |
| `NS_EXIF_AUX` | string | Read-only | The XML namespace for Adobeâ€™s EXIF auxiliary schema. |
| `NS_TIFF` | string | Read-only | The XML namespace for Adobeâ€™s TIFF schema. |
| `NS_PNG` | string | Read-only | The XML namespace for the PNG schema. |
| `NS_JPEG` | string | Read-only | The XML namespace for the JPEG schema. |
| `NS_SWF` | string | Read-only | The XML namespace for the Flash small web format schema. |
| `NS_JPK` | string | Read-only | The XML namespace for the JPK schema. |
| `NS_CAMERA_RAW` | string | Read-only | The XML namespace for the Camera Raw schema. |
| `NS_DM` | string | Read-only | The XML namespace for the DM schema. |
| `NS_ADOBE_STOCK_PHOTO` | string | Read-only | The XML namespace for the Adobe Stock Photo schema. |
| `NS_ASF` | string | Read-only | The XML namespace for the Microsoft advanced streaming format schema. |

### Type namespace string constants

Use these constants as field-type namespace URI values when working with structured properties. For API context, consult XMPMeta object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `TYPE_IDENTIFIER_QUAL` | string | Read-only | The XML namespace for qualifiers of the xmp:Identifier property. |
| `TYPE_DIMENSIONS` | string | Read-only | The XML namespace for fields of the Dimensions type. |
| `TYPE_TEXT` | string | Read-only | The XML namespace for the XMP text document schema. |
| `TYPE_PAGEDFILE` | string | Read-only | The XML namespace for the XMP paged document schema. |
| `TYPE_GRAPHICS` | string | Read-only | The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document. |
| `TYPE_IMAGE` | string | Read-only | The XML namespace for fields of a graphical image. Used for the Thumbnail type. |
| `TYPE_FONT` | string | Read-only | The XML namespace for a structure containing the characteristics of a font used in a document. |
| `TYPE_RESOURCE_EVENT` | string | Read-only | The XML namespace for fields of the ResourceEvent type. |
| `TYPE_RESOURCE_REF` | string | Read-only | The XML namespace for fields of the ResourceRef type. |
| `TYPE_ST_VERSION` | string | Read-only | The XML namespace for fields of the Version type. |
| `TYPE_ST_JOB` | string | Read-only | The XML namespace for fields of the JobRef type. |
| `TYPE_MANIFEST_ITEM` | string | Read-only | The XML namespace for fields of the ManifestItem type. |
| `TYPE_PDFA_SCHEMA` | string | Read-only | The XML namespace for fields of the PDFA schema. |
| `TYPE_PDFA_PROPERTY` | string | Read-only | The XML namespace for fields of the PDFA property. |
| `TYPE_PDFA_TYPE` | string | Read-only | The XML namespace for fields of the PDFA type. |
| `TYPE_PDFA_FIELD` | string | Read-only | The XML namespace for fields of the PDFA field. |
| `TYPE_PDFA_ID` | string | Read-only | The XML namespace for fields of the PDFA ID. |
| `TYPE_PDFA_EXTENSION` | string | Read-only | The XML namespace for PDF subtypes. |

### File format numeric constants

Use these constants to identify supported file formats during I/O. For API context, consult XMPFile object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `FILE_UNKNOWN` | number | Read-only | Unknown file-format. |
| `FILE_PDF` | number | Read-only | PDF |
| `FILE_POSTSCRIPT` | number | Read-only | PS, general PostScript following DSC conventions |
| `FILE_EPS` | number | Read-only | EPS, encapsulated PostScript |
| `FILE_JPEG` | number | Read-only | JPEG |
| `FILE_JPEG2K` | number | Read-only | JPX, JPEG 2000 file |
| `FILE_TIFF` | number | Read-only | TIFF |
| `FILE_GIF` | number | Read-only | GIF |
| `FILE_PNG` | number | Read-only | PNG |
| `FILE_SWF` | number | Read-only | SWF, Flash file |
| `FILE_FLA` | number | Read-only | FLA, Flash authoring file |
| `FILE_FLV` | number | Read-only | FLV, Flash video file |
| `FILE_MOV` | number | Read-only | MOV, Quicktime |
| `FILE_AVI` | number | Read-only | AVI |
| `FILE_CIN` | number | Read-only | CIN, Cineon |
| `FILE_WAV` | number | Read-only | WAV |
| `FILE_MP3` | number | Read-only | MP3 |
| `FILE_SES` | number | Read-only | SES, Audition session |
| `FILE_CEL` | number | Read-only | CEL, Audition loop |
| `FILE_MPEG` | number | Read-only | MPEG |
| `FILE_MPEG2` | number | Read-only | MPEG2 |
| `FILE_MPEG4` | number | Read-only | MPEG4 |
| `FILE_WMAV` | number | Read-only | WMAV, Windows Media Audio and Video |
| `FILE_AIFF` | number | Read-only | AIFF |
| `FILE_HTML` | number | Read-only | HTML |
| `FILE_XML` | number | Read-only | XML |
| `FILE_TEXT` | number | Read-only | TEXT |
| `FILE_PHOTOSHOP` | number | Read-only | PSD, Photoshop |
| `FILE_ILUSTRATOR` | number | Read-only | AI, Illustrator |
| `FILE_INDESIGN` | number | Read-only | INDD, InDesign |
| `FILE_AE_PROJECT` | number | Read-only | AEP, After Effects project |
| `FILE_AE_PROJECT_TEMPLATE` | number | Read-only | AET, After Effects project template |
| `FILE_AE_FILTER_PRESET` | number | Read-only | FFX, After Effects filter preset file |
| `FILE_ENCORE_PROJECT` | number | Read-only | NCOR, Encore project file |
| `FILE_PREMIERE_PROJECT` | number | Read-only | PPJ, Premiere project file |
| `FILE_PREMIERE_TITLE` | number | Read-only | PRPROJ, Premiere title file |

## require('uxp').xmp.XMPDateTime — XMPDateTime()

`XMPDateTime` models date-time values.
XMP timestamps include zone information and may reach nanosecond precision.

### require('uxp').xmp.XMPDateTime — XMPDateTime(date)

Create XMPDateTime

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` \| `string` | `[Optional]` `Date` : A JavaScript Date object. The time zone is set to the local operation-system time-zone value. Time can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value, time resolution is reduced to milliseconds. `iso8601Date`: A string containing a date-time in ISO 8601 format; for example: "2007-04-10T17:54:50+01:00" |

**Example**

```js
// Below example demonstrates how to create XMPDateTime
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

// 1. Creating using Date object
const xdt1 = new XMPDateTime(new Date());

// 2. Creating using iso8601Date
const xdt2 = new XMPDateTime("2007-04-10T17:54:50+01:00");

// 3.  Creating with no arguments
const xdt3 = new XMPDateTime();
```

**Example**

```js
// Below example demonstrates how to compare two XMPDateTime objects
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

const currentDate = new XMPDateTime(new Date());

const oldDate = new XMPDateTime("2007-04-10T17:54:50+01:00");

currentDate.compareTo(oldDate);
// Returns 1

oldDate.compareTo(currentDate);
// Returns -1

currentDate.compareTo(currentDate);
// Returns 0
```

### require('uxp').xmp.XMPDateTime — year : `number`

Year value: [0000â€¦9999].

### require('uxp').xmp.XMPDateTime — month : `number`

Month value: [1â€¦12].

### require('uxp').xmp.XMPDateTime — day : `number`

Day value: [1â€¦31].

### require('uxp').xmp.XMPDateTime — hour : `number`

Hour value: [1â€¦23].

### require('uxp').xmp.XMPDateTime — minute : `number`

Minute value: [1â€¦59].

### require('uxp').xmp.XMPDateTime — second : `number`

Second value: [1â€¦59].

### require('uxp').xmp.XMPDateTime — nanosecond : `number`

Nanosecond value: [0â€¦1e+9 -1].

### require('uxp').xmp.XMPDateTime — tzSign : `number`

Time-zone offset direction values: - 0: UTC - -1: west - 1: east

### require('uxp').xmp.XMPDateTime — tzHour : `number`

Time-zone hour offset from the prime meridian: [1â€¦23].

### require('uxp').xmp.XMPDateTime — tzMinute : `number`

Minute portion of the time-zone offset from the prime meridian, limited to the range [1…59].

### require('uxp').xmp.XMPDateTime — compareTo(dateTime)

Compares two date-time values and reports their ordering.

**Returns**: `number` - 0 when the two values match,

                   1 when this date-time is later than the supplied value,

                   -1 when this date-time is earlier than the supplied value.

`number`

| Param | Type | Description |
| --- | --- | --- |
| dateTime | `XMPDateTime` | Another XMPDateTime object. |

### require('uxp').xmp.XMPDateTime — convertToLocalTime()

Changes this object to use the local operating-system time zone and, when needed, recalculates the stored time values from the earlier time zone.

### require('uxp').xmp.XMPDateTime — convertToUTCTime()

Changes this object to use UTC (coordinated universal time) and, when needed, recalculates the stored time values from the earlier time zone.

### require('uxp').xmp.XMPDateTime — getDate()

Returns this date-time as a JavaScript Date. During conversion, the time zone is normalized because the JavaScript format does not carry time-zone data, and precision is lowered to milliseconds.

**Returns**: `Date`

### require('uxp').xmp.XMPDateTime — setLocalTimeZone()

Replaces the object's existing time-zone value with the current operating-system setting. Other fields remain unchanged.

### require('uxp').xmp.XMPDateTime — hasDate()

Checks whether a date component is present.

**Returns**: `boolean`

### require('uxp').xmp.XMPDateTime — hasTime()

Checks whether a time component is present.

**Returns**: `boolean`

### require('uxp').xmp.XMPDateTime — hasTimeZone()

Checks whether a time-zone component is present.

**Returns**: `boolean`

### require('uxp').xmp.XMPDateTime — toString()

Returns the object's string value.

**Returns**: `string`

## XMPFileInfo

**Since**: v7.2.0
You receive this object from [XMPFile.getFileInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md#getfileinfo). Its read-only properties describe the file associated with the [XMPFile object](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md).

### filePath : `string`

**Read only**
Absolute file path written in JavaScript notation.

### format : `number`

**Read only**
One file-format constant. Use [File format numeric constants](uxp-xmp-classes.md) as the reference for possible values.

### handlerFlags : `number`

**Read only**
Supported capabilities for this format are represented as a logical OR of these bit-flag constants:

                 - XMPConst.`HANDLER_CAN_INJECT_XMP` - Inserts initial XMP into a file that already exists.

                 - XMPConst.`HANDLER_CAN_EXPAND` - Enlarges XMP or other metadata in an existing file.

                 - XMPConst.`HANDLER_CAN_REWRITE` - Writes updated metadata by copying one file into another.

                 - XMPConst.`HANDLER_PPEFERS_IN_PLACE` - Expands data while preferring an in-place update.

                 - XMPConst.`HANDLER_CAN_RECONCILE` - Handles reconciliation between XMP and other forms.

                 - XMPConst.`HANDLER_ALLOWS_ONLY_XMP` - Permits access only to the XMP while ignoring other forms.

                 - XMPConst.`HANDLER_RETURNS_RAW_PACKETS` - Returns raw XMP packet information from the file handler.

                 - XMPConst.`HANDLER_RETURNS_TNAIL` - Returns a native thumbnail from the file handler.

                 - XMPConst.`HANDLER_OWNS_FILE` - Makes the file handler perform file open and close operations.

                 - XMPConst.`HANDLER_ALLOWS_SAFE_UPDATE` - Allows crash-safe file updates through the file handler.

### openFlags : `number`

**Read only**
Options used when opening this file are expressed with one of these constants:

                 - XMPConst.`OPEN_FOR_READ` - Opens the file with read-only access.

                 - XMPConst.`OPEN_FOR_UPDATE` - Opens the file for both reading and writing.

                 - XMPConst.`OPEN_ONLY_XMP` - Requests only the XMP, enabling space and time optimizations.

                 - XMPConst.`OPEN_STRICTLY` - Applies strict handling when finding XMP and reconciling with other forms.

                 - XMPConst.`OPEN_USE_SMART_HANDLER` - Requires a smart handler; packet scanning is not performed.

                 - XMPConst.`OPEN_USE_PACKET_SCANNING` - Forces packet scanning and skips the smart handler.

                 - XMPConst.`OPEN_LIMITED_SCANNING` - Packet-scans only files known to require scanning.

## XMPIterator

**Since**: v7.2.0
[XMPMeta.iterator](uxp-xmp-meta.md) creates this object. It recursively visits properties and qualifiers in an [XMPMeta object](uxp-xmp-meta.md), returning them as [XMPProperty object](uxp-xmp-classes.md).

No JavaScript properties are defined on the object.

### next()

Returns the next metadata item.

**Returns**: `XMPProperty` \| `null`

### skipSiblings()

On the next call to next(), skips both the subtree below the current node and that node's siblings.

### skipSubtree()

On the next call to next(), skips the subtree below the current node.
