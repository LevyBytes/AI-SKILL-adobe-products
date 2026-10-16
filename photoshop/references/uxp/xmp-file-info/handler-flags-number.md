# handlerFlags : `number`

**Read only**
Supported capabilities for this format are represented as a logical OR of these bit-flag constants:

                 - XMPConst.`HANDLER_CAN_INJECT_XMP` - Inserts initial XMP into a file that already exists.

                 - XMPConst.`HANDLER_CAN_EXPAND` - Enlarges XMP or other metadata in an existing file.

                 - XMPConst.`HANDLER_CAN_REWRITE` - Writes updated metadata by copying one file into another.

                 - XMPConst.`HANDLER_PPEFERS_IN_PLACE` - Expands data while preferring an in-place update.

                 - XMPConst.`HANDLER_CAN_RECONCILE` - Handles reconciliation between XMP and other forms.

                 - XMPConst.`HANDLER_ALLOWS_ONLY_XMP` - Permits access only to the XMP while ignoring other forms.

                 - XMPConst.`HANDLER_RETURNS_RAW_PACKETS` - Returns raw XMP packet information from the file handler.

                 - XMPConst.`HANDLER_RETURNS_TNAIL` - Returns a native thumbnail from the file handler.

                 - XMPConst.`HANDLER_OWNS_FILE` - Makes the file handler perform file open and close operations.

                 - XMPConst.`HANDLER_ALLOWS_SAFE_UPDATE` - Allows crash-safe file updates through the file handler.
