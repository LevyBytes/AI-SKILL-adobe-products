# XML.replace()

xmlObj.replace(name, value);

### Description

Substitutes one or more property values on this node.

When the named element is missing, the supplied value is appended as text content.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | An element or attribute name, optionally including a specific element's 0-based position, or the wildcard string "\*". - Without a position index, every matching element has its value replaced. - With the wildcard, all contained element values are replaced. If an element contains subelements, they are discarded and the replacement value is left alone. |
| value | XML object or any value that can be converted to a String with toString() | Replacement value |

### Returns

This XML object.
