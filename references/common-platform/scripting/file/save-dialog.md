# File.saveDialog()

File.saveDialog(prompt[, preset=""])

### Description

Shows the platform's native file-browsing dialog so the user can choose where information should be saved, then creates a new File object for that location.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | A string containing prompt text, when the dialog supports a prompt. |
| filter | String or Function | Optional. Windows only. Filter limiting which file types the dialog displays. A filter expression, such as "JavaScript:_.jsx;All files:_.\*"<br><br>Tip<br><br>- Use semicolon (;) between expressions when one filter should include all listed types at once; (show jsx AND all)<br>- Use comma (,) between expressions to add separate choices to the filter dropdown, selecting one type at a time; (show jsx OR all) |

### Returns

Returns a File for the selected file location.

Returns null if the user cancels.
