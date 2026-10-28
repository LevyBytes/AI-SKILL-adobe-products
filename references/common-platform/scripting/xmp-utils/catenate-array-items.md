# XMPUtils.catenateArrayItems()

XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options)

### Description

Joins a set of array item values into one string. separateArrayItems() can later split the resulting string back into array items.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| xmpObj | XMPMeta Object | XMPMeta object that contains the array. |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. Every array item must hold a simple string value. |
| separator | String | String inserted between items in the result. Default: '; ', an ASCII semicolon and space (U+003B,U+0020). |
| quotes | String | Character used around items that include a separator. Default: '"', an ASCII double quote (U+0022). |
| options | Constant value | Concatenation flag. XMPConst.`SEPARATE_ALLOW_COMMAS` - allow commas in item values, such as "LastName, FirstName". Match this setting in separateArrayItems() so item reconstruction is correct. Default: 0. |

### Returns

String
