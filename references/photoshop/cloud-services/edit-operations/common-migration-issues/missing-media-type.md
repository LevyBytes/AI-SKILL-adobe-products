# Missing media type

**Problem:** The request uses `type` where V2 expects `mediaType`

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
"outputs": [
  {
    "destination": {/* additional content omitted */},
    "type": "image/jpeg"
  }
]
}
```

**Solution:** Send `mediaType`

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
"outputs": [
  {
    "destination": {/* additional content omitted */},
    "mediaType": "image/jpeg"
  }
]
}
```
