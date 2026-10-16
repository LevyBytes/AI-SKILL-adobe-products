# Motion Graphics templates scripting access

By calling the scripting methods below, scripts can push properties into the Essential Graphics panel and turn out a Motion Graphics template:

- Property canAddToMotionGraphicsTemplate() method

```javascript
app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)
```

Checks whether the property is eligible to join the Essential Graphics panel for the named composition. The return is true when it can be added and false when it cannot. A property that can't be added is being refused either because its type isn't among the supported ones or because it's already in that composition. A warning dialog comes up from After Effects.

Supported property types:

- Checkbox
- Color
- Numerical Slider (a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)
- Source Text

Parameters:

| Parameter | Description |
| --- | --- |
| comp | A compItem — the composition into which you're trialing the property's addition. |

Returns: Boolean.

- Property addToMotionGraphicsTemplate() method

```javascript
app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)
```

Places the property into the Essential Graphics panel for the named composition. The return is true on a successful add and false otherwise. When the add fails, it's either because the property's type isn't supported or because the property is already part of that composition. A warning dialog will come up from After Effects. Run the canAddToMotionGraphicsTemplate() method first to confirm a property is eligible for a Motion Graphics template.

Parameters:

| Parameter | Description |
| --- | --- |
| comp | A compItem — the composition you're checking the property against for the add. |

Returns: Boolean.

- CompItem motionGraphicsTemplateName attribute

```javascript
app.project.item(index).motionGraphicsTemplateName
```

Gets or sets the name field shown in the composition's Essential Graphics panel. Whatever name appears there becomes the file name when a Motion Graphics template is exported — say, My Template.mogrt. In the sample below, the active composition's name is set and then echoed back through an alert:

```javascript
app.project.activeItem.motionGraphicsTemplateName = "My Template";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

Type: String; read/write.

- CompItem exportAsMotionGraphicsTemplate() method

```javascript
app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting, file_path)
```

Writes the composition out as a Motion Graphics template. The return is true once the template exports successfully and false otherwise. The file name of the template draws on the name held in the Essential Graphics panel — for instance, My Template.mogrt; set that name with the motionGraphicsTemplateName attribute. You may optionally hand it the path of the folder where the template should land. Leave the path off and the file drops into the current user's Essential Graphics folder:

- macOS: /Users//Library/Application Support/Adobe/Common/Essential Graphics/
- Windows: C:\Users\\AppData\Roaming\Adobe\Common\Essential Graphics\

Should the project carry unsaved edits since its last save, After Effects asks the user to save it first. Heading that off is a matter of calling the project save() method ahead of the template export.

Parameters:

| Parameter | Description |
| --- | --- |
| doOverWriteFileIfExisting | Whether to overwrite an exsiting file of the same name, boolean. Required. |
| file_path | Path to the folder where the file will be saved. Optional. |

Returns: Boolean.

- CompItem openInEssentialGraphics() method

```javascript
app.project.item(index).openInEssentialGraphics()
```
