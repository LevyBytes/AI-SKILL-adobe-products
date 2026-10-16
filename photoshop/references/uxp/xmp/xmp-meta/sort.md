# sort()

Alphabetical ordering is applied across the XMP contents. At the top level, namespace prefixes determine the namespace order.
Inside each namespace, top-level properties are ordered by name. Inside a struct, field ordering uses the qualified XML prefix:local name.
For unordered arrays containing simple items, values are sorted. Language alternative arrays are ordered by xml:lang qualifier, with "x-default" first.

**Example**

```js
XMPMetaObj.sort();
```
