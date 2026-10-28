# Property.alternateSource

app.project.item(index).layer(index).propertySpec.alternateSource

Note

This functionality was added in After Effects 18.0 (2021)

### Description

You will get null back in two situations:

- No alternate source has been assigned to the layer this property belongs to.
- The property itself isn't one that can carry an alternate source.

To find out whether a given property qualifies as a Media Replacement Essential Property, query Property.canSetAlternateSource.

Every Media Replacement Layer carries an alternate source item that is settable.

The "marking" of a layer for media replacement happens at the moment it gets pushed into the Essential Graphics Panel (see AVLayer.addToMotionGraphicsTemplate() or AVLayer.addToMotionGraphicsTemplateAs()).

- When one exists, rendering of that layer draws from the alternate source.
- Without an alternate source assigned, rendering falls back to the source layer of the Media Replacement control, which is the standard path.

Assign a new value through Property.setAlternateSource().

### Type

AVItem object; read-only.
