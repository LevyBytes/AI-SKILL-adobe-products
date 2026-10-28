# Issue: Wrong ActionJSON format

**Problem:** ActionJSON is supplied as an object or array.

```json
{
  "source": {
    "content": [
      {
        "_obj": "..."
      }
    ],
    "contentType": "application/json"
  }
}
```

Wrong: array

**Solution:** Convert the ActionJSON payload to a string.

```json
{
  "source": {
    "content": "[{\"_obj\":\"...\"}]",
    "contentType": "application/json"
  }
}
```

Correct: string
