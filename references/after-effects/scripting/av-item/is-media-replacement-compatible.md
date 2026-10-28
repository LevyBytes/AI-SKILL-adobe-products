# AVItem.isMediaReplacementCompatible

app.project.item(index).isMediaReplacementCompatible

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Checks whether the AVItem qualifies as an alternate source for a Property.setAlternateSource() call.

Comes back true when the item qualifies, and false otherwise.

A layer's alternate source may be either a CompItem or a FootageItem, though a handful of limits apply:

- When the AVItem is a FootageItem object, its FootageItem.FootageSource must not be a SolidSource object.
- When the AVItem is a FootageItem object whose FootageItem.FootageSource is a FileSource object, that FileSource must not reference a non-media file such as a JSX script file.
- Assigning the AVItem must not introduce a cyclical reference anywhere in the project.

### Type

Boolean; read only.
