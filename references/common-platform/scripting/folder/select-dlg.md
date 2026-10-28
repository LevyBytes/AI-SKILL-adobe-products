# Folder.selectDlg()

folderObj.selectDlg(prompt)

### Description

Opens the native file picker for the platform and creates a new File or Folder object for the chosen file or folder.

Unlike the class method selectDialog(), it starts with this folder preselected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Prompt copy used when the dialog supports one. |

### Returns

After OK, the result is a File or Folder object for the selected file or folder.

Canceling the dialog returns null.
