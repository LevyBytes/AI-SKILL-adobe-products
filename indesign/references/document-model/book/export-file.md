# exportFile

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, BookContent **whichDocuments**, String **versionComments**, Boolean **forceSave** )
>
> Writes the book out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Selects the export format. Use either an enumeration value or an extension listed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Target file for the exported book. (Optional) |
| Boolean | showingOptions | Controls whether the PDF Export Options Dialog is displayed. (Optional) |
| PDFExportPreset | using | Supplies the export preset. The value can be a preset object, an enumeration for an existing or user-defined preset, or a string naming the preset. If Showing Options is true, the preset chosen in the Export Dialog overrides this parameter. (Optional) |
| BookContent | whichDocuments | Identifies book content references from the current book; duplicate entries may be included. When this list is omitted, the full book contents are exported. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |
