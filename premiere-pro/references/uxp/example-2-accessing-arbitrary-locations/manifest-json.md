# manifest.json

```json
{
  "manifestVersion": 5,
  "requiredPermissions": {
    "localFileSystem": "fullAccess"
  }
}
```

...

...

Users may be cautious about installing plugins that ask for `"fullAccess"`. Reserve that level for cases where it is genuinely required, and consider `"request"` when user-selected files or folders are enough.
