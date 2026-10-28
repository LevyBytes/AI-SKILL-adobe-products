# Project.workingSpace

app.project.workingSpace

### Description

Carries, as a string, the color-profile description tied to the project's color working space. Assign an empty string to switch the working space off (None).

Call app.project.listColorProfiles() to obtain the list of color-profile descriptions you are allowed to assign as the working space.

### Type

String; read/write.

### Examples

- To set the working space to Rec.709 Gamma 2.4: app.project.workingSpace = "Rec.709 Gamma 2.4";
- To set the working space to None: app.project.workingSpace = "";
- To get the current working space: var currentSpace = app.project.workingSpace;
