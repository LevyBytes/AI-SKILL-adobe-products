# Property.dimensionsSeparated

app.project.item(index).layer(index).propertySpec.dimensionsSeparated

### Description

True here signals that the property has been split so each of its dimensions lives as its own property. Take a layer whose position shows up as separate X Position and Y Position entries in the Timeline panel: in that case the Position property reports this attribute as true.

Tip

Only when isSeparationLeader is true does this attribute have meaning.

### Type

Boolean; read/write.
