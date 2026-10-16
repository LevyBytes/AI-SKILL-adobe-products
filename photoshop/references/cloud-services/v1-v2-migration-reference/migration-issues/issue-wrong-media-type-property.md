# Issue: Wrong media type property

**Problem:** Using `type` instead of `mediaType`

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty. This is the deliberately incorrect case discussed below; do not use it as a request.

```jsonc
{
  "outputs": [{
    "destination": {/* additional content omitted */},
    "type": "image/jpeg"  // Wrong!
  }]
}
```

**Solution:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "outputs": [{
    "destination": {/* additional content omitted */},
    "mediaType": "image/jpeg"  // Correct!
  }]
}
```
