# The XML Object - Accessing XML elements

The examples in this chapter use the following sample XML:

```xml
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

```javascript
var bookXmlStr = "...";
var bookstoreXML = new XML (bookXmlStr);
```

In this example, the constructor returns an XML object for the root element &lt;bookstore&gt;. The XML object's book property provides access to every &lt;book&gt; element.

- bookstoreXML.book; returns the complete book list.
- bookstoreXML.book[0]; returns the first book's XML object.
- bookstoreXML.book[0].author; returns all authors attached to the first book.

For other element-access approaches within the tree, see Retrieving contained elements, and Creating and accessing namespaces.
