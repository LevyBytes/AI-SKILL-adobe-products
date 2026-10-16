# manifest.json

```json
{
  "manifestVersion": 5,
  "requiredPermissions": {
    "launchProcess": {
      "extensions": [
        ".pdf",
        ".txt",
        ".mp4",
        ""
      ]
    }
  }
}
```

...

...

The user sees a confirmation dialog requesting permission to open the file, and the selected choice can be saved for later attempts.

[Figure: User consent dialog for openPath](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/external-process/img/external-process-request-permission.png)

When calling `openPath()`, list the file extensions the plugin will open in the [`launchProcess.extensions`](../supporting-definitions/extensions.md) array inside the Manifest [`requiredPermissions`](../optional-properties/required-permissions.md) object. Include an **empty string** `""` when folders should be openable in Finder/Explorer, as shown by `openProjectFolder()` above.

Trying to open a file whose extension is not listed causes the operation to fail.
