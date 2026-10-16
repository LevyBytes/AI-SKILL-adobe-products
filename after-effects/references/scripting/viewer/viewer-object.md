# Viewer object

app.activeViewer

### Description

A Composition, Layer, or Footage panel is what the Viewer object stands for.

### Example

The following pushes the active viewer panel to its maximum size and, if a composition is loaded, reports its type.

```javascript
var activeViewer = app.activeViewer;
activeViewer.maximized = true;
if (activeViewer.type === ViewerType.VIEWER_COMPOSITION) {
    alert("Composition panel is active.");
}
```
