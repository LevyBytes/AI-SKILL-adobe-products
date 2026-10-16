# The XML Object — Accessing XML attributes

Attributes belong to their parent element as properties. In ExtendScript, an attribute name is accessed with a leading at-sign (@). The attribute property is a one-element list containing an XML object for that attribute's value. For example:

```xml
bookstoreXML.book [0].@category;
```

This returns the category attribute from the first book; its value is the string "COOKING".

To collect category attributes from every book:

```xml
bookstoreXML.book.@category
```

A predicate can select elements whose attribute has a specified value, using this form:

```xml
element.(@attribute == value)
```

For instance, the following statement returns only book elements whose category attribute value is "CHILDREN":

```xml
bookstoreXML.book.(@category == "CHILDREN");
```
