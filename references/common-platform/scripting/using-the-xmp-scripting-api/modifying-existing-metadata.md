# Modifying existing metadata

This code opens an existing XMP packet, assuming its location is already stored in a string variable. It updates the modification-date property to the current date and time, then stores the compacted updated XMP packet back into the string.

```javascript
var xmp = new XMPMeta( xmpStr ); // Object initialized with xmp packet as string
var dateTime = new XMPDateTime( new Date() ); // Now
var oldModificationDate = mp.getProperty( XMPConst.NS_XMP, "ModifyDate", "xmpdate" );

$.writeln( "Old modification date: " + oldModificationDate );
xmp.setProperty( XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate" );

// Serialize to XML, in compact style
var xmpStr = xmp.serialize( XMPConst.SERIALIZE_USE_COMPACT_FORMAT );
```
