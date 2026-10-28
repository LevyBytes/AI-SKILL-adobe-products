# LocalizedString

Represents localized text, with each locale as a key and its translated string as the value.

**Example**

```json
{
  "default": "Hello",
  "en": "Hello",
  "de": "Hallo"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `default` \* | `string` | required | Fallback text used when the current locale has no translation. |
