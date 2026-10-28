# ViewOptions object

app.activeViewer.views[0].options

### Description

For a given View object, its options are what the ViewOptions object holds

### Example

The following switches on checkerboards and locks the guides for one view

```javascript
var activeViewer = app.activeViewer;
var viewOptions = activeViewer.views[0].options;
viewOptions.checkerboards = true;
viewOptions.guidesLocked = true;
```
