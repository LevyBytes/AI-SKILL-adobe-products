# EntrypointDefinition

Describes a plugin-provided entrypoint that the user can invoke.

At minimum, an entrypoint includes an ID and a label.

**Example**

```json
{
  "id": "myPlugin.myEntrypoint",
  "label": "My Entrypoint"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `type` \* | `"command" \| "panel"` | required | Entrypoint category. The currently supported values are `command` and `panel`. |
| `id` \* | `string` | required | Entrypoint ID. It must be unique inside the plugin and maps the entrypoint to the code that implements it. |
| `label` \* | `string \| LocalizedString` | required | User-visible entrypoint label, for example the text shown in the plugin menu. |
| `description` | `string \| LocalizedString` | optional | Longer entrypoint text for tooltips or other host-provided locations when appropriate. **Default value** `undefined` (falls back to the plugin's name) |
| `shortcut` | `{ mac: string, win: string }` | optional | Keyboard shortcut for invoking the entrypoint, declared separately for Windows and macOS. When a host application cannot use the shortcut, the host drops it. **Please note:** _Adobe XD is currently the only host listed here with keyboard-shortcut support._ **Example** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }` Each platform defines shortcuts with a string using this syntax: • one or more modifier keys in any order, each followed by "+"\\• Mac: modifiers may be Cmd, Ctrl, Opt/Alt, or Shift. At least one of Cmd or Ctrl is required.\\• Win: modifiers may be Ctrl, Alt, or Shift. Ctrl is required.\\• a letter or number key. Letter case does not matter (e.g., "Cmd+P" and "Cmd+p" are equivalent, and neither implies Shift). Other keys, including punctuation, arrow keys, and F1-F12, are not currently supported. **Please note:** _When your shortcut overlaps a built-in host command or another plugin shortcut, it is skipped and a developer-console warning is printed._ **Default value** `undefined` (no shortcut) |
| `icon` | `IconDefinition[]` | optional | Entrypoint-specific icon. When provided, it replaces the plugin icon in UI locations dedicated to that entrypoint. **Default value** `[]` (plugin icon) |
| `minimumSize` | `{ width: number, height: number }` | optional | Desired minimum view size. Hosts might not guarantee the requested minimum. Width and height are specified in pixels. Without this value, the host chooses its own minimum. **Default value** (host-specific default) |
| `maximumSize` | `{ width: number, height: number }` | optional | Desired maximum view size. Hosts might not guarantee the requested maximum. In dialogs, set `minimumSize = maximumSize` to prevent resizing. **Default value** (host-specific default) |
| `preferredDockedSize` | `{ width: number, height: number }` | optional | Preferred view size while docked, when docking is possible, or for modal dialogs without `reference_node_id`. The host can decline the requested size. **Default value** (host-specific default) |
| `preferredFloatingSize` | `{ width: number, height: number }` | optional | Preferred size for a floating panel. The host can decline the requested size. Use the `minimumSize` format. **Default value** (host-specific default) |
