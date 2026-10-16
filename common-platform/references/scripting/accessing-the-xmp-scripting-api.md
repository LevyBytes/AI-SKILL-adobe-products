# Accessing the XMP scripting API

To work with XMP objects, load the XMP library as an ExtendScript ExternalObject. Use a guard like this so the library is not loaded more than once:

```javascript
// load the library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript");
}
```

Once the library is loaded, these primary XMP classes appear in the global JavaScript namespace:

| Object | Description |
| --- | --- |
| XMPMeta object | Supplies the core XMP Toolkit services. Lets scripts create and delete metadata properties, retrieve values, and modify those values. |
| XMPFile object | Supplies convenient I/O access to the main, document-level XMP for a file. Lets scripts retrieve existing file metadata, update it, and add new metadata. |

Other top-level objects provide array utilities, date-time handling, and constant definitions, including namespace constants. Those objects also expose support classes for individual metadata properties, file information, raw XMP packet information, and property iteration.

See XMPScript object reference for details about the classes, their properties, and their methods.
