# prompt()

Window.prompt(message, preset[, title="Script Prompt"]);

### Description

Displays a modal dialog and returns the text entered by the user.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | String used for the displayed message. |
| preset | String | Initial value shown in the text edit field. |
| title | String | Optional. String shown as the dialog title. On Windows, the title is displayed in the window frame; on Mac OS, it is placed above the message. The default title is "Script Prompt". |

### Returns

If the user clicked OK, this returns the text edit field value; if the user clicked Cancel, it returns null.
