# setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue, [options])

Use this method to assign a value to a field inside a structure-type property. If that field is missing, the call creates it; if the structure itself is missing, the call creates the structure and the named field.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| structName | `string` |  | Name text for an existing structure. A general path expression is allowed. |
| fieldNS | `string` |  | Namespace text for the field type. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| fieldName | `string` |  | Field name text. It must be a simple XML name. |
| fieldValue | `string` |  | New field value text. Pass null for fields with no value. |
| [options] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])`
