# XMPMeta object constructors

Create an XMPMeta object with the new operator. The constructor can take an RDF/XML serialized metadata packet either as a string or as an array of numbers containing byte values only, and it returns the new object. Without an argument, the new object starts empty; use its functions to add namespaces and properties.

At first construction, the library performs standard namespace and alias registration:

```javascript
new XMPMeta ( ); // creates an empty object
new XMPMeta ( packet );
new XMPMeta ( buffer );
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| packet | String | XML file or XMP packet. |
| buffer | Array of Numbers | Bytes encoded as UTF-8 or UTF-16 from an XML file or XMP packet. This array comes from XMPMeta.serializeToArray. |
