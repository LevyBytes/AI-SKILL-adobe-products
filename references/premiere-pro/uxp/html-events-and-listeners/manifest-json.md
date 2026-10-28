# manifest.json

```json
{
  "requiredPermissions": {
    "allowCodeGenerationFromStrings": true
  }
}
```

...

...

Security consideration

With `allowCodeGenerationFromStrings`, code may be executed from string content, so the permission can raise security exposure. Enable it only when your plugin design truly depends on inline event handlers.
