# XMPUtils.duplicateSubtree()

XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options)

### Description

Copies the specified subtree's properties from one source XMPMeta object into a destination XMPMeta object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| source | XMPMeta Object | Source XMPMeta object. |
| dest | XMPMeta Object | Destination XMPMeta object. |
| sourceNS | Schema namespace string constants | Source namespace URI string. |
| sourceRoot | String | Property name string for the source subtree root. A general path expression is allowed. |
| destNS | Schema namespace string constants | Destination namespace URI string. |
| destRoot | String | Optional. Property name string for the destination subtree root. A general path expression is allowed. Defaults to the source root location. |
| options | Combine any of these bit-flag constants with OR: | Copy-operation flags. Default: 0. - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content. |

### Returns

Nothing
