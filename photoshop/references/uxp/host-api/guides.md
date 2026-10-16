# Guides

Collection class that supports array-style access to guides in a document.

Reach this collection through the [Document.guides](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#guides) property. For example,
the next sample appends a guide:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```
