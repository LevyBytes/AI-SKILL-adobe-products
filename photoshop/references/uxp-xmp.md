# Getting Started

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: require('uxp').xmp; XMP.

## require('uxp').xmp

**Since**: v7.2.0

XMP (Extensible Metadata Platform) is Adobe's standard for placing descriptive information, rights details, and other metadata inside digital files.
Because XMP is extensible and customizable, it can carry many information types as well as user-defined schemas. Adobe software and third-party applications can both work with it, which helps interoperability.
XMP uses XML syntax and the RDF model, and it is based on open standards. Files become easier to search, organize, and manage for rights purposes. In practical terms, XMP supports efficient metadata handling and digital asset management.
For additional XMP metadata details, consult the [XMP Specification at Adobe Developer Center](https://www.adobe.com/devnet/xmp.html).

Within UXP, the XMP module gives JavaScript access to the Adobe XMP Core and XMP Files libraries.
Import the XMP module before working with XMP objects.

```js
const xmp = require("uxp").xmp;
```

Once the module is imported, the XMP scripting API exposes these top-level objects.
| Class | Description |
| --- | --- |
| [XMPMeta](uxp-xmp-meta.md) | Interface for reading, writing, and modifying XMP metadata obtained through host DOM APIs. |
| [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md) | Interface for working directly with XMP metadata in a file, without relying on the host to fetch XMP metadata contents. |
| [XMPUtils](uxp-xmp-classes-2.md) | Helper functions for array handling. |
| [XMPDateTime](uxp-xmp-classes.md) | Date-time value representation. |
| [XMPConst](uxp-xmp-classes.md) | Numeric and string constants used by the JavaScript API. |

Additional support classes are reachable from the top-level objects; they wrap individual metadata properties, file details, XMP packet details, and property iteration.
| Class | Description |
| --- | --- |
| [XMPIterator](uxp-xmp-classes.md) | Iteration helper for properties contained in an XMPMeta object. |
| [XMPProperty](uxp-xmp-classes-2.md) | Metadata property descriptor. |
| [XMPFileInfo](uxp-xmp-classes.md) | File descriptor. |
| [XMPPacketInfo](uxp-xmp-classes-2.md) | Descriptor for a raw XMP packet in a file. |

For details about a class, including its properties and methods, consult that object's reference.

### Using the XMP scripting API

Use XMPMeta as the main route into the namespaces and properties inside an XMP metadata packet. With this object, scripts can create or delete namespaces and properties, inspect property values, and change those values.
Several routes can produce or retrieve an XMPMeta object:

To pull existing metadata straight from a file, use an XMPFile object. XMPFile.getXMP() creates an XMPMeta object for reviewing or changing properties and their values. After edits, XMPFile.putXMP() writes the updated metadata back into the file.

An XMP packet created or obtained somewhere else can initialize an XMPMeta object through the constructor.

The constructor can also create a new empty XMPMeta object. Its methods can then build wholly new namespaces and properties, and XMPFile.putXMP() can insert that new metadata into a file.

### Creating new metadata

Here, a new empty `XMPMeta` instance receives one metadata value and is then serialized as text; that string can be handed to authoring software or saved as a file.

```js
const { XMPMeta, XMPConst } = require("uxp").xmp;
let xmp = new XMPMeta();
xmp.setProperty(XMPConst.NS_XMP, "CreatorTool", "My Script");
let xmpStr = xmp.serialize(); // Serialize the XMP packet to XML

// Retrieve property
let prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
console.log(
  `namespace: ${prop.namespace}, property path + name: ${prop.path}, value: ${prop.value}`,
);
```

### Modifying existing metadata

The snippet starts from an XMP packet already held in `xmpStr`, updates `ModifyDate` with the current timestamp, then serializes the changed packet back into compact XML text.

```js
const { XMPMeta, XMPConst, XMPDateTime } = require("uxp").xmp;
let xmp = new XMPMeta(xmpStr); // Object initialized with xmp packet as string
let dateTime = new XMPDateTime(new Date()); // Now
let oldModificationDate = mp.getProperty(XMPConst.NS_XMP, "ModifyDate", "xmpdate");
console.log("Old modification date: " + oldModificationDate);
xmp.setProperty(XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate");

// Serialize to XML, in compact style
let xmpStr = xmp.serialize(XMPConst.SERIALIZE_USE_COMPACT_FORMAT);
```

### Using XMPFile for batch processing

This example walks a folder of image files and updates their metadata. For every picture, the script follows this sequence:

It reads and parses the metadata; when a file has no XMP block, legacy metadata is converted into XMP automatically.

It removes the current creator list, then appends a replacement creator value.

It saves the changed metadata back into the original file.

```js
console.log( "XMPFiles batch processing example" );
// Load the XMPScript library
const {XMPMeta, XMPConst, XMPFile} = require("uxp").xmp;

// Iterate through the photos in the folder
const uxpfs = require("uxp").storage;
const ufs = uxpfs.localFileSystem;
let folder = await ufs.getFolder({initialDomain: uxpfs.domains.userDocuments});
let files = await folder.getEntries();
files.forEach((file) => {
     console.log( "Process file: " + file.name );

     // Applies only to files, not to folders
     if ( file instanceof Entry ) {
         let xmpFile = new XMPFile( file.nativePath, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
         let xmp = xmpFile.getXMP();

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

## XMP

- [XMP Classes](uxp-xmp-classes.md)
- [getting-started](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/getting-started/index.md)
