# `StringsDefinition`

Use `StringsDefinition` to provide localized text for the plugin name and other strings shown to users. Any location that accepts [`LocalizedString`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#localizedstring) can reference keys from `StringsDefinition`.

```json
{
  "name": "my-plugin",
  "strings": {
    "my-plugin": {
      "default": "My Plugin",
      "it": "Il mio Plugin",
      "fr": "Mon Plugin"
    }
  }
}
```
