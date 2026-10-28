# serialize([options], [padding], [indent], [newline], [baseIndent])

Converts this XMP metadata to an RDF string.

**Returns**: `string` - RDF string containing the serialized XMP metadata

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | Option bits controlling serialization. The combination must be logically valid; conflicting settings cause the function to throw an exception. Combine these constants with logical OR: XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - leave out the XML packet wrapper. XMPConst.`SERIALIZE_READ_ONLY_PACKET` - build an XML packet wrapper marked read-only. XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - choose a very compact RDF syntax and layout. XMPConst.`SERIALIZE_USE_PLAIN_XMP` - output plain XMP (not currently supported). XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - reserve normal JPEG-thumbnail space in padding when no xmp:Thumbnail property exists. XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - calculate padding so the final packet length matches the padding parameter. Throws an exception if the packet without padding is longer than the target length. XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - add XML comments for aliases. |
| [padding] | `number` | `0` | When options is `SERIALIZE_EXACT_PACKET_LENGTH`, this is the exact packet length, including added padding characters needed to reach that length. Otherwise, this value is the count of padding characters to add. Default is 0, which uses the appropriate padding amount. |
| [indent] | `string` | `"\"  \""` | String used for indentation. Default is two spaces. |
| [newline] | `string` | `"\"U+000A\""` | Newline character to emit. |
| [baseIndent] | `number` | `0` | Indentation level for the top-level XML element. |

**Example**

```js
XMPMetaObj.serialize([options, padding, indent, newline, baseIndent]);
```
