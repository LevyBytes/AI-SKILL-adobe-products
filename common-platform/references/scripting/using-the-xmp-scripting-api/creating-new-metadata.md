# Creating new metadata

The following code starts with an empty XMPMeta object, sets a metadata property, and serializes the packet to a string that could be given to an authoring tool or saved in a file.

```javascript
var xmp = new XMPMeta();
xmp.setProperty( XMPConst.NS_XMP, "CreatorTool", "My Script" );
var xmpStr = xmp.serialize(); // Serialize the XMP packet to XML

// Retrieve property
var prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
$.writeln( "namespace: " + prop.namespace + "\n" +
    "property path + name: " + prop.path + "\n" +
    "value: " + prop ); // same as prop.value
```
