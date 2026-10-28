# XMPUtils.composeLanguageSelector()

XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale)

### Description

Builds and returns a string path that uses the registered namespace prefix to pick, by language, one item from an alt text array, in this form:

Reference data, output or notation; not an executable JavaScript program.

```text
schemaNS:arrayName[@xml:lang="langName"]
```

Note

Do not substitute this for getLocalizedText() or setLocalizedText().

getLocalizedText() and setLocalizedText() add logic for language selection and x-default consistency. This helper only creates a path expression for one explicit language.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| locale | String | RFC3066 locale code string identifying the target language. |

### Returns

String
