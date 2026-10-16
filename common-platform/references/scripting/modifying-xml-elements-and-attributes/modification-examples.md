# Modification examples

In the sample XML, the third book includes several author elements. This statement replaces them all with one element that contains a new string:

```javascript
bookstoreXML.book[2].author = "Charles 'Lewis Carroll' Dodgeson";
```

The resulting XML is:

```xml
<book category="CHILDREN">
    <title lang="en">Alice's Adventures in Wonderland</title>
    <author>Charles 'Lewis Carroll' Dodgeson</author>
    <year>1865</year>
    <price>29.99</price>
</book>
```

To update only the first author while keeping the remaining authors:

```javascript
bookstoreXML.book[2].author[0] = "Charles Dodgeson, aka Lewis Carroll";
```

The next statement updates the element content in the second book. ExtendScript converts the numeric value into a string automatically:

```javascript
bookstoreXML.book[1].year = 1901;
```

This statement appends a new element to the second book:

> bookstoreXML.book[1].rating = "**\***";

The resulting XML is:

```xml
<book category="CHILDREN">
    <title lang="en">The Wonderful Wizard of Oz</title>
    <author>L. Frank Baum</author>
    <year>1900</year>
    <price>39.95</price>
    <rating>*****</rating>
</book>
```

This statement updates the category attribute value for the second book:

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
bookstoreXML.book[1].@category = "LITERATURE, FANTASY"
```

The resulting XML is:

```xml
<book category="LITERATURE, FANTASY">
<title lang="en">The Wonderful Wizard of Oz</title>
...
```
