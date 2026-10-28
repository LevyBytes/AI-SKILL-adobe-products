# Panels

A plugin can show panels whose appearance and behavior match Photoshop's built in panels.

When you define an entrypoint of type `"panel"`, Photoshop performs two actions:

- Adds a menu item for the plugin using the locale-specific name from the `label` field.
- After that menu item is selected, loads the manifest's `main` field as the panel content.

The [vanilla-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/vanilla-js-sample) project shows a panel example.

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
"entrypoints": [
    {
      "type": "panel",
      "id": "vanilla",
      "label": {
        "default": "Vanilla JS Sample"
      },
      /* additional content omitted */
    }
  ]
}
```

For the complete panel entrypoint specification, consult [UXP Manifest docs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/guides/uxp-guide/uxp-misc/manifest-v4/index.md).
