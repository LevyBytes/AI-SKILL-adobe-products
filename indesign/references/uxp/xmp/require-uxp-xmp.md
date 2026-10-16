# require('uxp').xmp

**Since**: v7.2.0

Adobe XMP (Extensible Metadata Platform) defines a metadata standard from Adobe. It lets digital files carry descriptive, rights, and other metadata.
Because it is extensible, XMP can represent many information categories and custom schemas. Adobe software and third-party applications can work against the same model, which supports interoperability.
The model uses open standards, XML syntax, and RDF. This helps files become easier to search, organize, and govern for rights workflows. In short, XMP supports consistent metadata handling for digital assets.
For additional XMP metadata details, reference [XMP Specification at Adobe Developer Center](https://www.adobe.com/devnet/xmp.html).

Within UXP, the XMP module exposes JavaScript bindings for the Adobe XMP Core and XMP Files libraries.
Import the XMP module before working with XMP objects.

```js
const xmp = require("uxp").xmp;
```

Once the module is imported, the top-level objects of the XMP scripting API are available.
| Class | Description |
| --- | --- |
| [XMPMeta](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md) | Interface for reading, writing, and changing XMP metadata obtained from host DOM APIs. |
| [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md) | Interface for direct file-based XMP metadata access instead of relying on a host to supply the packet contents. |
| [XMPUtils](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md) | Utility functions that help with array handling. |
| [XMPDateTime](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-date-time.md) | Date-time value representation. |
| [XMPConst](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-const.md) | Numeric and string constants used by the JavaScript API. |

Additional support classes are reachable from the top-level objects: property wrappers, file descriptors, XMP packet descriptors, and iteration support for properties.
| Class | Description |
| --- | --- |
| [XMPIterator](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-iterator.md) | Iterates through properties in an XMPMeta object. |
| [XMPProperty](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-property.md) | Metadata-property descriptor. |
| [XMPFileInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file-info.md) | File descriptor. |
| [XMPPacketInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-packet-info.md) | Raw XMP-packet descriptor for a file. |

Consult the object references for each class's properties and methods.
