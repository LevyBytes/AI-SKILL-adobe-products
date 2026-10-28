# XML.insertChildBefore()

xmlObj.insertChildBefore(child1, child2);

### Description

Adds a new child element or text node to this node before an existing child element. If that relative element is not in this node, no insertion occurs.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| child1 | XML object. Existing child element before which child2 is placed, or null to append the new child at the end. |  |
| child2 | XML object. New child element, or any value convertible to a String through toString(). |  |

### Returns

This XML object.
