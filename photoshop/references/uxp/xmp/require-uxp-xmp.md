# require('uxp').xmp

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
| [XMPMeta](xmp-meta/reference-index.md) | Interface for reading, writing, and modifying XMP metadata obtained through host DOM APIs. |
| [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md) | Interface for working directly with XMP metadata in a file, without relying on the host to fetch XMP metadata contents. |
| [XMPUtils](xmp-utils/reference-index.md) | Helper functions for array handling. |
| [XMPDateTime](xmp-date-time/reference-index.md) | Date-time value representation. |
| [XMPConst](../xmp-xmp-const/reference-index.md) | Numeric and string constants used by the JavaScript API. |

Additional support classes are reachable from the top-level objects; they wrap individual metadata properties, file details, XMP packet details, and property iteration.
| Class | Description |
| --- | --- |
| [XMPIterator](../xmp-iterator/reference-index.md) | Iteration helper for properties contained in an XMPMeta object. |
| [XMPProperty](../xmp-property-xmp-property/reference-index.md) | Metadata property descriptor. |
| [XMPFileInfo](../xmp-file-info/reference-index.md) | File descriptor. |
| [XMPPacketInfo](../xmp-packet-info/reference-index.md) | Descriptor for a raw XMP packet in a file. |

For details about a class, including its properties and methods, consult that object's reference.
