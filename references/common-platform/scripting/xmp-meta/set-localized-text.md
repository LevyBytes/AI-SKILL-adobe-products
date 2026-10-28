# XMPMeta.setLocalizedText()

XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)

### Description

Sets the text value for a particular language in an alternate-text array. Special cases for the x-default item are handled.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| altTextName | String | Alternate-text array name string; general path expressions are allowed. |
| genericLang | String | RFC 3066 primary subtag for the generic language. Null and the empty string are allowed. |
| specificLang | String | RFC 3066 primary subtag for the specific language; for example, en-US. A value is required. |
| itemValue | String | New text value. |
| setOptions | Unknown | Unused. |

### Returns

Nothing
