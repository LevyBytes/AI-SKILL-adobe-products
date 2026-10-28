# XMPMeta.serialize()

XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])

### Description

Serializes this XMP metadata to an RDF string.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| options | Optional. Bitwise combination of these bit-flag constants: - XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - Omits the XML packet wrapper. - XMPConst.`SERIALIZE_READ_ONLY_PACKET` - Builds a read-only XML packet wrapper. - XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - Uses a very compact RDF syntax and layout. - XMPConst.`SERIALIZE_USE_PLAIN_XMP` - Serializes plain XMP (not currently supported). - XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - Adds normal JPEG-thumbnail padding space when xmp:Thumbnail is absent. - XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - Computes padding so the packet reaches the length supplied by the padding parameter. Throws an exception when the unpadded packet is longer than this value. - XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - Writes XML comments for aliases. | Options that determine serialization behavior. They must be logically consistent; conflicting choices cause an exception. |
| padding | Number | Optional. - With `SERIALIZE_EXACT_PACKET_LENGTH`, this gives the exact packet length, including padding characters added to reach it. - Without `SERIALIZE_EXACT_PACKET_LENGTH`, this gives the number of padding characters to add. - Default 0 uses the appropriate padding amount. |
| indent | String | Optional. Indentation string. Default is two spaces. |
| newline | String | Optional. Newline character. Default is U+000A. |
| baseIndent | Number | Optional. Base indentation for the top XML element; default 0. |

### Returns

String
