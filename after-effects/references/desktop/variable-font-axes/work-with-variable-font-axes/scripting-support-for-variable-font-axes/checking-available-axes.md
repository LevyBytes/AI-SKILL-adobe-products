# Checking Available Axes

```javascript
function getAvailableAxes(textLayer) {
    var sourceText = textLayer.property("Source Text");
    var textDoc = sourceText.value;
    var fontObj = textDoc.fontObject;

    if (!fontObj || !fontObj.designAxesData) {
        return [];
    }

    var axisInfo = [];
    for (var i = 0; i < fontObj.designAxesData.length; i++) {
        var axis = fontObj.designAxesData[i];
        axisInfo.push({
            name: axis.name,
            tag: axis.tag,
            min: axis.minValue,
            max: axis.maxValue,
            default: axis.defaultValue
        });
    }

    return axisInfo;
}
```
