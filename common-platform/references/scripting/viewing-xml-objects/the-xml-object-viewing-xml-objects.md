# The XML Object - Viewing XML objects

Like other ExtendScript objects, the XML object includes the ref:controlobj-toString method, which serializes its contents as a string. Here, the returned string includes the element's text content only, excluding its tags. For the element &lt;x&gt;text&lt;/x&gt;, for instance, toString() returns "text".

When the object is evaluated in the JavaScript Console of the ExtendScript Toolkit, this method is invoked. The console reconstructs the XML text wrapped by the object. Evaluating bookstoreXML.book[1] in the Console therefore displays the XML text for that contained tree, with spaces and line feeds applied as formatting:

```xml
> bookstoreXML.book[1];
    <book category="CHILDREN">
        <title lang="en">The Wonderful Wizard of Oz</title>
        <author>L. Frank Baum</author>
        <year>1900</year>
        <price>39.95</price>
    </book>
```

Evaluating an object whose value is text displays that text value. For example:

```xml
> bookstoreXML.book[1].@category;
    CHILDREN
```

Accessing multiple values joins those values together:

```xml
> bookstoreXML.book.@category
    COOKINGCHILDRENCHILDRENMUSIC
```

The toXMLString() method serializes the complete element, tags included, into a string.

For example, with &lt;x&gt;text&lt;/x&gt;, the method returns "&lt;x&gt;text&lt;/x&gt;".
