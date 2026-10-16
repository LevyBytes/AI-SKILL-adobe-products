# XMLData.parse

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Builds an object that mirrors an XML document tree. It takes the same parameters as the loadXML method of the XFA Data DOM.

What comes back is an XFA object standing for either a tree headed by one node or a tree headed by a node list (a tree list).

Parameters

| Parameter | Description |
| --- | --- |
| param1 | A string that holds the XML document. |
| param2 | (optional) A Boolean that says whether to skip the XML document's root node. It defaults to true; pass false and the root node is kept. |

Returns

XFAObject

Related references:

- [Parsing and editing family properties](parse-family-properties.md)
- [Parsing and appending XML nodes](parse-and-append-xml-nodes.md)
- [Inserting and removing root nodes](insert-and-remove-root-nodes.md)
- [Editing nested XML nodes](edit-nested-xml-nodes.md)
