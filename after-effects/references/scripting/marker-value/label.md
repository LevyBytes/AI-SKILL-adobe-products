# MarkerValue.label

app.project.item(index).layer(index).property("Marker").keyValue(index).label

### Description

The marker's label color, applied to a composition or layer marker. Each color maps to a number — 0 means None, while 1 through 16 each pick one of the preset swatches defined under Labels preferences. There is no way to assign a custom label color through scripting.

Available in After Effects 16.0 or later.

### Type

Integer (0 to 16); read/write.

app.project.item(index).markerProperty.keyValue(index).protectedRegion

### Description

Reflects whether the Protected Region option is enabled in the Composition Marker dialog box. While true, the composition marker acts as a protected region. The value also comes back true for protected-region markers sitting on nested composition layers, though for ordinary layer markers it has no meaning.

Available in After Effects 16.0 or later.

### Type

Boolean; read/write.
