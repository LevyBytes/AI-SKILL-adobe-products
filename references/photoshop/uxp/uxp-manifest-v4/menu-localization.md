# Menu Localization

Plugin menu item labels and panel labels may be localized for the host's current UI language. Other manifest fields, including `name`, _cannot be localized yet._ Instead of a single string, localized labels use an object with multiple translations: 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
  }
}
```

 Always include a default string.
