# Invalid contentType

❌ **Problem:** Inline content has a missing or incorrect contentType

✅ **Solution:** Always provide contentType with inline content

```json
{
  "source": {
    "content": "...",
    "contentType": "application/json"
  }
}
```
