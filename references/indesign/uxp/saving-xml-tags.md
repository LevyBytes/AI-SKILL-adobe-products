# Saving XML tags

The same kind of external-file workflow works in reverse for XML tags. Saving tags writes only the tag definitions into the XML file, without document content; compared with exporting XML, that makes the operation faster and the output file smaller. SaveXMLTags contains the complete script, and this sample line shows the call:

```js
//You'll have to fill in a valid file path for your system.
myDocument.saveXMLTags(filePath);
```
