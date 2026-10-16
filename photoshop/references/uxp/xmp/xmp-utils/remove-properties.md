# require('uxp').xmp.XMPUtils — removeProperties(xmpObj, [schemaNS], [propName], [options])

Use this on an [XMPMeta object](../xmp-meta/reference-index.md) when deleting more than one property.

When schemaNS and propName are both provided, the property is deleted when it is external, including alias properties.

For internal properties, deletion occurs only when XMPConst.`REMOVE_ALL_PROPERTIES` is set.

With schemaNS alone, all external properties in that namespace are deleted,

and internal properties can also be included. Aliases are deleted only when XMPConst.`REMOVE_INCLUDE_ALIASES` is set.

With neither schemaNS nor propName supplied, all external properties are deleted, with optional removal of internal properties.

Alias handling follows automatically because removing the actual associated property covers the alias.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | [XMPMeta object](../xmp-meta/reference-index.md) instance to modify. |
| [schemaNS] | `string` |  | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). Required when a property name is supplied. |
| [propName] | `string` |  | Property name string. A general path expression is allowed. |
| [options] | `number` | `0` | Bit flags for the deletion behavior. Combine these constants with a logical OR: - XMPConst.`REMOVE_ALL_PROPERTIES`: Delete both internal and external properties; the default deletes external properties only. Applies only to top-level properties. - XMPConst.`REMOVE_INCLUDE_ALIASES`: Delete aliases defined in the namespace. When the property name is supplied, removal happens regardless of this option. |

**Example**

```js
XMPUtils.removeProperties(xmpObj, schemaNS, propName, options);
```
