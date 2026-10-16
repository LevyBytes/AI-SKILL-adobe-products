# The XML Object — XML lists

ExtendScript supplies XMLList, an object like XML except that it is constructed from an XML list and produces an XML list rather than an XML tag.

Every XML statement or function that gathers XML returns an XMLList, which may be empty when nothing matches. For example, this statement returns an empty list:

```javascript
bookstoreXML.magazine;
```
