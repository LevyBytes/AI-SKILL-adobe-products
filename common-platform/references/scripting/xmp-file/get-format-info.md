# XMPFile.getFormatInfo()

XMPFile.getFormatInfo(format)

### Description

Returns the supported capabilities for the specified file format.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| format | File format numeric constants | Format whose information is requested |

### Returns

A bitwise OR of bit-flag constants, or 0 when the format has no handler. Constants are:

- XMPConst.`HANDLER_CAN_INJECT_XMP` - Can add initial XMP to an existing file.
- XMPConst.`HANDLER_CAN_EXPAND` - Can enlarge existing-file XMP or other metadata.
- XMPConst.`HANDLER_CAN_REWRITE` - Can write new metadata while copying between files.
- XMPConst.`HANDLER_PPEFERS_IN_PLACE` - Expansion is supported, with in-place update preferred.
- XMPConst.`HANDLER_CAN_RECONCILE` - Can reconcile XMP with other forms.
- XMPConst.`HANDLER_ALLOWS_ONLY_XMP` - Can restrict access to XMP alone and skip other forms.
- XMPConst.`HANDLER_RETURNS_RAW_PACKETS` - File handler can return raw XMP packet details.
- XMPConst.`HANDLER_RETURNS_TNAIL` - File handler can return a native thumbnail.
- XMPConst.`HANDLER_OWNS_FILE` - File handler owns opening and closing the file.
- XMPConst.`HANDLER_ALLOWS_SAFE_UPDATE` - Crash-safe file updates are allowed by the file handler.
- XMPConst.`HANDLER_NEEDS_READONLY_PACKET` - The file format requires a read-only XMP packet.
- XMPConst.`HANDLER_USES_SIDECAR_XMP` - XMP is kept in a sidecar file by the file handler.
