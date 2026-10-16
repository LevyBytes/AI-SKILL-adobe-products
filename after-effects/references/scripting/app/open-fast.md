# app.openFast()

app.openFast(file)

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Loads a project quicker than app.open() does by bypassing certain checks.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | Project file to open. |

### Returns

A new Project object for the specified project.

### Example

```javascript
var projectFile = new File("someFile.aep");

$.hiresTimer;
app.openFast(projectFile);
var fastEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

$.hiresTimer;
app.open(projectFile);
var normalEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

alert( "The difference is " + parseInt(normalEnd-fastEnd) + " ms" +
        "\n\nFast: " + fastEnd + " ms" +
        "\nNormal:" + normalEnd + " ms" );
```
