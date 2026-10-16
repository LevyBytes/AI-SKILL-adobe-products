# Choosing a default namespace

By default, the namespace URI is the empty string. A default namespace can be assigned so simple accessors resolve against it.

Set the default namespace with the global function setDefaultXMLNamespace(), or with this syntax:

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
default xml namespace = namespace_specifier;
```

Pass either a Namespace object or a URL string as the namespace specifier. Example:

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
default xml namespace = "http://books.mybookstore.com";
```

After the default namespace is set:

- Elements intended for the default namespace, and therefore reachable by simple accessors, have to use the namespace prefix.
- Elements without a particular namespace assignment belong to the empty namespace instead of the default namespace. To access them, use a Namespace object whose URI is the empty string.
