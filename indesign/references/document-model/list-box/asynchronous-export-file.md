# asynchronousExportFile

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Sends the object(s) to a file through an asynchronous export.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as either an enum value or a filename extension listed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text stored with this version. (Optional) |
| Boolean | forceSave | True forces version saving. (Optional) |
