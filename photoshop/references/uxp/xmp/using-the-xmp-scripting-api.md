# Using the XMP scripting API

Use XMPMeta as the main route into the namespaces and properties inside an XMP metadata packet. With this object, scripts can create or delete namespaces and properties, inspect property values, and change those values.
Several routes can produce or retrieve an XMPMeta object:

To pull existing metadata straight from a file, use an XMPFile object. XMPFile.getXMP() creates an XMPMeta object for reviewing or changing properties and their values. After edits, XMPFile.putXMP() writes the updated metadata back into the file.

An XMP packet created or obtained somewhere else can initialize an XMPMeta object through the constructor.

The constructor can also create a new empty XMPMeta object. Its methods can then build wholly new namespaces and properties, and XMPFile.putXMP() can insert that new metadata into a file.
