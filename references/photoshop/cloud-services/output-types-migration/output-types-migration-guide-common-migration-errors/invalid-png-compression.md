# Invalid PNG compression

❌ **Problem:**

```json
{
  "mediaType": "image/png",
  "compression": "small"
}
```

❌ **Error:**

```txt
Invalid value 'small' at path 'outputs[0].compression'.
```

✅ **Solution:**

Use one of the V2 `compression` enum values:

```json
{
  "mediaType": "image/png",
  "compression": "maximum"
}
```
