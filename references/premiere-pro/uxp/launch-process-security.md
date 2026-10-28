# Launch Process Security

UXP blocks plugins from launching external processes by default, reducing the chance of unwanted or malicious activity. If a plugin needs to open files or start applications, declare the [`launchProcess`](supporting-definitions/launch-process.md) permission in `manifest.json`. It contains two parts:

- **Extensions**: file extensions the plugin is allowed to open, such as `[".pdf", ".txt"]`.
- **Schemes**: URL schemes the plugin may invoke, such as `["https", "mailto"]`.

```json
{
  "requiredPermissions": {
    "launchProcess": {
      "extensions": [
        ".pdf",
        ".mp4"
      ],
      "schemes": [
        "https",
        "mailto"
      ]
    }
  }
}
```

...

...

User consent is always required

Every attempt to launch an external process must be approved by the user in a system dialog. Put clear, useful context in the `developerText` parameter so the user understands why the action is being requested.
