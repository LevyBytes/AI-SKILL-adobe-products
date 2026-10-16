# confirm()

confirm(message[,noAsDflt=false, title="Script Alert"]);

### Description

Displays the platform's standard confirmation dialog, with a brief message and choices labeled Yes and No.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| noAsDflt | Boolean | Optional. When true, the No button is the default choice, selected when the user types ENTER. Default is false, meaning that Yes is the default choice. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for confirmation dialogs. The default title string is "Script Alert". |

### Returns

Returns true when the user clicks Yes, and false when the user clicks No.

### Examples

This figure presents simple confirmation dialogs on Windows and Mac OS.

This figure presents confirmation dialogs where No is the default button.
