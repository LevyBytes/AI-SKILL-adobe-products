# The Xml, Accessing Xml Elements, Accessing Xml Attributes, Viewing Xml Objects ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: The XML; Accessing XML elements; Accessing XML attributes; Viewing XML objects; Modifying XML elements and attributes; Deleting elements and attributes; Retrieving contained elements; Creating and accessing namespaces; Mixing XML and JavaScript; XML lists; XML Object Reference; XML; XML Settings; XML Class Methods; XML Object Attributes.

## The XML

### The XML Object

Within an XML tree, an XML object corresponds to one XML element node. For an XML file, the highest-level XML object corresponds to the root node. The object behaves like a list, holding further XML objects for its element children. Those child XML objects can likewise contain XML objects for their own nested elements, continuing down the tree.

Child elements are exposed as properties on the XML object that represents the parent element. A property's name matches the element name. Each such property holds an array of XML objects, with one XML object for each element of that named type.

As a minimal example, use this XML code:

```
<rootElement>
    <elementA>
        <elementB></elementB>
    </elementA>
    <elementA>
        <elementB></elementB>
    </elementA>
</rootElement>
```

When JavaScript creates an XML object from that XML, the constructed object is the top node:

```
var myRoot = new XML( "<rootElement> <elementA> <elementB></elementB> </elementA> <elementA> <elementB></elementB> </elementA> </rootElement>");
```

An XML literal can also be assigned straight into a variable. This statement implicitly creates the XML object stored in the variable:

```
var myRoot = <rootElement>
    <elementA>
        <elementB></elementB>
    </elementA>
    <elementA>
        <elementB></elementB>
    </elementA>
</rootElement>;
```

The myRoot object has an elementA property containing two XML objects, one for each occurrence of that element. Each of those objects has an elementB property containing a single empty XML object:

```
var elemB1 = myRoot.elementA[0].elementB[0];
```

When XML contains an empty element, its matching property is still present and stores an empty XML object; the property is not null or undefined.

## Accessing XML elements

### The XML Object — Accessing XML elements

The examples in this chapter use the following sample XML:

```
<bookstore>
    <book category="COOKING">
        <title lang="en">The Boston Cooking-School Cookbook</title>
        <author>Fannie Merrit Farmer</author>
        <year>1896</year>
        <price>49.99</price>
    </book>
    <book category="CHILDREN">
        <title lang="en">The Wonderful Wizard of Oz</title>
        <author>L. Frank Baum</author>
        <year>1900</year>
        <price>39.95</price>
    </book>
    <book category="CHILDREN">
        <title lang="en">Alice's Adventures in Wonderland</title>
        <author>Charles "Lewis Carroll" Dodgeson</author>
        <author>Charles Dodgeson</author>
        <author>Lewis Carroll</author>
        <year>1865</year>
        <price>29.99</price>
    </book>
    <book category="MUSIC">
        <title lang="en">Gilbert and Sullivan Opera; A History and a Comment</title>
        <author>H. M. Walbrook</author>
        <year>1922</year>
        <price>30.00</price>
    </book>
</bookstore>
```

To wrap this markup in an XML object, turn it into a string and give that string to the constructor:

```
var bookXmlStr = "...";
var bookstoreXML = new XML (bookXmlStr);
```

In this example, the constructor returns an XML object for the root element <bookstore>. The XML object's book property provides access to every <book> element.

- bookstoreXML.book; returns the complete book list.
- bookstoreXML.book[0]; returns the first book's XML object.
- bookstoreXML.book[0].author; returns all authors attached to the first book.

For other element-access approaches within the tree, see Retrieving contained elements, and Creating and accessing namespaces.

## Accessing XML attributes

### The XML Object — Accessing XML attributes

Attributes belong to their parent element as properties. In ExtendScript, an attribute name is accessed with a leading at-sign (@). The attribute property is a one-element list containing an XML object for that attribute's value. For example:

```
bookstoreXML.book [0].@category;
```

This returns the category attribute from the first book; its value is the string "COOKING".

To collect category attributes from every book:

```
bookstoreXML.book.@category
```

A predicate can select elements whose attribute has a specified value, using this form:

```
element.(@attribute == value)
```

For instance, the following statement returns only book elements whose category attribute value is "CHILDREN":

```
bookstoreXML.book.(@category == "CHILDREN");
```

## Viewing XML objects

### The XML Object — Viewing XML objects

Like other ExtendScript objects, the XML object includes the ref:controlobj-toString method, which serializes its contents as a string. Here, the returned string includes the element's text content only, excluding its tags. For the element <x>text</x>, for instance, toString() returns "text".

When the object is evaluated in the JavaScript Console of the ExtendScript Toolkit, this method is invoked. The console reconstructs the XML text wrapped by the object. Evaluating bookstoreXML.book[1] in the Console therefore displays the XML text for that contained tree, with spaces and line feeds applied as formatting:

```
> bookstoreXML.book[1];
    <book category="CHILDREN">
        <title lang="en">The Wonderful Wizard of Oz</title>
        <author>L. Frank Baum</author>
        <year>1900</year>
        <price>39.95</price>
    </book>
```

Evaluating an object whose value is text displays that text value. For example:

```
> bookstoreXML.book[1].@category;
    CHILDREN
```

Accessing multiple values joins those values together:

```
> bookstoreXML.book.@category
    COOKINGCHILDRENCHILDRENMUSIC
```

The toXMLString() method serializes the complete element, tags included, into a string.

For example, with <x>text</x>, the method returns "<x>text</x>".

## Modifying XML elements and attributes

### The XML Object — Modifying XML elements and attributes

Assigning a value to the matching property changes an element.

- Assigning an XML element replaces the element. When more than one element of that type exists, the first one is replaced and the rest are removed.
- Assigning a non-XML value converts it to a string, then replaces the element's content with that string.
- If the XML has no element of that type, a new element is appended.

Attribute values can be changed with the same technique.

### Modification examples

In the sample XML, the third book includes several author elements. This statement replaces them all with one element that contains a new string:

```
bookstoreXML.book[2].author = "Charles 'Lewis Carroll' Dodgeson";
```

The resulting XML is:

```
<book category="CHILDREN">
    <title lang="en">Alice's Adventures in Wonderland</title>
    <author>Charles 'Lewis Carroll' Dodgeson</author>
    <year>1865</year>
    <price>29.99</price>
</book>
```

To update only the first author while keeping the remaining authors:

```
bookstoreXML.book[2].author[0] = "Charles Dodgeson, aka Lewis Carroll";
```

The next statement updates the element content in the second book. ExtendScript converts the numeric value into a string automatically:

```
bookstoreXML.book[1].year = 1901;
```

This statement appends a new element to the second book:

> bookstoreXML.book[1].rating = "**\***";

The resulting XML is:

```
<book category="CHILDREN">
    <title lang="en">The Wonderful Wizard of Oz</title>
    <author>L. Frank Baum</author>
    <year>1900</year>
    <price>39.95</price>
    <rating>*****</rating>
</book>
```

This statement updates the category attribute value for the second book:

```
bookstoreXML.book[1].@category = "LITERATURE, FANTASY"
```

The resulting XML is:

```
<book category="LITERATURE, FANTASY">
<title lang="en">The Wonderful Wizard of Oz</title>
...
```

## Deleting elements and attributes

### The XML Object — Deleting elements and attributes

Use the JavaScript delete operator on the matching property to remove an XML element or attribute. When multiple elements share the same name, you can remove them all or target one by index.

### Deletion examples

To remove every author entry from the third book:

```
delete bookstoreXML.book[2].author;
```

To remove only author index 1 from the third book:

```
delete bookstoreXML.book[2].author[1];
```

To remove the third book's category attribute:

```
delete bookstoreXML.book[2].@category;
```

## Retrieving contained elements

### The XML Object — Retrieving contained elements

Several XML object methods retrieve contained elements from different depths in the tree:

- XML.children() returns the direct child elements, including text elements.
- XML.elements() returns direct child elements that are XML tags, excluding text.

```
xml..title
xml.descendants("title")
```

For example, assume this XML has been assigned to the top-level object x:

```
<top>
    <one>one text</one>
    <two>
        two text
        <inside>inside text</inside>
    </two>
    top text
</top>
```

The calls return these outputs.

```
**> x.children()**
    <one>one text</one>
    <two>
    two text
    <inside>inside text</inside>
    </two>
    top text

**> x.children().length()**
    3
```

```
**> x.elements()**
    <one>one text</one>
    <two>
        two text
        <inside>inside text</inside>
    </two>
**> x.elements().length()**
    2
```

```
**> x.descendants()**
    <one>one text</one>
    one text
    <two>
        two text
        <inside>inside text</inside>
    </two>
    two text
    <inside>inside text</inside>
    inside text
    top text
**> x.descendants().length()**
    7
```

## Creating and accessing namespaces

### The XML Object — Creating and accessing namespaces

Simple access statements read elements from the default namespace. When elements must be defined across multiple namespaces, use a Namespace object for any elements outside the default namespace.

### Defining a namespace within the tree

Within an XML element, an xmlns attribute can define a namespace, and elements in the schema can then be assigned to that namespace. In this example, the additions to the XML attach the prefix "kids" to the namespace "http://kids.mybookstore.com", then mark one book element with that prefix:

```
<bookstore **xmlns:kids="http://kids.mybookstore.com"**>

<book category="COOKING">
    <title lang="en">The Boston Cooking-School Cookbook</title>
    <author>Fannie Merrit Farmer</author>
    <year>1896</year>
    <price>49.99</price>
</book>

<**kids:**book category="CHILDREN">
    <title lang="en">The Wonderful Wizard of Oz</title>
    <author>L. Frank Baum</author>
    <year>1900</year>
    <price>39.95</price>
</**kids:**book>
...
```

After this declaration, a bare bookstoreXML.book lookup omits "The Wonderful Wizard of Oz"; that entry now belongs to the kids namespace instead of the default one. Create a Namespace object for http://kids.mybookstore.com and use that object when selecting the element.

For example, create the Namespace object for the URI declared on the element, then query through it:

```
var ns = new Namespace ("http://kids.mybookstore.com");
bookstoreXML.ns::book;
```

### Choosing a default namespace

By default, the namespace URI is the empty string. A default namespace can be assigned so simple accessors resolve against it.

Set the default namespace with the global function setDefaultXMLNamespace(), or with this syntax:

```
default xml namespace = namespace_specifier;
```

Pass either a Namespace object or a URL string as the namespace specifier. Example:

```
default xml namespace = "http://books.mybookstore.com";
```

After the default namespace is set:

- Elements intended for the default namespace, and therefore reachable by simple accessors, have to use the namespace prefix.
- Elements without a particular namespace assignment belong to the empty namespace instead of the default namespace. To access them, use a Namespace object whose URI is the empty string.

### Reading elements in namespaces

- Without a default namespace set, direct access works for elements that have no namespace specifier.
- After assigning a default, direct access resolves names there.

```
var ns = new Namespace (**"http://kids.mybookstore.com"**);
bookstoreXML.**ns::book**;
```

```
var emptyNS = new Namespace ();
bookstoreXML.emptyNS::book;
```

```
bookstoreXML.*::book;
```

```
var nullNS = null;
bookstoreXML.nullNS::book;
```

## Mixing XML and JavaScript

### The XML Object — Mixing XML and JavaScript

JavaScript statements can be placed inside curly brackets and embedded in XML. During XML construction, the JavaScript portion is evaluated.

For example, this function returns an XML value where embedded JavaScript variables are resolved and inserted into the result:

```
function makeXML (first, last) {
    return <person first={first} last={last}>{first + " " + last}</person>;
}
```

Invoke it as follows:

```
makeXML ( "Jane", "Doe" );
```

produces this XML:

```
<person first="Jane" last="Doe">Jane Doe</person>
```

XML elements also support these operators:

- The plus operator, +, combines XML elements into a list.
- The == operator performs a deep comparison between two XML trees.

## XML lists

### The XML Object — XML lists

ExtendScript supplies XMLList, an object like XML except that it is constructed from an XML list and produces an XML list rather than an XML tag.

Every XML statement or function that gathers XML returns an XMLList, which may be empty when nothing matches. For example, this statement returns an empty list:

```
bookstoreXML.magazine;
```

## XML Object Reference

This reference section covers the XML object's own properties and methods, along with the utility objects and global functions used for namespace work:

- XML object
- Namespace object
- QName object
- Global functions

## XML

### XML Object Reference — XML Object

The XML class exposes static properties and functions, while each XML instance exposes dynamic properties and functions.

### XML object constructor

The constructor builds the XML object for a tree's root node and includes XML objects for elements nested inside it.

[new] XML (xmlCode);

Property

Type

Description

xmlCode

String or XML

Either valid XML code supplied as a string, or an XML object that already exists. - With a parsable string, the return value is a new XML object that wraps the code. If parsing fails, JavaScript throws an error. - With an existing object plus new, the return value is a copy; without new, the original object is returned.

| --- | --- | --- |

## XML Settings

### XML Object Reference — XML Settings

The XML class provides these static properties. They determine parsing and generation behavior for XML:

| Property | Type | Description |
| --- | --- | --- |
| ignoreComments | Boolean | When true, the parser discards XML comments. Default: false. |
| ignoreProcessingInstructions | Boolean | When true, the parser omits processing instructions (<?xxx?> elements). Default: false. |
| ignoreWhitespace | Boolean | When true, the parser discards white-space characters. Default: true. |
| prettyIndent | Number | Space count used as the pretty-print indent. Default: 2. |
| prettyPrinting | Boolean | When true, toXMLString() formats XML with indentation and line feeds. Default: true. |

## XML Class Methods

### XML Object Reference — XML Class Methods

The XML class exposes these static functions, which report or change global XML parser settings.

### XML.defaultSettings()

XML.defaultSettings();

### Description

Gets the default global option settings used for XML parsing and generation.

### Returns

Returns a JavaScript object whose five entries line up with XML Settings.

### XML.settings()

XML.settings();

### Description

Gets the current global option settings used for XML parsing and generation.

### Returns

Returns a JavaScript object whose five entries line up with XML Settings.

### XML.setSettings()

XML.setSettings(object);

### Description

Applies the global options used for XML parsing and generation. Use it to restore settings previously obtained from settings() or defaultSettings().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| object | Object | JavaScript object whose five entries line up with XML Settings |

### Returns

Nothing

## XML Object Attributes

### XML Object Reference — XML Object Attributes

XML object properties take their names and values from the child elements and attributes of the represented element.

### xmlObj.childElementName

xmlObj.childElementName

### Description

Each child-element property is keyed by that child's element name.

### Type

XML object

### xmlObj.@attributeName

xmlObj.@attributeName

### Description

An attribute property is keyed by the attribute name prefixed with @.

### Type

XML object
