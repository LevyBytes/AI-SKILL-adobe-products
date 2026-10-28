# ImportOptions.canImportAs()

importOptions.canImportAs(type)

### Description

Tells you whether the file is eligible to be imported as the source of a given object type. A true result means you are clear to assign that type to the importAs attribute.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | ImportAsType enum. | The type of file that can be imported. One of: - ImportAsType.COMP - ImportAsType.FOOTAGE - ImportAsType.`COMP_CROPPED_LAYERS` - ImportAsType.PROJECT |

### Returns

Boolean.

### Example

```javascript
var io = new ImportOptions(new File("c:\\myFile.psd"));
if (io.canImportAs(ImportAsType.COMP)) {
    io.importAs = ImportAsType.COMP;
}
```
