# Property.getSeparationFollower()

app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)

### Description

On a separated multidimensional property, fetches one particular follower property. You might, for instance, call this on Position to reach its separated X Position and Y Position properties

Tip

Only when isSeparationLeader is true does this attribute have meaning.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| dim | Integer | The dimension number (starting at 0). |

### Returns

Property object, or an error if the property is not multidimensional or does not have the specified dimension.
