# Xml Object Methods, Global Functions, Qname, Qname Object Attributes ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XML Object Methods; Global functions; QName; QName Object Attributes; Namespace; Namespace Object Attributes; Scripting Access to XMP Metadata; Accessing the XMP scripting API.

## XML Object Methods

### XML Object Reference — XML Object Methods

### XML.addNamespace()

xmlObj.addNamespace(ns);

### Description

Adds a namespace declaration on this node.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ns | Namespace object | Namespace declaration that should be added |

### Returns

This XML object.

### XML.appendChild()

xmlObj.appendChild(child);

### Description

Adds a child element as the final child of this node, following any children already present. When the argument is not XML, a new XML element is created with that string as its text value and with the same element name used by the last element currently held inside the node represented by this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| child | XML object, or any value that can be converted to a String with toString() | Child element to place at the end |

### Returns

This XML object.

### XML.attributes()

xmlObj.attributes(name);

### Description

Gets the attribute elements in this node whose name matches the requested attribute.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Attribute name. |

### Returns

An XML object that contains every value for the named attribute.

### XML.child()

xmlObj.child(which);

### Description

Gets child elements of this node that match the requested type.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| which | String or Number | Element name, or a Number used as a 0-based child-array position for this node. |

### Returns

An XML object with all child elements for the requested type.

### XML.childIndex()

xmlObj.childIndex ();

### Description

Gets this node's 0-based position within its parent node.

### Returns

Number

### XML.children()

xmlObj.children();

### Description

Gets every immediate child of this node, including text elements.

### Returns

An XML object that contains the child elements.

### XML.comments()

xmlObj.comments();

### Description

Gets the XML comment elements stored on this node.

### Returns

An XML object that contains the comments.

### XML.contains()

xmlObj.contains(element);

### Description

Checks whether element appears anywhere inside this node's nested XML tree.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| element | XML object | Element being tested |

### Returns

Boolean. true when this XML tree contains the element.

### XML.copy()

xmlObj.copy();

### Description

Builds a duplicate node.

### Returns

The copied XML object.

### XML.descendants()

xmlObj.descendants([name]);

### Description

Gets descendant elements for the requested element type, or every XML-valued descendant at any nesting level. Text elements are included.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Optional. Element name to match; when omitted, all elements match. |

### Returns

An XML object with properties for each descendant element.

### XML.elements()

xmlObj.elements(name);

### Description

Gets immediate child elements of this node for the requested type, or for every type. Text elements are excluded.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Optional. Element name to match; when omitted, all elements match. |

### Returns

An XML object with properties for each child element.

### XML.hasComplexContent()

xmlObj.hasComplexContent();

### Description

Indicates whether this node has complex content, meaning that child elements are present. Other content kinds are ignored, including attributes, comments, processing instructions, and text nodes.

### Returns

Boolean. true when this node contains child elements.

### XML.hasSimpleContent()

xmlObj.hasSimpleContent();

### Description

Indicates whether this node has simple content: a text node, an attribute node, or an element that has no child elements, even if attributes, comments, processing instructions, or text are also present.

Objects representing comments and processing instructions are not considered simple content.

### Returns

Boolean. true when this node contains no child elements.

### XML.inScopeNamespaces()

xmlObj.inScopeNamespaces();

### Description

Gets the currently valid namespace list for this element.

### Returns

An Array of Namespace object, with the default namespace as the final member.

### XML.insertChildAfter()

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

### XML.insertChildBefore()

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

### XML.length()

xmlObj.length();

### Description

Reports how many child elements this node contains. The count is at least 1, representing the element for this object.

### Returns

Number

### XML.localName()

xmlObj.localName();

### Description

Gets this element's local name, meaning the element name with no namespace prefix.

### Returns

String

### XML.name()

xmlObj.name();

### Description

Gets this element's complete name, including namespace information.

### Returns

A QName object that carries the element name and namespace URI.

### XML.namespace()

xmlObj.namespace();

### Description

Gets this element's namespace URI.

### Returns

String

### XML.nodeKind()

xmlObj.nodeKind();

### Description

Reports this node's kind.

### Returns

A String, one of:

- element
- attribute
- comment
- processing-instruction
- text

### XML.namespaceDeclarations()

xmlObj.namespaceDeclarations();

### Description

Gets every namespace declaration stored on this node.

### Returns

An Array of Namespace object.

### XML.normalize()

xmlObj.normalize();

### Description

Normalizes text nodes in this XML object and all descendant XML objects by joining adjacent text nodes and removing empty text nodes.

### Returns

This XML object.

### XML.parent()

xmlObj.parent();

### Description

Gets this node's parent node.

### Returns

An XML object, or null when this node is the root element.

### XML.prependChild()

xmlObj.prependChild(child);

### Description

Places a child element before all current children of this node. Prepending a string to a text element yields two text elements; use normalize() to join them into one text string.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| child | XML object or String | Child element to place at the front |

### Returns

This XML object.

### XML.processingInstructions()

xmlObj.processingInstructions ([name]);

### Description

A String for the processing-instruction name, or null when all processing instructions are requested.

Gets processing instructions stored within this node.

### Returns

An XML object with the processing-instruction children of this object, filtered by name when supplied.

### XML.replace()

xmlObj.replace(name, value);

### Description

Substitutes one or more property values on this node.

When the named element is missing, the supplied value is appended as text content.

### Parameters

Parameter

Type

Description

name

String

An element or attribute name, optionally including a specific element's 0-based position, or the wildcard string "\*". - Without a position index, every matching element has its value replaced. - With the wildcard, all contained element values are replaced. If an element contains subelements, they are discarded and the replacement value is left alone.

value

XML object or any value that can be converted to a String with toString()

Replacement value

| --- | --- | --- |

### Returns

This XML object.

### XML.setChildren()

xmlObj.setChildren(value);

### Description

Replaces every XML-valued property in this object with a new value, which may be simple text or may carry a nested XML property set.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| value | XML object or any value that can be converted to a String with toString(). | Replacement value |

### Returns

This XML object.

### XML.setLocalName()

xmlObj.setLocalName(name);

### Description

Changes this object's local name, meaning the element name after removing any namespace prefix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Replacement name. |

### Returns

This XML object.

### XML.setName()

xmlObj.setName(name);

### Description

Changes this object's full name, including both the element name and the prefix for its namespace.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Replacement name. |

### Returns

This XML object.

### XML.setNamespace()

xmlObj.setNamespace(ns);

### Description

Applies ns as this XML element's namespace. When that namespace is not already declared above this element in the tree, create a namespace declaration rather than setting it directly.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ns | Namespace object | Namespace already declared above this element in the tree. |

### Returns

This XML object.

### XML.text()

xmlObj.text();

### Description

Gets text nodes from this element.

An XML object containing every property of this object that represents an XML text node.

### XML.toString()

xmlObj.toString();

### Description

Builds a string form of this object.

- For text and attribute nodes, the result is the node's textual value.
- For other elements, the result comes from toXMLString().
- For an XML list, the output concatenates the function result for each contained element.

### Returns

String

### XML.toXMLString()

xmlObj.toXMLString();

### Description

Builds an XML-encoded string form of this XML object.

The output includes the XML object's start tag, attributes, and end tag regardless of content. Formatting follows the global XML.prettyPrinting and XML.prettyIndent settings.

### Returns

String

### XML.xpath()

xmlObj.xpath(expression[, variables]);

### Description

Runs an XPath expression according to the W3C XPath recommendation, with this XML object serving as the context node. The context position and size are both 1, and variables begin unbound. For an XML list, each contained XML element node, excluding comments and other node types, is evaluated and the results are returned as a list in execution order.

If the XPath expression's result is not a node list, a JavaScript exception is thrown.

### Parameters

Parameter

Type

Description

expression

String

A String that contains an XPath expression.

Note

In this setting, include the real top-level element. For example, the sample XML expression must begin with "/bookstore". JavaScript property access differs because it treats the top-level element as implied.

variables

Object

Optional. A JavaScript object that supplies variable definitions. Its properties are used when XPath variables in the expression are resolved. For example, if expression contains $abc, the value comes from the object's abc property.

| --- | --- | --- |

### Returns

An XML object, the evaluation result.

## Global functions

### XML Object Reference — Global functions

These functions are JavaScript globals.

### isXMLName()

isXMLName(String name)

### Description

Reports whether a string is a name that follows valid XML syntax.

Note

This implementation follows JavaScript name rules, with '$' disallowed and '-' added as an allowed character.

It is not based on the W3C XML-name definition, which includes additional Unicode characters in the valid character set.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to test as an XML Name |

### Returns

Boolean. true when the name is a valid XML name; otherwise false.

### setDefaultXMLNamespace()

setDefaultXMLNamespace(Namespace ns)

### Description

Sets the default namespace used for XML objects. These forms can set the same default:

```
default xml namespace = Namespace object
default xml namespace = URL_string
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ns | Namespace object | Object to use as the default. Any prefix is ignored. |

### Returns

Nothing

## QName

### XML Object Reference — QName Object

This object represents a fully qualified XML name, combining a local XML name with its namespace URI.

### QName object constructor

The constructor accepts several forms:

```
new QName ()
new QName (name)
new QName (ns)
new QName (uri, name)
```

Calling it without arguments produces a QName object whose local name is empty and whose URI is absent.

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Creates a QName object using the supplied local name and the default namespace URI. The wildcard character "\*" is allowed. |
| name | QName | Duplicates an existing QName object. |
| ns | Namespace | Builds a QName object whose local name is empty and whose URI comes from the Namespace object. |
| uri, name | String | Creates a QName object with the supplied namespace URI and local name. If the local name is the wildcard character "\*", uri is ignored and the URI value comes from the default namespace. |

## QName Object Attributes

### XML Object Reference — QName Object Attributes

### QName.name

QName.name

### Description

Within a fully qualified XML name for an XML element, this value is the local element-name component.

### Type

String

### QName.uri

QName.uri

### Description

Within a fully qualified XML name for an XML element, this value is the namespace-prefix component.

### Type

String

## Namespace

### XML Object Reference — Namespace object

This object represents an XML namespace definition. A namespace links an XML-name prefix to a full URI. The prefix is the string before an XML element or attribute's local name and identifies the namespace; the URI indicates where the namespace definition is located.

For example, this XML definition includes a namespace declaration:

```
<?xml xmlns:adobe=http://www.adobe.com/test?>
```

For that namespace, adobe is the prefix and http://www.adobe.com/test is the URI.

### Namespace object constructor

The Namespace constructor accepts several forms:

```
new Namespace()
new Namespace (String uri)
new Namespace (QName prefix)
new Namespace (Namespace ns)
new Namespace (String prefix, String uri)
```

With no argument, it creates a namespace whose prefix and URI are both empty.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | Builds a Namespace object with no prefix and the supplied URI. |
| prefix | QName | Builds a namespace with no prefix; if the QName object has a URI, that URI is used. |
| ns | Namespace | Creates a copy of the supplied Namespace object. If Namespace() is called without new and the sole argument is a Namespace object, that same object is returned instead of a copy. |
| prefix, uri | String | Creates a Namespace object with the supplied prefix and URI. |

## Namespace Object Attributes

### XML Object Reference — Namespace Object Attributes

### Namespace.prefix

namespace.prefix

### Description

The element-name prefix linked to the namespace URI. The prefix can be undefined, such as when the specified prefix is not a valid XML name.

Namespaces whose prefix is undefined are ignored completely and do not become part of XML namespace declarations.

### Type

String

### Namespace.uri

namespace.uri

### Description

The URI where the namespace definition is located.

### Type

String

## Scripting Access to XMP Metadata

XMPScript, the XMP ExtendScript API, gives JavaScript scripts access to the Adobe XMP Core and XMP Files libraries. This chapter documents the JavaScript objects used with XMP, including their properties and methods.

This chapter does not attempt to explain XMP metadata technology in full. For deeper detail about XMP metadata, consult the XMP Specification at Adobe Developer Center.

Adobe Bridge CS5 includes the XMP library in its libraries folder. Scripts need to load that library at run time before using the API; Adobe Bridge does not load it automatically at startup. The XMPScript API is separate from the Adobe Bridge DOM. It can be used on its own to read and write metadata in supported formats, or alongside the Adobe Bridge API to change metadata reached through the Adobe Bridge DOM's Thumbnail object.

Note

Adobe Bridge can place script-file metadata inside a script by wrapping XML in special tags within a comment block. That mechanism is separate from file and thumbnail metadata access. See the Adobe Bridge JavaScript Guide for details.

## Accessing the XMP scripting API

To work with XMP objects, load the XMP library as an ExtendScript ExternalObject. Use a guard like this so the library is not loaded more than once:

```
// load the library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript");
}
```

Once the library is loaded, these primary XMP classes appear in the global JavaScript namespace:

| Object | Description |
| --- | --- |
| XMPMeta object | Supplies the core XMP Toolkit services. Lets scripts create and delete metadata properties, retrieve values, and modify those values. |
| XMPFile object | Supplies convenient I/O access to the main, document-level XMP for a file. Lets scripts retrieve existing file metadata, update it, and add new metadata. |

Other top-level objects provide array utilities, date-time handling, and constant definitions, including namespace constants. Those objects also expose support classes for individual metadata properties, file information, raw XMP packet information, and property iteration.

See XMPScript object reference for details about the classes, their properties, and their methods.
