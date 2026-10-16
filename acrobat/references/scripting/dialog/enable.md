# enable

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Turns particular dialog box elements on or off based on the object literal handed in.

Most often you invoke enable from within the initialize method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you settle in advance which dialog box elements begin enabled.

Parameters

| Parameter | Description |
| --- | --- |
| object literal | Give every dialog box item you mean to change an entry in the object literal, keyed by its Dialog ItemID, whose value is a Boolean marking it enabled or not. |

Example: Refer to the worked code that accompanies app. execDialog.
