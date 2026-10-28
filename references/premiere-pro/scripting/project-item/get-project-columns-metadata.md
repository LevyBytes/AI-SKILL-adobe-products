# ProjectItem.getProjectColumnsMetadata()

app.project.rootItem.children[index].getProjectColumnsMetadata()

### Description

Provides project view layout metadata as JSON text.

### Parameters

None.

### Returns

JSON text parseable by JSON.parse() in the Javascript layer.

This produces objects in a list, one object per column. Each object contains 4 key/value pairs: ColumnName, ColumnValue, ColumnID, ColumnPath.

- ColumnName and ColumnValue are informational key/value fields.
- ColumnID and ColumnPath identify the column for updates through setProjectMetadata() or setXMPMetadata().

For example:

| Key | Value | Description |
| --- | --- | --- |
| ColumnName | "Name" | Column display name |
| ColumnValue | "`A014C003_180620_R205`.mov" | Example column value |
| ColumnID | "Column.Intrinsic.Name" | Column ID |
| ColumnPath | "http://ns.adobe.com/premierePrivateProjectMetaData/1.0/" | Column path |
