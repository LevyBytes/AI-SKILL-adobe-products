# app.newProject()

app.newProject()

### Description

Builds a fresh After Effects project, mirroring the File > New > New Project menu command. Should the current project carry unsaved edits, the user gets a save prompt. If the user backs out of the Save dialog box, no new project gets made and the method returns null.

Close the current project first with app.project.close(CloseOptions.`DO_NOT_SAVE_CHANGES`) before you open a new one. See Project.close()

### Parameters

None.

### Returns

A new Project object, or null if no new project is created.

### Example

```javascript
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();
```
