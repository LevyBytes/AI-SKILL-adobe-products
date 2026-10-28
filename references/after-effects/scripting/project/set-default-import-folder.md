# Project.setDefaultImportFolder()

app.project.setDefaultImportFolder(folder)

### Description

Chooses which folder the file-import dialog opens to. That choice stays in force as an override until setDefaultImportFolder() runs with no arguments, or until After Effects is shut down.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| folder | Extendscript Folder | Folder to set as default |

### Returns

Boolean; indicates if the operation was successful.

### Examples

Each of the lines below points the default import folder at C:/My Folder:

```javascript
var myFolder = new Folder("C:/My Folder");
app.project.setDefaultImportFolder(myFolder);
```
- app.project.setDefaultImportFolder(new Folder("C:/My Folder"));
- app.project.setDefaultImportFolder(Folder("C:/My Folder"));

Note: should the path actually name an existing file rather than a folder, the Folder function yields a File object in place of a Folder object, and that makes setDefaultImportFolder() come back false.

To point the default import folder at the desktop of the logged-in user: app.project.setDefaultImportFolder(Folder.desktop);

To turn the default folder off, run setDefaultImportFolder() without any parameters: app.project.setDefaultImportFolder();
