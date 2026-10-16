# confirm()

Window.confirm(message[, noAsDflt=false, title="Script Alert"]);

### Description

Displays a platform-standard dialog that shows a brief message and the two buttons "Yes" and "No".

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | String used for the displayed message. |
| noAsDflt | Boolean | Optional. When true, the No button becomes the default selection when the user types ENTER. Default is false, so Yes is the default choice. |
| title | String | Optional. String shown as the dialog title when the platform supports titles. Confirmation dialogs on Mac OS do not support titles. The default title is "Script Alert" |

### Returns

Boolean. true when the user clicked "Yes"; false when the user clicked "No".
