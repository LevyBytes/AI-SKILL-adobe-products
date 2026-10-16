# prompt()

prompt(message, preset[, title="Script Alert"]);

### Description

Displays the platform's standard prompt dialog, with a brief message, a text edit field, and choices labeled OK and Cancel.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| preset | String | The initial value to be displayed in the text edit field. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for confirmation dialogs. The default title string is "Script Alert". |

### Returns

Returns the text edit field value when OK is clicked, or null when Cancel is clicked.

### Examples

This figure presents simple prompt dialogs on Windows and Mac OS.

This figure presents confirmation dialogs with a title value specified.
