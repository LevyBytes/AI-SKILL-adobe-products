# Issue: Missing outputs array

**Problem:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty. This is the deliberately incorrect case discussed below; do not use it as a request.

```jsonc
{
  "image": {"source": {"url": "<URL>"}},
  "edits": {/* additional content omitted */}
  // Missing outputs!
}
```

**Solution:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "image": {"source": {"url": "<URL>"}},
  "edits": {/* additional content omitted */},
  "outputs": [
    {
      "destination": {"url": "<OUTPUT_URL>"},
      "mediaType": "image/jpeg"
    }
  ]
}
```
