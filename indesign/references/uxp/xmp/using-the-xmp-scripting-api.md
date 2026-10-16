# Using the XMP scripting API

Use XMPMeta as the main entry point for namespaces and properties in an XMP metadata packet. It can create or remove namespaces and properties, inspect values, and update values.
Several routes can produce an XMPMeta object:

An XMPFile object can pull current metadata straight from a file. XMPFile.getXMP() constructs an XMPMeta object for reading or editing property values, and XMPFile.putXMP() writes the changed metadata to the file.

Another route is the XMPMeta constructor, seeded with an XMP packet that was created or obtained elsewhere.

You can also call the constructor with no packet, then use the new XMPMeta object's methods to build namespaces and properties from scratch. XMPFile.putXMP() can then insert that metadata into a file.
