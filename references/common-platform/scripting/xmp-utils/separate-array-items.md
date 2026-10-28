# XMPUtils.separateArrayItems()

XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString)

### Description

Uses a concatenated string from catenateArrayItems() to update individual array item strings in the XMPMeta object. Recognized separators include tab, return, linefeed, semicolons, commas, and multiple-space runs.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta Object | Object whose array items are separated |
| schemaNS |  | Namespace URI string. See Schema namespace string constants. |
| arrayName | String | Array property name string. A general path expression is allowed. Every array item must be a simple string value. |
| arrayOptions | Combine any of these bit-flag constants with OR: - XMPConst.`APPEND_ALL_PROPERTIES` - include internal and external properties; the default behavior copies external properties only. Scope: top-level properties. - XMPConst.`APPEND_REPLACE_OLD_VALUES` - overwrite existing property values with source-object values; otherwise current values stay in place. Scope: every hierarchy level. - XMPConst.`APPEND_DELETE_EMPTY_VALUES` - delete properties whose incoming value has no content. - XMPConst.`SEPARATE_ALLOW_COMMAS` - allow commas in item values. Without this flag, an item containing a comma, such as "LastName, FirstName", is split into two array items. | Flags controlling how the separated string updates the array property. Default: 0. |
| concatString | String | String containing concatenated array values, as returned by catenateArrayItems(). |

### Returns

Nothing
