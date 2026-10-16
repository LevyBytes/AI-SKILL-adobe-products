# Creating a path from straight lines

```javascript
// Create ten straight segments joining eleven points.
if (app.documents.length > 0) {
    var lineList = [];
    for (var i = 0; i <= 10; i++) {
        var distance = i - 5;
        lineList.push([i * 10 + 50, distance * distance * 5 + 50]);
    }
    var newPath = app.activeDocument.pathItems.add();
    newPath.stroked = true;
    newPath.closed = false;
    newPath.setEntirePath(lineList);
}
```
