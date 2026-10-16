# PropertyBase.active

app.project.item(index).layer(index).active

app.project.item(index).layer(index).propertySpec.active

### Description

On a layer, this tracks the eyeball icon's state. A true value means the layer's video is live at the current moment, which requires several conditions at once: the layer is enabled, no competing layer is soloing (or, if one is, this layer is soloed as well), and the current time sits between this layer's inPoint and outPoint.

An audio layer never reports true here; the AVLayer object carries its own audioActive attribute for that purpose — see AVLayer.audioActive.

Where effects and any properties are concerned, this matches the enabled attribute but cannot be written to.

### Type

Boolean; read-only.
