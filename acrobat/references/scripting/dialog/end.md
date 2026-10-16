# end

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Shuts down a dialog box that is currently running, just as though Cancel had been clicked. It accepts an optional ItemID parameter — a string — naming the dialog box element to be reported as the one that closed the dialog. That ItemID becomes the value returned by the app.execDialog call that opened the dialog.

Parameters

| Parameter | Description |
| --- | --- |
| String | (optional) Which dialog box element's ItemID gets reported as the one that closed the dialog. |

Example: Consult the sample code shown just after app. execDialog.
