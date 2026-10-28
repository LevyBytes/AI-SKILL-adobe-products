# XMPFile object constructors

new XMPFile(filePath, format, openFlags)

| Property | Type | Description |
| --- | --- | --- |
| filePath | String | File path |
| format | File format numeric constant | Format used when creating the object. |
| openFlags | Constant. One of: - XMPConst.`OPEN_FOR_READ` - Opens with read-only access. - XMPConst.`OPEN_FOR_UPDATE` - Opens for both reading and writing. - XMPConst.`OPEN_ONLY_XMP` - Requests only XMP, enabling space and time optimizations. - XMPConst.`OPEN_STRICTLY` - Uses strict handling for XMP discovery and reconciliation with other forms. - XMPConst.`OPEN_USE_SMART_HANDLER` - Requires a smart handler; packet scanning is not performed. - XMPConst.`OPEN_USE_PACKET_SCANNING` - Forces packet scanning and bypasses smart handlers. - XMPConst.`OPEN_LIMITED_SCANNING` - Packet-scans only file types known to require scanning. | File open options. |
