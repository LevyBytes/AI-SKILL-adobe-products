# XML.appendChild()

xmlObj.appendChild(child);

### Description

Adds a child element as the final child of this node, following any children already present. When the argument is not XML, a new XML element is created with that string as its text value and with the same element name used by the last element currently held inside the node represented by this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| child | XML object, or any value that can be converted to a String with toString() | Child element to place at the end |

### Returns

This XML object.
