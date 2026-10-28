# CompItem.motionGraphicsTemplateName

app.project.item(index).motionGraphicsTemplateName

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Gets or sets the composition's name property shown in the Essential Graphics panel.

When you export a Motion Graphics template, that Essential Graphics panel name becomes the file's name (for instance, "My Template.mogrt").

In the example that follows, the active composition's name is assigned and then echoed back through an alert

```javascript
app.project.activeItem.motionGraphicsTemplateName = "My Template";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

### Type

String; read/write.
