# Using The Xmp Scripting Api, Xmpscript Object Reference, Xmpaliasinfo, Xmpconst ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Using the XMP scripting API; XMPScript object reference; XMPAliasInfo; XMPConst; XMPDateTime; XMPFile.

## Using the XMP scripting API

### Accessing the XMP scripting API — Using the XMP scripting API

The XMPMeta object is the main access point for namespaces and properties in an XMP metadata packet. With it, scripts can create and remove namespaces and properties, inspect values, and change property values.

There are several ways to obtain or create an XMPMeta object:

- Use an XMPFile object to read existing metadata directly from a file. XMPFile.getXMP() creates an XMPMeta object that can be used to inspect or change properties and values. XMPFile.putXMP() can then write the changed metadata back to the file.
- Create an XMPMeta object with the constructor, initialized from an XMP packet created or acquired elsewhere.
- Create a new empty XMPMeta object with the constructor, then use its methods to build namespaces and properties from scratch. XMPFile.putXMP() can inject that new metadata into a file afterward.

In Adobe Bridge, serialized XMP lets the built-in Metadata object and the XMPScript XMPMeta object exchange XMP metadata.

```
var thumb = new Thumbnail( new File( "/C/myImage.jpg") );
app.synchronousMode = true;

var xmp = new XMPMeta( thumb.metadata.serialize() );
```

```
var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );
```

```
// Create a compact XMP packet
var newPacket = xmp.serialize( XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_USE_COMPACT_FORMAT ) );
thumb.metadata = new Metadata( newPacket );
```

```
var xmp = new XMPFile( thumb.spec.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
```

Note

XMPFile does not handle every file format supported by Adobe Bridge.

### Creating new metadata

The following code starts with an empty XMPMeta object, sets a metadata property, and serializes the packet to a string that could be given to an authoring tool or saved in a file.

```
var xmp = new XMPMeta();
xmp.setProperty( XMPConst.NS_XMP, "CreatorTool", "My Script" );
var xmpStr = xmp.serialize(); // Serialize the XMP packet to XML

// Retrieve property
var prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
$.writeln( "namespace: " + prop.namespace + "\n" +
    "property path + name: " + prop.path + "\n" +
    "value: " + prop ); // same as prop.value
```

### Modifying existing metadata

This code opens an existing XMP packet, assuming its location is already stored in a string variable. It updates the modification-date property to the current date and time, then stores the compacted updated XMP packet back into the string.

```
var xmp = new XMPMeta( xmpStr ); // Object initialized with xmp packet as string
var dateTime = new XMPDateTime( new Date() ); // Now
var oldModificationDate = mp.getProperty( XMPConst.NS_XMP, "ModifyDate", "xmpdate" );

$.writeln( "Old modification date: " + oldModificationDate );
xmp.setProperty( XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate" );

// Serialize to XML, in compact style
var xmpStr = xmp.serialize( XMPConst.SERIALIZE_USE_COMPACT_FORMAT );
```

### Using XMPFile for batch processing

This example walks through a folder of image files and processes their metadata. For each picture, the script does the following:

- Reads and parses metadata. If an image file lacks XMP metadata, its legacy metadata is automatically converted to XMP.
- Removes the current creator list and adds a new creator value.
- Saves the changed metadata back into the file.

```
$.writeln( "XMPFiles batch processing example" );

// Define folder containing images (make sure that you use copies)
var picFolder = "/c/temp/photos";

// Load the XMPScript library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}

// Iterate through the photos in the folder
var pics = Folder(picFolder).getFiles();
for ( var i = 0; i < pics.length; i++ ) {
    var file = pics[i];
    $.writeln( "Process file: " + file.fsName );

    // Applies only to files, not to folders
    if ( file instanceof File ) {
        var xmpFile = new XMPFile( file.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
        var xmp = xmpFile.getXMP();

        // Delete existing authors and add a new one
        // Existing metadata stays untouched
        xmp.deleteProperty( XMPConst.NS_DC, "creator" );
        xmp.appendArrayItem( XMPConst.NS_DC, "creator", "Judy", 0, XMPConst.ARRAY_IS_ORDERED );

        // Write updated metadata into the file
        if ( xmpFile.canPutXMP( xmp ) ) {
            xmpFile.putXMP( xmp );
        }
        xmpFile.closeFile( XMPConst.CLOSE_UPDATE_SAFELY );
    }
}
```

### Integrating XMPScript with Adobe Bridge

This script adds a Thumbnail context-menu command that displays selected XMP properties.

It shows how to read XMP metadata stored with a Thumbnail object, create an XMPMeta object from it, and then retrieve several kinds of property values from that object.

To use the script, put it in the "Startup Scripts" folder for Adobe Bridge (see Startup scripts). After Adobe Bridge starts, select a document thumbnail that has XMP metadata; open its context menu and choose Show XMP Properties.

```
$.writeln("XMPFiles batch processing example");

// Define folder containing images (make sure that you use copies)
var picFolder = "/c/temp/photos";

// Load the XMPScript library
$.writeln("XMPScript Adobe Bridge Integration Example");

// Load the XMPScript library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}
// Add a context menu item to Thumbnails
var xmpCommand = new MenuElement( "command", "Show XMP Properties", "at the end of Thumbnail", "showProperties" );

// Define command behavior
xmpCommand.onSelect = function(m) {

// Get the first selected thumbnail
var thumb = app.document.selections[0];

// If there is one, and it has metadata
if ( thumb && thumb.metadata ) {

    // Retrieve metadata from the thumbnail into an XMPMeta object`
    // ( if app.synchronousMode is set, use thumb.metadata )

    var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );

    // Retrieve some of the XMP property values
    // A simple property with a localized string value
    var msg = "Title: " + xmp.getLocalizedText( XMPConst.NS_DC, "title", null, "en" ) + "\n";

    // An array property
    msg += "Authors of the document:\n";
    var num = xmp.countArrayItems( XMPConst.NS_DC, "creator" );

    for ( var i = 1; i <= num; i++ ) {}
        msg += "* " + xmp.getArrayItem( XMPConst.NS_DC, "creator", i ) + "\n";
    }

    // A simple property with a date value
    msg += "Creation Date: " + xmp.getProperty( XMPConst.NS_XMP, "CreateDate" )

    // Display the values
    Window.alert( msg );
} else {
    Window.alert( "No thumbnail selected or no XMP contained" );
}
```

## XMPScript object reference

The XMP JavaScript API classes, along with their properties and methods, are listed alphabetically here.

Loading the library places these XMP classes in the global JavaScript namespace:

| Object | Description |
| --- | --- |
| XMPMeta object | Supplies core XMP Toolkit services. |
| XMPFile object | Gives convenient I/O access to main, document-level XMP for a file. |
| XMPUtils object | Adds utility functions for arrays. |
| XMPDateTime object | Models date-time values. |
| XMPConst object | Holds numeric and string constants for the JavaScript API. |

These top-level objects expose additional support classes:

| Object | Description |
| --- | --- |
| XMPIterator object | Iterates through properties in an XMPMeta object. |
| XMPProperty object | Represents a metadata property. |
| XMPAliasInfo object | Represents a metadata alias. |
| XMPFileInfo object | Represents a file. |
| XMPPacketInfo object | Represents a raw XMP packet in a file. |

## XMPAliasInfo

### XMPScript object reference — XMPAliasInfo object

XMPMeta.resolveAlias returns this object. Its read-only properties identify how an alias resolves.

### XMPAliasInfo object properties

Property

Type

Description

arrayForm

Number

A constant that identifies the resolved alias property type; 0 means a simple property. Constants are: - XMPConst.`ALIAS_TO_SIMPLE_PROP`: Direct mapping; it can connect simple, array, or structure properties to the same property form. - XMPConst.`ALIAS_TO_ARRAY`: The real property is an unordered array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ORDERED_ARRAY`: The real property is an ordered array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ALT_ARRAY`: The real property is an alternate array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ALT_TEXT`: The real property is an alternate text array, and the alias targets the x-default element.

name

String

The property name resolved from the alias.

namespace

String

The namespace for the property resolved from the alias. See Schema namespace string constants.

| --- | --- | --- |

## XMPConst

### XMPScript object reference — XMPConst object

This object holds read-only constants for the JavaScript XMP API. Some constants are documented where they are used; longer groups are collected here.

### Schema namespace string constants

Namespace URI constants used by all get and set property operations. See XMPMeta object.

| Namespace | Description |
| --- | --- |
| `NS_DC` | Dublin Core schema XML namespace, http://purl.org/dc/elements/1.1 |
| `NS_IPTC_CORE` | IPTC Core schema XML namespace. |
| `NS_RDF` | RDF XML namespace. |
| `NS_XML` | XML namespace for XML. |
| `NS_XMP` | XMP basic schema XML namespace. |
| `NS_XMP_RIGHTS` | XMP copyright schema XML namespace. |
| `NS_XMP_MM` | XMP digital asset management schema XML namespace. |
| `NS_XMP_BJ` | Job management schema XML namespace. |
| `NS_XMP_NOTE` | XMP note schema XML namespace. An Adobe private namespace; do not create new properties. |
| `NS_PDF` | PDF schema XML namespace. |
| `NS_PDFX` | PDFX schema XML namespace. An Adobe private namespace; do not create new properties. |
| `NS_PHOTOSHOP` | Adobe Photoshop custom schema XML namespace. |
| `NS_PS_ALBUM` | Adobe Photoshop Album custom schema XML namespace. |
| `NS_EXIF` | Adobe's EXIF schema XML namespace. |
| `NS_EXIF_AUX` | Adobe's EXIF auxiliary schema XML namespace. |
| `NS_TIFF` | Adobe's TIFF schema XML namespace. |
| `NS_PNG` | PNG schema XML namespace. |
| `NS_JPEG` | JPEG schema XML namespace. |
| `NS_SWF` | Flash small web format schema XML namespace. |
| `NS_JPK` | JPK schema XML namespace. |
| `NS_CAMERA_RAW` | Camera Raw schema XML namespace. |
| `NS_DM` | DM schema XML namespace. |
| `NS_ADOBE_STOCK_PHOTO` | Adobe Stock Photos schema XML namespace. |
| `NS_ASF` | Microsoft advanced streaming format schema XML namespace. |

### Type namespace string constants

Field-type namespace URI constants used by all structured property operations. See XMPMeta object.

| Namespace | Description |
| --- | --- |
| `TYPE_IDENTIFIER_QUAL` | XML namespace for qualifiers of the xmp:Identifier property. |
| `TYPE_DIMENSIONS` | XML namespace for Dimensions type fields. |
| `TYPE_TEXT` | XML namespace for the XMP text document schema. |
| `TYPE_PAGEDFILE` | XML namespace for the XMP paged document schema. |
| `TYPE_GRAPHICS` | XML namespace for a structure describing a colorant (swatch) used in a document. |
| `TYPE_IMAGE` | XML namespace for graphical-image fields. Used for the Thumbnail type. |
| `TYPE_FONT` | XML namespace for a structure describing a font used in a document. |
| `TYPE_RESOURCE_EVENT` | XML namespace for fields of the ResourceEvent type. |
| `TYPE_RESOURCE_REF` | XML namespace for fields of the ResourceRef type. |
| `TYPE_ST_VERSION` | XML namespace for fields of the Version type. |
| `TYPE_ST_JOB` | XML namespace for fields of the JobRef type. |
| `TYPE_MANIFEST_ITEM` | XML namespace for manifest array elements. |
| `TYPE_PDFA_SCHEMA` |  |
| `TYPE_PDFA_PROPERTY` |  |
| `TYPE_PDFA_TYPE` |  |
| `TYPE_PDFA_FIELD` |  |
| `TYPE_PDFA_ID` |  |
| `TYPE_PDFA_EXTENSION` | XML namespaces for PDF subtypes |

### File format numeric constants

Supported file-type constants used by I/O operations. See XMPFile object.

| Constant | Description |
| --- | --- |
| `FILE_UNKNOWN` | Unknown file format. |
| `FILE_PDF` | PDF |
| `FILE_POSTSCRIPT` | PS, general PostScript following DSC conventions |
| `FILE_EPS` | EPS, encapsulated PostScript |
| `FILE_JPEG` | JPEG |
| `FILE_JPEG2K` | JPX, JPEG 2000 file |
| `FILE_TIFF` | TIFF |
| `FILE_GIF` | GIF |
| `FILE_PNG` | PNG |
| `FILE_SWF` | SWF, Flash file |
| `FILE_FLA` | FLA, Flash authoring file |
| `FILE_FLV` | FLV, Flash video file |
| `FILE_MOV` | MOV, Quicktime |
| `FILE_AVI` | AVI |
| `FILE_CIN` | CIN, Cineon |
| `FILE_WAV` | WAV |
| `FILE_MP3` | MP3 |
| `FILE_SES` | SES, Audition session |
| `FILE_CEL` | CEL, Audition loop |
| `FILE_MPEG` | MPEG |
| `FILE_MPEG2` | MP2 |
| `FILE_MPEG4` | MP4 |
| `FILE_WMAV` | WMAV, Windows Media Audio and Video |
| `FILE_AIFF` | AIFF |
| `FILE_HTML` | HTML |
| `FILE_XML` | XML |
| `FILE_TEXT` | TEXT |
| `FILE_PHOTOSHOP` | PSD, Photoshop |
| `FILE_ILLUSTRATOR` | AI, Illustrator |
| `FILE_INDESIGN` | INDD, Indesign |
| `FILE_AE_PROJECT` | AE, After Effects |
| `FILE_AE_PROJECT_TEMPLATE` | AET, After Effects Project Template |
| `FILE_AE_FILTER_PRESET` | FFX, After Effects Filter Preset file |
| `FILE_ENCORE_PROJECT` | NCOR, Encore DVD project file |
| `FILE_PREMIERE_PROJECT` | PRPJ, Premiere Project file |
| `FILE_PREMIERE_TITLE` | PRTL, Premiere Title file |

## XMPDateTime

### XMPScript object reference — XMPDateTime object

This class models date and time values, including time-zone data and precision as fine as nanoseconds.

### XMPDateTime object constructors

```
new XMPDateTime();            // creates an object containing a 0 date
new XMPDateTime(date);        // initializes the object with a JavaScript date
new XMPDateTime(iso8601Date); // initializes the object with an ISO date
```

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| date | A JavaScript Date object. | Uses the local operation-system time-zone value for the time zone. XMP Toolkit times can use up to nanosecond resolution, but JavaScript Date conversion in either direction reduces time precision to milliseconds. |
| iso8601Date | String | ISO 8601 date-time text; for example: "2007-04-10T17:54:50+01:00" |

### XMPDateTime object properties

Each property is read-write and can change the date-time value. Values outside the allowed range are automatically clamped to the nearest permitted minimum or maximum.

Property

Type

Description

year

Number

Year, in the range [0000...9999].

month

Number

Month, in the range [1...12].

day

Number

Day, in the range [1...31].

hour

Number

Hour, in the range [1...23].

minute

Number

Minute, in the range [1...59].

second

Number

Second, in the range [1...59].

nanosecond

Number

Nanosecond, in the range [0...1e+9 -1].

tzSign

Number

Direction of the time-zone offset. - 0: UTC - -1: west - 1: east

tzHour

Number

Hour component of the time-zone offset relative to the prime meridian; range [1...23].

tzMinute

Number

Minute component of the time-zone offset relative to the prime meridian; range [1...59].

| --- | --- | --- |

### XMPDateTime object functions

### XMPDateTime.compareTo()

XMPDateTime.compareTo(xmpDateTime)

### Description

Reports chronological order for two XMPDateTime values.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpDataTime | XMPDateTime object | Object to compare to |

### Returns

- 0 if the two values are identical,
- 1 when this date-time is later than the comparison value
- -1 when this date-time precedes the comparison value

### XMPDateTime.convertToLocalTime()

XMPDateTime.convertToLocalTime()

### Description

Changes this object's time zone to the local operating-system time zone, adjusting time values from the previous time zone when needed.

### Returns

Nothing

### XMPDateTime.convertToUTCTime()

XMPDateTime.convertToUTCTime()

### Description

Changes this object's time zone to UTC (coordinated universal time), adjusting time values from the prior time zone when needed.

### Returns

Nothing

### XMPDateTime.getDate()

XMPDateTime.getDate()

### Description

Creates a JavaScript Date from this date-time value. The time zone is normalized because JavaScript format does not support time zones, and precision drops to milliseconds.

### Returns

A JavaScript Date object.

### XMPDateTime.setLocalTimeZone()

XMPDateTime.setLocalTimeZone()

### Description

Replaces any existing time-zone value with the current operation-system value.

Other fields are not affected.

### Returns

Nothing

## XMPFile

### XMPScript object reference — XMPFile object

This class maps to the File Handler component in the Adobe XMP Toolkit and gives scripts convenient I/O access to a file's main, document-level XMP.

For formats that can embed XMP metadata under the XMP Specification, the File Handler supports direct handling. It can insert XMP when none is present, grow existing XMP beyond the available padding, and reconcile XMP against other metadata formats.

For unsupported formats, the XMP Toolkit includes the Packet Scanner as a fallback. That scanner can reach every file format in a more limited way by scanning the whole file dump. It can update a file, but it cannot enlarge the packet or reconcile other metadata formats.

Retrieving thumbnails is not currently supported by the XMPScript API.

Note

Embedded file metadata can also be reached through the Adobe Bridge Metadata object. That object adds thumbnail and preview support, plus coverage for more file formats, including PDF and Camera Raw.

Consult Adobe Bridge JavaScript Guide; also see the separate Adobe Bridge JavaScript Reference document.

### XMPFile object constructors

new XMPFile(filePath, format, openFlags)

Property

Type

Description

filePath

String

File path

format

File format numeric constant

Format used when creating the object.

openFlags

Constant. One of: - XMPConst.`OPEN_FOR_READ` - Opens with read-only access. - XMPConst.`OPEN_FOR_UPDATE` - Opens for both reading and writing. - XMPConst.`OPEN_ONLY_XMP` - Requests only XMP, enabling space and time optimizations. - XMPConst.`OPEN_STRICTLY` - Uses strict handling for XMP discovery and reconciliation with other forms. - XMPConst.`OPEN_USE_SMART_HANDLER` - Requires a smart handler; packet scanning is not performed. - XMPConst.`OPEN_USE_PACKET_SCANNING` - Forces packet scanning and bypasses smart handlers. - XMPConst.`OPEN_LIMITED_SCANNING` - Packet-scans only file types known to require scanning.

File open options.

| --- | --- | --- |

### XMPFile class properties

This static property belongs to the XMPFile class, so you do not need an instance to read it.

| Property | Type | Descriptiopn |
| --- | --- | --- |
| version | String | Descriptive string for this XMP Toolkit version. |

### XMPFile class functions

This static method belongs to the XMPFile class, so no instance is required to call it.

### XMPFile.getFormatInfo()

XMPFile.getFormatInfo(format)

### Description

Returns the supported capabilities for the specified file format.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| format | File format numeric constants | Format whose information is requested |

### Returns

A bitwise OR of bit-flag constants, or 0 when the format has no handler. Constants are:

- XMPConst.`HANDLER_CAN_INJECT_XMP` - Can add initial XMP to an existing file.
- XMPConst.`HANDLER_CAN_EXPAND` - Can enlarge existing-file XMP or other metadata.
- XMPConst.`HANDLER_CAN_REWRITE` - Can write new metadata while copying between files.
- XMPConst.`HANDLER_PPEFERS_IN_PLACE` - Expansion is supported, with in-place update preferred.
- XMPConst.`HANDLER_CAN_RECONCILE` - Can reconcile XMP with other forms.
- XMPConst.`HANDLER_ALLOWS_ONLY_XMP` - Can restrict access to XMP alone and skip other forms.
- XMPConst.`HANDLER_RETURNS_RAW_PACKETS` - File handler can return raw XMP packet details.
- XMPConst.`HANDLER_RETURNS_TNAIL` - File handler can return a native thumbnail.
- XMPConst.`HANDLER_OWNS_FILE` - File handler owns opening and closing the file.
- XMPConst.`HANDLER_ALLOWS_SAFE_UPDATE` - Crash-safe file updates are allowed by the file handler.
- XMPConst.`HANDLER_NEEDS_READONLY_PACKET` - The file format requires a read-only XMP packet.
- XMPConst.`HANDLER_USES_SIDECAR_XMP` - XMP is kept in a sidecar file by the file handler.

### XMPFile object functions

### XMPFile.canPutXMP()

XMPFileObj.canPutXMP(xmpObj)

XMPFileObj.canPutXMP(xmpPacket)

XMPFileObj.canPutXMP(xmpBuffer)

### Description

Checks whether XMP metadata of the supplied size can be written back to this file. This matters especially when the packet grows.

Only the serialized packet length is considered; the supplied XMP is not retained. To update the XMP in the open file, call putXMP().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta object | XMP metadata to test |
| xmpPacket | String | String that contains an XMP packet. |
| xmpBuffer | Array of Number | Raw XMP packet data. |

### Retrurns

Boolean. true when the supplied XMP can be written into this file.

### XMPFile.closeFile()

XMPFileObj.closeFile(closeFlags)

### Description

Closes the open file and writes changes when required, such as after update-mode opening with changed or injected XMP. The open-time options control whether this function also reconciles XMP with other metadata forms, so legacy metadata can be brought into agreement with XMP.

### Parameters

Parameter

Type

Description

closeFlags

Closing flag constant, or 0. One of: - XMPConst.`CLOSE_UPDATE_SAFELY` - Writes to a temporary file first and then swaps it in for crash safety.

Flags used during close.

| --- | --- | --- |

### Returns

Nothing

### XMPFile.getXMP()

XMPFileObj.getXMP()

### Description

Gets the existing XMP metadata from this file and parses it. When the file format contains legacy metadata that the File Handler recognizes, the function builds an XMP packet from that metadata.

### Returns

An XMPMeta object, or null when the file has neither XMP nor convertible legacy metadata.

### XMPFile.getPacketInfo()

XMPFileObj.getPacketInfo()

### Description

Gets the raw XMP packet from this file together with packet details. The options used to open the file decide whether other metadata forms are reconciled with the XMP.

### Returns

An XMPPacketInfo object, or null when the file has no XMP metadata.

### XMPFile.getFileInfo()

XMPFileObj.getFileInfo()

### Description

Gets core file details.

### Returns

XMPFileInfo object.

### XMPFile.putXMP()

XMPFileObj.putXMP(xmpObj)

XMPFileObj.putXMP(xmpPacket)

XMPFileObj.putXMP(xmpOBuffer)

### Description

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta object | XMP metadata supplied as an XMPMeta object. |
| xmpPacket | String | XMP metadata supplied as a String containing an XMP packet. |
| xmpBuffer | Array of Numbers | XMP metadata supplied as an Array of Number with raw XMP packet data. |

Provides replacement XMP metadata for this file. No file write occurs until closeFile() runs. The options used when the file was opened control whether closeFile() reconciles the XMP with other metadata forms, including whether legacy metadata is updated to match the XMP metadata.

### Returns

Nothing
