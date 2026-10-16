# require('uxp').xmp.XMPUtils — catenateArrayItems(xmpObj, schemaNS, arrayName, [separator], [quotes =], [options])

Builds one string by joining a group of array item values. Pass the result to separateArrayItems() to split it back into array entries.

**Returns**: `string` - the joined string.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](../xmp-meta/reference-index.md) instance that holds the array. |
| schemaNS | `string` |  | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` |  | Array property name string. A general path expression is allowed, and every array item must be a simple string value. |
| [separator] | `string` | `";"` | Separator text placed between items in the result. By default this is '; ', an ASCII semicolon and space (U+003B,U+0020). |
| [quotes =] | `string` |  | For items containing separators, this quote character is used; default: '"', ASCII double quote (U+0022). |
| [options] | `number` | `0` | The concatenation behavior is controlled by this option flag: - XMPConst.`SEPARATE_ALLOW_COMMAS`: Permits commas inside item values, such as "LastName, FirstName". Use the same setting here and in [separateArrayItems()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md#separatearrayitemsxmpobj-schemans-arrayname-arrayoptions-concatstring) so the item list can be reconstructed correctly. |

**Example**

```js
XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options);
```
