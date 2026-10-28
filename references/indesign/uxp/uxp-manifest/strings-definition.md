# StringsDefinition

Represents the string set used to localize the plugin name and other user-facing text.

Keys from `StringsDefinition` are valid anywhere `LocalizedString` is supported.

**Example**

Example manifest.json:

```json
{
  "name": "my-plugin",
  "strings": {
    "my-plugin": {
      "default": "My Plugin",
      "de": "Mein Plugin"
    }
  }
}
```
