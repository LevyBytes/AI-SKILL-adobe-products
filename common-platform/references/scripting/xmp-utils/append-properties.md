# XMPUtils.appendProperties()

XMPUtils.appendProperties(source, dest, options)

### Description

Copies properties out of a source XMPMeta object and appends them into a destination XMPMeta object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| source | XMPMeta Object | Source XMPMeta object. |
| dest | XMPMeta Object | Target XMPMeta object. |
| options | Combine any of these bit-flag constants with OR: - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content. | Copy-operation flags. Default: 0. |

### Returns

Nothing
