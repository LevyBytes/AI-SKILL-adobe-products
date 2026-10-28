# Property.valueAtTime()

app.project.item(index).layer(index).propertySpec.valueAtTime(time, preExpression)

### Description

Gives the named property's value evaluated at the time you supply. Be aware the returned value's type is left unstated; it varies with whichever property is being evaluated.

Tip

Beginning with After Effects 13.6, this method holds off until time-intensive expressions such as sampleImage have finished evaluating before handing back its result.

### Parameters
