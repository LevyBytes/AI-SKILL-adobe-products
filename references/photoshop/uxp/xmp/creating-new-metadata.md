# Creating new metadata

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
