# CompItem.exportAsMotionGraphicsTemplate()

app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting[, file_path])

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Writes the composition out as a Motion Graphics template, returning true on a successful export and false otherwise.

The file name for the Motion Graphics template comes from the name in the Essential Graphics panel (for instance, "My Template.mogrt"). Set that name through the motionGraphicsTemplateName attribute.

You may also pass the folder path where the template file should land. Leave it out and the file goes into the current user's Motion Graphics Templates folder:

| OS | Path |
| --- | --- |
| macOS | /Users/&lt;name&gt;/Library/Application Support/Adobe/Common/Motion Graphics Templates/ |
| Windows | C:\Users&lt;name&gt;\AppData\Roaming\Adobe\Common\Motion Graphics Templates\ |

Where edits have occurred since the project was last saved, After Effects asks the user to save it. Call the project save() method ahead of the export to skip that prompt.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| doOverWriteFileIfExisting | Boolean | Whether to overwrite an existing file of the same name. |
| file_path | String | Optional. Path to the folder where the file will be saved. |

### Returns

Boolean.
