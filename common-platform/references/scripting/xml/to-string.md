# XML.toString()

xmlObj.toString();

### Description

Builds a string form of this object.

- For text and attribute nodes, the result is the node's textual value.
- For other elements, the result comes from toXMLString().
- For an XML list, the output concatenates the function result for each contained element.

### Returns

String
