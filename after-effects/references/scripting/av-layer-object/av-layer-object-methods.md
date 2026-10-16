# AVLayer object — Methods

- Layer.hasVideo should return true.
- AVLayer.adjustmentLayer should return false.
- Layer.nullLayer should return false.
- If the AVLayer.source is a FootageItem object, then FootageItem.FootageSource should not be a SolidSource object.
- If the AVLayer.source is a FootageItem object and the FootageItem.FootageSource is a FileSource object then that FileSource should not point to a non-media file e.g. a JSX script file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition where you wish to add the property to the EGP. |

### Returns

Boolean.
