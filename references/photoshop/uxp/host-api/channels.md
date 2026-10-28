# Channels

The `Channels` collection supports array-style access to document channels and retains ExtendScript-style helpers such as `getByName`.

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach((h) => console.log(h.name));
```

**_Fixes in Photoshop 24.6_**

- _Component channels now behave correctly in non-English localizations_
- _Bitmap and Indexed Color modes now return Channel objects correctly_
