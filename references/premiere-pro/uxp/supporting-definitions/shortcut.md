# `shortcut`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `shortcut` | `{ mac: string, win: string }` | optional | `undefined` |

**Premiere does not support keyboard shortcuts** for UXP plugins yet.

Use `shortcut` to define a keyboard command for invoking the entrypoint. Provide separate strings for Windows and macOS. If the host application cannot use the shortcut, it ignores the value.

```json
{
  "shortcut": {
    "mac": "Cmd+Shift+P",
    "win": "Ctrl+Shift+P"
  }
}
```

Each platform-specific shortcut string follows these rules:

- Include one or more modifier keys in any order, with each modifier followed by `+`.
- Mac accepts Cmd, Ctrl, Opt/Alt, and Shift modifiers. At least one of Cmd or Ctrl is required.
- Win accepts Ctrl, Alt, and Shift modifiers. Ctrl is required.
- End with a letter or number key.

Letter case has no effect, so `"Cmd+P"` and `"Cmd+p"` are equivalent and do not imply Shift. Other key types, including punctuation, arrow keys, and F1-F12, are not supported right now.

When the shortcut conflicts with a built-in host command or a shortcut from another plugin, the host skips it and logs a warning in the developer console.
