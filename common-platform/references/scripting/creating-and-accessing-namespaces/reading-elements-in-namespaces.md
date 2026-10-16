# Reading elements in namespaces

- Without a default namespace set, direct access works for elements that have no namespace specifier.
- After assigning a default, direct access resolves names there.

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
var ns = new Namespace ("http://kids.mybookstore.com");
bookstoreXML.ns::book;
```

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
var emptyNS = new Namespace ();
bookstoreXML.emptyNS::book;
```

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
bookstoreXML.*::book;
```

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
var nullNS = null;
bookstoreXML.nullNS::book;
```
