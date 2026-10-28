# alert()

alert(message[, title="Script Alert", errorIcon=false]);

### Description

Displays the platform's standard alert dialog, with OK as its only button and a brief message.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for alert dialogs. The default title string is "Script Alert". |
| errorIcon | Boolean | Optional. When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Default is false. |

### Returns

Returns nothing

### Examples

This figure presents simple alert dialogs on Windows and Mac OS.

This figure presents alert dialogs that use error icons.
