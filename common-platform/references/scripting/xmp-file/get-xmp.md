# XMPFile.getXMP()

XMPFileObj.getXMP()

### Description

Gets the existing XMP metadata from this file and parses it. When the file format contains legacy metadata that the File Handler recognizes, the function builds an XMP packet from that metadata.

### Returns

An XMPMeta object, or null when the file has neither XMP nor convertible legacy metadata.
