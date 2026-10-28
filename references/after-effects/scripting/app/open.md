# app.open()

app.open()

app.open(file)

### Description

Opens a project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | Optional. Project file to open. If not supplied, the method prompts the user to select a project file. |

### Returns

A new Project object for the specified project, or null if the user cancels the Open dialog box.

### Example

```javascript
var my_file = new File("../my_folder/my_test.aep");
if (my_file.exists) {
    var new_project = app.open(my_file);
    if (new_project) {
        alert(new_project.file.name);
    }
}
```
