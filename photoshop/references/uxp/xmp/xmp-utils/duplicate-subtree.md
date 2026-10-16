# require('uxp').xmp.XMPUtils — duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, [destRoot], [options])

Copies the requested subtree from `source` into `dest`; both parameters are [XMPMeta object](../xmp-meta/reference-index.md) instances.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The [XMPMeta object](../xmp-meta/reference-index.md) used as the copy source. |
| dest | `XMPMeta` |  | The [XMPMeta object](../xmp-meta/reference-index.md) that receives the copied subtree. |
| sourceNS | `string` |  | Source namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| sourceRoot | `string` |  | Property name string for the source subtree root. A general path expression is allowed. |
| destNS | `string` |  | Destination namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| [destRoot] | `string` |  | Property name string for the destination subtree root. A general path expression is allowed. Defaults to the source root location. |
| [options] | `number` | `0` | Bit flags for the copy behavior. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Drops the property if the incoming value has no content. |

**Example**

```js
XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options);
```
