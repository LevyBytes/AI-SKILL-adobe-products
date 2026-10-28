# XMPMeta.registerAlias()

XMPMeta.registerAlias(aliasNS, aliasProp, actualNS, actualProp, arrayForm)

### Description

Defines an alias from one namespace and property to another. When the alias and actual property share a data type, the mapping can be direct; a simple alias can also target an array item, including the first item or the x-default entry in an alternate-text array.

Several alias names can point to the same actual property when their forms match. If the same alias and form already exists, the call leaves it unchanged.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| aliasNS | String | Alias namespace string. See Schema namespace string constants. |
| aliasProp | String | Alias property, as a simple name string. |
| actualNS | Schema namespace string constants | Namespace string for the aliased property. |
| actualProp | String | Aliased property, as a simple name string. |
| arrayForm | Number | Array form used when a simple alias targets an array item; it defines array creation behavior when that alias sets the array for the first time. Constants include: - XMPConst.`ALIAS_TO_SIMPLE_PROP` (default) - Direct mapping. It may map a simple property to a simple property, an array to an array, or a structure to a structure. - XMPConst.`ALIAS_TO_ARRAY` - The actual property is an unordered array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ORDERED_ARRAY` - The actual property is an ordered array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ALT_ARRAY` - The actual property is an alternate array; the alias targets the first array element. - XMPConst.`ALIAS_TO_ALT_TEXT` - The actual property is an alternate-text array (a localized property); the alias targets the x-default array element. |

### Returns

Nothing
