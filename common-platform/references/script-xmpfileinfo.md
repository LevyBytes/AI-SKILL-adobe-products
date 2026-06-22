# Xmpfileinfo, Xmpiterator

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMPFileInfo; XMPIterator.

## XMPFileInfo

### XMPScript object reference — XMPFileInfo object

XMPFile.getFileInfo returns this object. Its read-only properties describe the file associated with the XMPFile object.

Note

This object is separate from the XMP File Info dialog that Adobe Creative Suite 4 applications use for metadata display.

### XMPFileInfo object properties

Property

Type

Description

filePath

String

Absolute file path expressed with JavaScript notation.

format

Number

A file-format constant. See File format numeric constants.

handlerFlags

Number

Capabilities available for this format, expressed as a bitwise OR of these bit-flag constants: - XMPConst.`HANDLER_CAN_INJECT_XMP` - Can add initial XMP to an existing file. - XMPConst.`HANDLER_CAN_EXPAND` - Can enlarge existing-file XMP or other metadata. - XMPConst.`HANDLER_CAN_REWRITE` - Can write new metadata while copying between files. - XMPConst.`HANDLER_PPEFERS_IN_PLACE` - Expansion is supported, with in-place update preferred. - XMPConst.`HANDLER_CAN_RECONCILE` - Can reconcile XMP with other forms. - XMPConst.`HANDLER_ALLOWS_ONLY_XMP` - Can restrict access to XMP alone and skip other forms. - XMPConst.`HANDLER_RETURNS_RAW_PACKETS` - File handler can return raw XMP packet details. - XMPConst.`HANDLER_RETURNS_TNAIL` - File handler can return a native thumbnail. - XMPConst.`HANDLER_OWNS_FILE` - File handler owns opening and closing the file. - XMPConst.`HANDLER_ALLOWS_SAFE_UPDATE` - Crash-safe file updates are allowed by the file handler.

openFlags

Number

Options used when this file was opened. One of these constants: - XMPConst.`OPEN_FOR_READ` - Opens with read-only access. - XMPConst.`OPEN_FOR_UPDATE` - Opens for both reading and writing. - XMPConst.`OPEN_ONLY_XMP` - Requests only XMP, enabling space and time optimizations. - XMPConst.`OPEN_STRICTLY` - Uses strict handling for XMP discovery and reconciliation with other forms. - XMPConst.`OPEN_USE_SMART_HANDLER` - Requires a smart handler; packet scanning is not performed. - XMPConst.`OPEN_USE_PACKET_SCANNING` - Forces packet scanning and bypasses smart handlers. - XMPConst.`OPEN_LIMITED_SCANNING` - Packet-scans only file types known to require scanning.

| --- | --- | --- |

## XMPIterator

### XMPScript object reference — XMPIterator object

Created by calling XMPMeta.iterator. It traverses an XMPMeta object's properties and qualifiers recursively; each item returned is XMPProperty object.

There are no JavaScript properties on this object.

### XMPIterator object functions

### XMPIterator.next()

XMPIteratorObj.next()

### Description

Gets the next metadata item.

### Returns

An XMPProperty object, or null when no further items remain.

### XMPIterator.skipSiblings()

XMPIteratorObj.skipSiblings()

### Description

On the next call to next(), skips both the subtree below the current node and that node's siblings.

### Returns

Nothing

### XMPIterator.skipSubtree()

XMPIteratorObj.skipSubtree()

### Description

On the next call to next(), skips the subtree below the current node.

### Returns

Nothing
