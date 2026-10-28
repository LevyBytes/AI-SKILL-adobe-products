# XMPUtils.removeProperties()

XMPUtils.removeProperties(xmpObj, schemaNS, propName, options)

### Description

Removes multiple properties from an XMPMeta object.

When both the namespace and property name are given, the property is removed if it is external, including aliases. Internal properties are removed only when XMPConst.`REMOVE_ALL_PROPERTIES` is specified.

When a namespace is given without a property name, all external properties in that namespace are removed, with internal properties optional. Aliases are removed only when XMPConst.`REMOVE_INCLUDE_ALIASES` is specified.

When neither namespace nor property name is given, all external properties are removed, and internal properties can be included. Aliases need no special handling because their associated actual property is removed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta Object | Object from which properties are removed |
| schemaNS |  | Schema namespace string constants. Optional. Namespace URI string. Required when a property name is supplied. |
| propName | String | Optional. Property name string. A general path expression is allowed. |
| options | Combine any of these bit-flag constants with OR: | Deletion flags. Default: 0. - XMPConst.`REMOVE_ALL_PROPERTIES` - include internal and external properties in removal; the default removes external properties only. Scope: top-level properties. - XMPConst.`REMOVE_INCLUDE_ALIASES` - remove aliases defined in the namespace. If a property name is supplied, removal ignores the flag. |

### Returns

Nothing
