# Project.xmpPacket

app.project.xmpPacket

### Description

Contains the project's XMP metadata in RDF (an XML-based encoding). Consult the JavaScript Tools Guide for deeper coverage of XMP.

### Type

String; read/write.

### Example

In the snippet below, the script reaches the current project's XMP metadata and edits the Label field within it.

```javascript
var proj = app.project;

// load the XMPlibrary as an ExtendScript ExternalObject
if (ExternalObject.AdobeXMPScript === undefined){
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
var mdata = new XMPMeta(app.project.xmpPacket); //get the project's XMPmetadata
// update the Label project metadata's value
var schemaNS = XMPMeta.getNamespaceURI("xmp");
var propName = "xmp:Label";
try{
    mdata.setProperty(schemaNS, propName, "finalversion...no, really!");
} catch (e) {
    alert(e);
}

app.project.xmpPacket = mdata.serialize();
```
