# From Creative Cloud

**Creative Cloud Path:**

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/design.psd"
    }
  }
}
```

- When referencing a file in the user's personal storage, `creativeCloudPath` is enough

**Creative Cloud Project ID:**

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/design.psd",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    }
  }
}
```

Use these fields to identify a project asset:

- `creativeCloudProjectId` (a URN starting with `urn:aaid:`) points to the project root.
- `creativeCloudPath` gives the asset location under that project root.
