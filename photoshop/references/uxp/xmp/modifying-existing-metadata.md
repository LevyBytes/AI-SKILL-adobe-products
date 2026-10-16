# Modifying existing metadata

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
