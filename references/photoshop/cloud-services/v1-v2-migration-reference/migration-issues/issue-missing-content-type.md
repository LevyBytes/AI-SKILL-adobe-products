# Issue: Missing contentType

**Problem:**

```json
{
  "source": {
    "content": "[...]"
  }
}
```

Missing contentType!

**Solution:** Inline content should always declare `contentType`.

```json
{
  "source": {
    "content": "[...]",
    "contentType": "application/json"
  }
}
```
