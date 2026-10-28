# XMPMeta.sort()

XMPMetaObj.sort()

### Description

Orders the XMP contents alphabetically.

- At the top level, namespaces are ordered by prefix.
- Inside a namespace, top-level properties are ordered by name.
- Inside a struct, fields are ordered by qualified name (the XML prefix:local form).
- Unordered arrays of simple items are ordered by value.
- Language alternative arrays use the xml:lang qualifiers for ordering, putting the "x-default" item first.

### Returns

Nothing
