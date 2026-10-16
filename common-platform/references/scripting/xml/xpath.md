# XML.xpath()

xmlObj.xpath(expression[, variables]);

### Description

Runs an XPath expression according to the W3C XPath recommendation, with this XML object serving as the context node. The context position and size are both 1, and variables begin unbound. For an XML list, each contained XML element node, excluding comments and other node types, is evaluated and the results are returned as a list in execution order.

If the XPath expression's result is not a node list, a JavaScript exception is thrown.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| expression | String | A String that contains an XPath expression.<br><br>Note<br><br>In this setting, include the real top-level element. For example, the sample XML expression must begin with "/bookstore". JavaScript property access differs because it treats the top-level element as implied. |
| variables | Object | Optional. A JavaScript object that supplies variable definitions. Its properties are used when XPath variables in the expression are resolved. For example, if expression contains $abc, the value comes from the object's abc property. |

### Returns

An XML object, the evaluation result.
