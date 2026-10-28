# File.openDlg()

fileObj.openDlg([prompt=""][, filter=""][, multiSelect=false])

### Description

Displays the built-in platform-specific file-browsing dialog so the user can choose one or more existing files, then builds new File objects for those selections. Unlike the class method openDialog(), this object method starts in this File object's parent folder and preselects the file associated with this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Optional. Prompt copy used when the dialog supports one. |
| filter | String or Function | Optional. Limits which file types appear in the dialog. On Windows, supply a filter expression such as "JavaScript:_.jsx;All files:_.\*"<br><br>Tip<br><br>- Use a semicolon (;) between expressions when all of those types should appear together; (show jsx AND all)<br>- Use a comma (,) to create separate filter-dropdown entries, picking one filter class per choice (show jsx OR all)<br><br>On Mac OS, use a filter function that receives a File instance and returns true to show that file, or false to hide it. |
| multiSelect | Boolean. | Optional. Set to true to let the user pick multiple files; the method then returns an array. The default is false. |

### Returns

Choosing OK returns a File or Folder object for the selection, or an array of those objects.

Canceling the dialog returns null.
