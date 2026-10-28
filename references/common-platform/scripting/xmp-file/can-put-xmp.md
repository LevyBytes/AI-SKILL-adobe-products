# XMPFile.canPutXMP()

XMPFileObj.canPutXMP(xmpObj)

XMPFileObj.canPutXMP(xmpPacket)

XMPFileObj.canPutXMP(xmpBuffer)

### Description

Checks whether XMP metadata of the supplied size can be written back to this file. This matters especially when the packet grows.

Only the serialized packet length is considered; the supplied XMP is not retained. To update the XMP in the open file, call putXMP().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta object | XMP metadata to test |
| xmpPacket | String | String that contains an XMP packet. |
| xmpBuffer | Array of Number | Raw XMP packet data. |
