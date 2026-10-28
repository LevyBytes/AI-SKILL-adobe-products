# FontObject.hasSameDict()

app.fonts.fontsWithDefaultDesignAxes[0].hasSameDict(fontObject)

### Description

Comes back true when the Font object supplied as an argument draws on the same variable font dictionary as the Font object on which the call is made.

Tip

A true result is possible solely when the call targets a variable Font object and the supplied argument is likewise a Font object belonging to a variable font.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fontObject | Font object | Object to check |

### Returns

Boolean.
