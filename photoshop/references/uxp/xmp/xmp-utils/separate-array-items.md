# require('uxp').xmp.XMPUtils - separateArrayItems(xmpObj, schemaNS, arrayName, [arrayOptions], concatString)

Parses the concatenated string returned by catenateArrayItems() and writes the resulting array item strings into the [XMPMeta object](../xmp-meta/reference-index.md).
It recognizes many separator characters, including semicolons, commas, tab, return, linefeed, and repeated spaces.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](../xmp-meta/reference-index.md) instance that holds the array. |
| schemaNS | `string` |  | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` |  | Array property name string. A general path expression is allowed, and every array item must be a simple string value. |
| [arrayOptions] | `number` | `0` | Bit flags controlling how the separated string updates the array property. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Drops the property if the incoming value has no content. - XMPConst.`SEPARATE_ALLOW_COMMAS`: Permits commas inside item values. Without it, a value containing a comma, such as "LastName, FirstName", becomes two separate array items. |
| concatString | `string` |  | Concatenated array-value string produced by catenateArrayItems(). |

**Example**

```js
XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString);
```
