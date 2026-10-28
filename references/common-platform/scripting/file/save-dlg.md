# File.saveDlg()

fileObj.saveDlg([prompt=""][, preset=""])

### Description

Displays the built-in platform-specific file-browsing dialog so the user can choose an existing save location, then creates a new File object for that choice.

Unlike the class method saveDialog(), this object method starts in this File object's parent folder and uses the file associated with this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Optional. Prompt copy used when the dialog supports one. |
| filter | String or Function | Optional. Limits which file types appear in the dialog. On Windows, supply a filter expression such as "JavaScript:_.jsx;All files:_.\*"<br><br>Tip<br><br>- Use a semicolon (;) between expressions when all of those types should appear together; (show jsx AND all)<br>- Use a comma (,) to create separate filter-dropdown entries, picking one filter class per choice (show jsx OR all)<br><br>Not used in MacOS |

### Returns

Returns the File object that represents the chosen file.

Canceling the dialog returns null.
