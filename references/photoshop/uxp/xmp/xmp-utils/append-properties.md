# require('uxp').xmp.XMPUtils - appendProperties(source, dest, [options])

Reads properties from `source` and appends them into `dest`; both are [XMPMeta object](../xmp-meta/reference-index.md) instances.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The [XMPMeta object](../xmp-meta/reference-index.md) used as the copy source. |
| dest | `XMPMeta` |  | The [XMPMeta object](../xmp-meta/reference-index.md) that receives the copied data. |
| [options] | `number` | `0` | Bit flags for the copy behavior. Combine these constants with a logical OR: - XMPConst.`APPEND_ALL_PROPERTIES`: Copies internal and external properties; the default limits copying to external properties. Only top-level properties are affected. - XMPConst.`APPEND_REPLACE_OLD_VALUES`: Existing properties take the source object's value instead of keeping their current value. Applies throughout the hierarchy. - XMPConst.`APPEND_DELETE_EMPTY_VALUES`: Removes a property when the incoming value is empty. |

**Example**

```js
XMPUtils.appendProperties(source, dest, options);
```
