# Encoder.setEmbeddedXMPEnabled()

app.encoder.setEmbeddedXMPEnabled(enabled)

### Description

Controls whether embedded XMP metadata is written.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| enabled | Integer | Use 1 to enable sidecar output, or 0 to disable it. |

### Returns

Returns 0 on success.

Note

Premiere Pro and Adobe Media Encoder write sidecar XMP for certain formats and embed XMP for most others.

This choice depends on many conditions, and the API does not provide a way to force sidecar or embedded output for formats that normally use the other approach.
