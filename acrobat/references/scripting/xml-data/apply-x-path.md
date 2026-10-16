# XMLData.applyXPath

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Lets you query and reshape an XML document with XPath expressions. XPath itself is laid out in the W3C document XML Path Language (XPath), found at http://www.w3.org/TR/xpath .

An XPath expression resolves to one of four known types: Boolean, Number, String, Node-set. JavaScript hands these back, in order, as Boolean, Number, String, and Object.

Whenever an object comes back, its type is XFA object, standing for either a tree headed by one node or a tree headed by a node list (a tree list). That object shares the type that XMLData.parse returns.

Note

XFA has its own query mechanism, SOM expressions, comparable to XPath. Since XPath enjoys broad use across the XML community, the applyXPath method opens the door for users who would rather write XPath expressions.

Parameters

| Parameter | Description |
| --- | --- |
| oXml | An XFAObject object that stands for an XML document tree. - Should this parameter hold a nodeList XFA object rather than the root of an XML tree, an exception is raised. |
| cXPath | A string parameter carrying the XPATH query to run against the document tree. |

Returns

Boolean, Number, String, or XFAObject.

Related references:

- [Family XML data setup](family-xml-data-setup.md)
- [XPath nodes and attributes](xpath-nodes-and-attributes.md)
- [XPath child selection and strings](xpath-child-selection-and-strings.md)
- [XPath Boolean and income queries](xpath-booleans-and-income.md)
