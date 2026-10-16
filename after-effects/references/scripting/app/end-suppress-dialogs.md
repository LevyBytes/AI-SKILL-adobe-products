# app.endSuppressDialogs()

app.endSuppressDialogs(alert)

### Description

Stops holding back script error dialog boxes in the interface. Since error dialogs show by default, only invoke this once app.beginSuppressDialogs() has already run.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| alert | Boolean | When true, errors that have occurred following the call to beginSuppressDialogs() are displayed in a dialog box. |

### Returns

Nothing.
