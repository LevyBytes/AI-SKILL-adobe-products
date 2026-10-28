# XMPMeta.getLocalizedText()

XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang)

### Description

Gets the text value for a particular language from an alternate-text array. It first attempts the specific language, then the generic language when one is supplied, then any x-default item, and otherwise the first item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| altTextName | String | Alternate-text array name string; general path expressions are allowed. |
| genericLang | String | RFC 3066 primary subtag for the generic language. Null and the empty string are allowed. |
| specificLang | String | RFC 3066 primary subtag for the specific language; for example, en-US. A value is required. |

### Returns

String, or undefined if no matching value is found.
