# Modifying existing metadata

Here an existing XMP packet is loaded from a string variable. The code updates the `ModifyDate` property to the current date and time, then serializes the changed XMP packet back to the string with compact formatting.

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
