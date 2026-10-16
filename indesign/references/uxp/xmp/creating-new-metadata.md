# Creating new metadata

The example starts with an empty XMPMeta object, sets one metadata property, and serializes the packet as a string that could be handed to an authoring tool or persisted elsewhere.

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
