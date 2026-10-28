# Xmp Meta

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

XMPMeta
This class is the XMP Toolkit's core service surface. Its functions create and query metadata properties within an XMP namespace. Static functions on the class handle namespace and alias creation and queries.

A single static property supplies XMP version information; instances expose no JavaScript properties. Metadata properties are held inside the object and reached through its functions.

For broad property operations, use [getProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#getpropertyschemans-propname-valuetype), [setProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setpropertyschemans-propname-propvalue-setoptions-valuetype), and [deleteProperty()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#deletepropertyschemans-propname) with suitably composed path expressions. The object also includes narrower helpers for particular property kinds, including arrays.

**Since**: v7.2.0
