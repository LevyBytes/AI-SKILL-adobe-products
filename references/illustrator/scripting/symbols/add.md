# Symbols.add()

app.activeDocument.symbols.add(sourceArt[, registrationPoint])

### Description

Creates and returns a symbol object from the supplied source art item, which can be any of these:

- CompoundPathItems
- GroupItems
- MeshItems
- NonNativeItems
- PageItems
- PathItems
- RasterItems
- SymbolItems
- TextFrameItems

SymbolRegistrationPoint.SYMBOLCENTERPOINT is used as the registration point when none is supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceArt | PageItem | Source art to create symbol from |
| registrationPoint | SymbolRegistrationPoint, optional | Registration point to use |

### Returns

Symbol
