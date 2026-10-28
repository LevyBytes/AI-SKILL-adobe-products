# manifest.json

```json
{
  "manifestVersion": 5,
  "requiredPermissions": {
    "launchProcess": {
      "schemes": [
        "https",
        "mailto",
        "maps",
        "bingmaps"
      ]
    }
  }
}
```

...

...

`openExternal()` and `openPath()` use the same permission confirmation flow for user consent.

[Figure: User consent dialog for openExternal](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/external-process/img/external-process-request-permission-scheme.png)

`file:/` is not a permitted scheme for `openExternal()`. For local files, call `openPath()` instead.
