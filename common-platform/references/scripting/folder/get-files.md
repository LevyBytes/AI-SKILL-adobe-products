# Folder.getFiles()

folderObj.getFiles([mask])

### Description

Gets this folder's contents, applying the supplied mask as a filter.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mask | String or Function | Optional. Search mask for file names. A string may include question mark (?) and asterisk (_) wild cards. The default is "_", matching all file names. The value may also be the name of a function that accepts a File or Folder object. The function is called for each file or folder found during the search; returning true adds that object to the returned array.<br><br>Note<br><br>On Windows, aliases always use the .lnk extension; ExtendScript removes that extension from the file name when it is found to preserve compatibility with other operating systems. Supplying the search mask "\*.lnk" finds all aliases, but code that depends on that mask is not portable. |

### Returns

Returns an array containing File and Folder objects, or null when this object's referenced folder is absent.
