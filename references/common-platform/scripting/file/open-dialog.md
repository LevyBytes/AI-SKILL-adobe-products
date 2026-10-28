# File.openDialog()

File.openDialog([prompt="", filter="", multiSelect=false])

### Description

Shows the platform's native file-browsing dialog so the user can choose one or more existing files, then creates File objects for those selections.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Optional. Prompt text, when the dialog supports a prompt. |
| filter | String or Function | Optional. Filter limiting which file types the dialog displays. In Windows, use a filter expression such as "JavaScript:_.jsx;All files:_.\*"<br><br>Tip<br><br>- Use semicolon (;) between expressions when one filter should include all listed types at once; (show jsx AND all)<br>- Use comma (,) between expressions to add separate choices to the filter dropdown, selecting one type at a time; (show jsx OR all)<br><br>In Mac OS, use a filter function that receives a File instance and returns true when that file should be displayed, or false when it should be excluded. |
| multiSelect | Boolean | Optional. When true, the user can select more than one file and the return value is an array. Default is false. |

### Returns

Returns one selected File, or an array of File Objects when the selection contains multiple files.

Returns null if the user cancels.
