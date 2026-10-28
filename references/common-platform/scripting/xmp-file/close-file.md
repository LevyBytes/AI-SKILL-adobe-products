# XMPFile.closeFile()

XMPFileObj.closeFile(closeFlags)

### Description

Closes the open file and writes changes when required, such as after update-mode opening with changed or injected XMP. The open-time options control whether this function also reconciles XMP with other metadata forms, so legacy metadata can be brought into agreement with XMP.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| closeFlags | Closing flag constant, or 0. One of: - XMPConst.`CLOSE_UPDATE_SAFELY` - Writes to a temporary file first and then swaps it in for crash safety. | Flags used during close. |

### Returns

Nothing
