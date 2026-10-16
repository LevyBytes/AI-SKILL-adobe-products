# openFlags : `number`

**Read only**
Options used when opening this file are expressed with one of these constants:

                 - XMPConst.`OPEN_FOR_READ` - Opens the file with read-only access.

                 - XMPConst.`OPEN_FOR_UPDATE` - Opens the file for both reading and writing.

                 - XMPConst.`OPEN_ONLY_XMP` - Requests only the XMP, enabling space and time optimizations.

                 - XMPConst.`OPEN_STRICTLY` - Applies strict handling when finding XMP and reconciling with other forms.

                 - XMPConst.`OPEN_USE_SMART_HANDLER` - Requires a smart handler; packet scanning is not performed.

                 - XMPConst.`OPEN_USE_PACKET_SCANNING` - Forces packet scanning and skips the smart handler.

                 - XMPConst.`OPEN_LIMITED_SCANNING` - Packet-scans only files known to require scanning.
