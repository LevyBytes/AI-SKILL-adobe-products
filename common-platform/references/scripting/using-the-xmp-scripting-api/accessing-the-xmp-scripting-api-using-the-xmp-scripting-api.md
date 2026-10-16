# Accessing the XMP scripting API — Using the XMP scripting API

The XMPMeta object is the main access point for namespaces and properties in an XMP metadata packet. With it, scripts can create and remove namespaces and properties, inspect values, and change property values.

There are several ways to obtain or create an XMPMeta object:

- Use an XMPFile object to read existing metadata directly from a file. XMPFile.getXMP() creates an XMPMeta object that can be used to inspect or change properties and values. XMPFile.putXMP() can then write the changed metadata back to the file.
- Create an XMPMeta object with the constructor, initialized from an XMP packet created or acquired elsewhere.
- Create a new empty XMPMeta object with the constructor, then use its methods to build namespaces and properties from scratch. XMPFile.putXMP() can inject that new metadata into a file afterward.

In Adobe Bridge, serialized XMP lets the built-in Metadata object and the XMPScript XMPMeta object exchange XMP metadata.

```javascript
var thumb = new Thumbnail( new File( "/C/myImage.jpg") );
app.synchronousMode = true;

var xmp = new XMPMeta( thumb.metadata.serialize() );
```

```javascript
var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );
```

```javascript
// Create a compact XMP packet
var newPacket = xmp.serialize( XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_USE_COMPACT_FORMAT );
thumb.metadata = new Metadata( newPacket );
```

```javascript
var xmp = new XMPFile( thumb.spec.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
```

Note

XMPFile does not handle every file format supported by Adobe Bridge.
