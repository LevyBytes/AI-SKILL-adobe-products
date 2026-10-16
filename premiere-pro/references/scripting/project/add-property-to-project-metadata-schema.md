# Project.addPropertyToProjectMetadataSchema()

app.project.addPropertyToProjectMetadataSchema(propertyName, propertyLabel, propertyType)

### Description

Creates a field in Premiere Pro's private project metadata schema, using propertyType for its type.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| propertyName | String | Name of the property to add. |
| propertyLabel | String | Label for the property to add. |
| propertyType | Integer | Must be one of these values: - 0 - Integer - 1 - Real - 2 - String - 3 - Boolean |

### Returns

Returns true on success, undefined on failure.
