# AVItem.footageMissing

app.project.item(index).footageMissing

### Description

A value of true signals that the AVItem is a placeholder or stands for footage whose source file cannot be located. When that happens, the absent source file's path lives in the missingFootagePath attribute on the footage item's source-file object. See FootageItem.mainSource and FileSource.missingFootagePath.

### Type

Boolean; read-only.
