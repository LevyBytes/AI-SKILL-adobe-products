# XMPMeta(packet, buffer)

Create an `XMPMeta` instance with `new`. Pass either an RDF/XML serialized metadata packet as a string or an array whose entries are byte values. The call produces the new object. With no argument, the object starts empty, and its functions can then add namespaces and properties.

| Param | Type | Description |
| --- | --- | --- |
| packet | `string` | Holds an XML file or XMP packet in a String. |
| buffer | `string` | Array of Number values containing UTF-8 or UTF-16 bytes for an XML file or XMP packet. XMPMeta.:ref:xmpmeta-serializeToArray produces this array. |

**Example**

```js
// Create an XMPMeta object using property based APIs

let { XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();
meta.setProperty(XMPConst.NS_XMP, "Name", "vkumarg");
let prop = meta.getProperty(XMPConst.NS_XMP, "Name");
console.log(prop.namespace);
console.log(prop.options);
console.log(prop.path);
// checking for the property existence and deleting it
if (meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
  meta.deleteProperty(XMPConst.NS_XMP, "Name");
}

if (!meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
  console.log("Property doesn't exist");
} else {
  console.log("Property exists");
}
```

**Example**

The complete program is in the [upstream source](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md).
