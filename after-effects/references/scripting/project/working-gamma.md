# Project.workingGamma

app.project.workingGamma

### Description

Holds whichever working gamma the current project is using — the value is restricted to 2.2 or 2.4.

Assigning anything besides 2.2 or 2.4 throws a scripting error.

Tip

Once a color working space has been chosen for the project, After Effects disregards this gamma value.

### Type

2.2 or 2.4; read/write.

### Examples

- To set the working gamma to 2.4 (Rec. 709): app.project.workingGamma = 2.4;
- To get the current working gamma: var currentGamma = app.project.workingGamma;
