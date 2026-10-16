# Issue: Using V1 storage parameter

**Problem:**

```json
{
  "storage": "external"
}
```

V1 format

**Solution:** Use destination structure

```json
{
  "destination": {
    "url": "<URL>"
  }
}
```

storageType only for Azure/Dropbox
