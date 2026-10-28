# Defining a namespace within the tree

Within an XML element, an xmlns attribute can define a namespace, and elements in the schema can then be assigned to that namespace. In this example, the additions to the XML attach the prefix "kids" to the namespace "http://kids.mybookstore.com", then mark one book element with that prefix:

```xml
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

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
var ns = new Namespace ("http://kids.mybookstore.com");
bookstoreXML.ns::book;
```
