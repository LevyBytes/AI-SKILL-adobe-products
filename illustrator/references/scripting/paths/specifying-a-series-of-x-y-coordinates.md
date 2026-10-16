# Specifying a series of x-y coordinates

When defining a path from page-coordinate pairs, set the entire path property of the path items object. This script uses three x-y coordinate pairs to produce a three-point path:

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- set stroked to true so we can see the path
set lineRef to make new path item in docRef with properties {stroked:true}
set entire path of lineRef to { {220, 475},{200, 300},{375, 300} }
end tell
```

### Specifying a series of x-y coordinates

For a path described by page-coordinate pairs, call the setEntirePath() property on the pathItems object. This script supplies three x-y coordinate pairs and produces a three-point path:

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();
//set stroked to true so we can see the path
myLine.stroked = true;
myLine.setEntirePath([[220, 475], [375, 300], [200, 300]]);
```
