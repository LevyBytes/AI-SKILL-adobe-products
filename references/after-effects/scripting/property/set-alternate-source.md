# Property.setAlternateSource()

app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Assigns the alternate source for this property.

For the action to succeed, both the Property object and the AVItem passed in for the call have to be Media Replacement compatible.

- Call AVItem.isMediaReplacementCompatible to verify the AVItem qualifies as an alternate source for Media Replacement.
- Call Property.canSetAlternateSource to verify the property permits Media Replacement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newSource | AVItem object | The new source AVItem. |

### Returns

Nothing.
