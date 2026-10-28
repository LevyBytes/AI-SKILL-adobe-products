# Project.close()

app.project.close(closeOptions)

### Description

Shuts the project down; you can have changes saved automatically, have the user asked first, or discard them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| closeOptions | CloseOptions enum | Action to be performed on close. One of: - CloseOptions.`DO_NOT_SAVE_CHANGES`: Close without saving. - CloseOptions.`PROMPT_TO_SAVE_CHANGES`: Prompt for whether to save changes before close. - CloseOptions.`SAVE_CHANGES`: Save automatically on close. |

### Returns

Boolean. true on success. false if the file has not been previously saved, the user is prompted, and the user cancels the save.
