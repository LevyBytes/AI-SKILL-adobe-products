# XMPFile.putXMP()

XMPFileObj.putXMP(xmpObj)

XMPFileObj.putXMP(xmpPacket)

XMPFileObj.putXMP(xmpOBuffer)

### Description

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta object | XMP metadata supplied as an XMPMeta object. |
| xmpPacket | String | XMP metadata supplied as a String containing an XMP packet. |
| xmpBuffer | Array of Numbers | XMP metadata supplied as an Array of Number with raw XMP packet data. |

Provides replacement XMP metadata for this file. No file write occurs until closeFile() runs. The options used when the file was opened control whether closeFile() reconciles the XMP with other metadata forms, including whether legacy metadata is updated to match the XMP metadata.

### Returns

Nothing
