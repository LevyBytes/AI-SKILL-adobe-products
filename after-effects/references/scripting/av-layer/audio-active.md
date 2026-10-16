# AVLayer.audioActive

app.project.item(index).layer(index).audioActive

### Description

Reads true when the layer's audio is live at the present time. That requires audioEnabled to be true, no other audio layer to be soloing (unless this layer is soloed as well), and the current time to fall between this layer's inPoint and outPoint.

### Type

Boolean; read-only.
