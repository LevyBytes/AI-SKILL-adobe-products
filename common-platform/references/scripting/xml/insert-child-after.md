# XML.insertChildAfter()

xmlObj.insertChildAfter(child1, child2);

### Description

Adds a new child element or text node to this node after an existing child element. When the relative child is absent from this node, the new child is not inserted.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| child1 | XML object | Existing child element after which child2 is placed, or null to put the new child at the start. |
| child2 | XML object | New child element, or any value convertible to a String through toString(). |

### Returns

This XML object.
