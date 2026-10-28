# setQualifier(schemaNS, propName, qualNS, qualName, qualValue, [options])

This method adds a qualifier onto a metadata property. Qualifiers may be placed on simple properties, array items, struct fields, and other qualifiers.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| propName | `string` |  | Name text for an existing property. A general path expression is allowed. |
| qualNS | `string` |  | URI for the qualifier namespace. URI and prefix handling match a schema namespace. |
| qualName | `string` |  | Qualifier name. It must be a simple XML name and uses prefixes the same way a property name does. |
| qualValue | `string` |  | New qualifier value text. Pass null for qualifiers with no value. |
| [options] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])`
