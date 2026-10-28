# FootageSource.guessPulldown()

app.project.item(index).mainSource.guessPulldown(method)

app.project.item(index).proxySource.guessPulldown(method)

### Description

Picks the most likely values for fieldSeparationType and removePulldown on this footage source. Nothing changes if isStill is true.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| method | PulldownMethod enum. | Which estimation approach to apply. One of: - PulldownMethod.`PULLDOWN_3_2` - PulldownMethod.`ADVANCE_24P` |

### Returns

Nothing.
