# JavaScript APIs — XMLData

XMLData is a static object: it builds a JavaScript object that mirrors an XML document tree and lets you work with arbitrary XML documents through the XFA Data DOM. (XFA defines several more DOMs alongside the Data DOM, but the XMLData object touches the Data DOM alone.)

A PDF that reports true for the Doc dynamicXFAForm property may still use the XMLData object, yet that object cannot reach its form fields, since the two data DOMs stay walled off from one another.
