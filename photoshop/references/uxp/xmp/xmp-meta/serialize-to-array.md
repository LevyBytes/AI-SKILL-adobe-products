# serializeToArray([options], [padding], [indent], [newline], [baseIndent])

This call writes the XMP metadata out as RDF text, then returns that content as one-byte numeric array entries for the UTF-8 or UTF-16 encoded characters.

**Returns**: `Array` - an Array whose entries are Numbers.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | Bit flags that choose the serialization behavior. The selected flags must form a logical combination; incompatible choices make the function throw an exception. Combine these constants with logical OR: XMPConst.`SERIALIZE_OMIT_PACKET_WRAPPER` - Leave out the XML packet wrapper. XMPConst.`SERIALIZE_READ_ONLY_PACKET` - Build an XML packet wrapper marked read-only. XMPConst.`SERIALIZE_USE_COMPACT_FORMAT` - Write RDF with a very compact syntax and layout. XMPConst.`SERIALIZE_USE_PLAIN_XMP` - Write plain XMP (not currently supported). XMPConst.`SERIALIZE_INCLUDE_THUMBNAIL_PAD` - When no xmp:Thumbnail property exists, reserve the usual JPEG-thumbnail room inside the padding. XMPConst.`SERIALIZE_EXACT_PACKET_LENGTH` - Calculate padding so the packet reaches the total length supplied by the padding parameter. If the unpadded packet is longer than that length, an exception is thrown. XMPConst.`SERIALIZE_WRITE_ALIAS_COMMENTS` - Add XML comments for aliases. |
| [padding] | `number` | `0` | With `SERIALIZE_EXACT_PACKET_LENGTH` in [options], this supplies the precise packet length, counting the padding characters inserted to reach it. Without `SERIALIZE_EXACT_PACKET_LENGTH`, it is the count of padding characters to append. `0` asks the serializer to choose the suitable padding amount. |
| [indent] | `string` | `"\"  \""` | Indentation text for each level. The default value is two spaces. |
| [newline] | `string` | `"\"U+000A\""` | Character sequence used for line breaks. |
| [baseIndent] | `number` | `0` | Indentation depth for the XML element at the root. |

**Example**

```js
XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent]);
```
