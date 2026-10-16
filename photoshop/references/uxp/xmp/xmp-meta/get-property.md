# getProperty(schemaNS, propName, [valueType])

Reads a metadata property's value together with its options. Use it for top-level simple properties, or after composing paths with functions on the [XMPUtils object](../xmp-utils/reference-index.md).
The result is [XMPProperty](../../xmp-property-xmp-property/reference-index.md).

**Returns**: `XMPProperty` \| `undefined` - metadata property value and options

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` |  | String name for the property; a general path expression is allowed. |
| [valueType] | `string` | `"\"\""` | Data type for the property, selected from: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE for typed reads. |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.getProperty(schemaNS, propName[, valueType])`
