# Project.renderQueue

```javascript
var usedList = app.project.usedFonts;
if (usedList.length) {
    var font = usedList[0].font;
    var usedAt = usedList[0].usedAt;

    var str = "[0]:" + font.postScriptName + "\n";
    for (var i = 0; i < usedAt.length; i++) {
        var layerID = usedAt[i].layerID;
        // valueAtTime() for Source Text property is expecting timed
        // to be in Layer Time instead of Comp Time, unlike any of
        // the other properties. So we have adjusted the name returned
        // by usedFonts to make this clear as we expect that is where
        // it will be used next.
        var layerTimeD = usedAt[i].layerTimeD;

        var layer = app.project.layerByID(layerID);
        str += "    Layer:'" + String(layer.property("Source Text").valueAtTime(layerTimeD, false)) + "'\n";
    }
    alert(str);
}
```

### Type

Array of Objects; read-only.
