# Launch Process

In the manifest, `launchProcess` controls whether the plugin may start applications and open files in other applications. Manifest v5 requires `launchProcess` before `openExternal` or `openPath` can be used. 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "requiredPermissions": {
    "launchProcess": {
      "schemes": [
        "https",
        "slack",
        "adbxd"
      ],
      "extensions": [
        ".pdf",
        ".xd",
        ".psd"
      ]
    }
  }
}
```

 This permission set is required by both `openPath` and `openExternal`. When either function is called, Photoshop shows a runtime consent dialog, and the API call proceeds only after the user agrees.
