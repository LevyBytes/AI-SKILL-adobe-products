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

```js
// Create an XMPMeta object using struct based APIs

let { XMPDateTime, XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();

let jsDate = new Date("2007-04-10T17:54:50+01:00");
let xmpDate = new XMPDateTime(jsDate);
meta.setProperty(XMPConst.NS_XMP, "CreateDate", xmpDate, XMPConst.XMPDATE);
meta.doesPropertyExist(XMPConst.NS_XMP, "CreateDate");
let prop = meta.getProperty(XMPConst.NS_XMP, "CreateDate", XMPConst.XMPDATE);
meta.deleteProperty(XMPConst.NS_XMP, "CreateDate");

meta.setStructField(
  XMPConst.NS_XML,
  "structNameSample",
  XMPConst.NS_XMP,
  "sampleFieldName",
  "sampleFieldValue",
);
if (
  meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")
) {
  prop = meta.getStructField(
    XMPConst.NS_XML,
    "structNameSample",
    XMPConst.NS_XMP,
    "sampleFieldName",
  );
  meta.deleteStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
  if (
    meta.doesStructFieldExist(
      XMPConst.NS_XML,
      "structNameSample",
      XMPConst.NS_XMP,
      "sampleFieldName",
    )
  ) {
    console.log("Struct field exists");
  } else {
    console.log("Struct field doesn't exist");
  }
} else {
  console.log("Struct field doesn't exist");
}
```
