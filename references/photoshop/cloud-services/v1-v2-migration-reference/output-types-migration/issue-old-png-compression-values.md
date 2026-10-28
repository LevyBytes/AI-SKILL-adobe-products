# Issue: Old PNG compression values

**Problem:**

```json
{
  "mediaType": "image/png",
  "compression": "small"
}
```

**Error:**

```text
Invalid value 'small' at path 'outputs[0].compression'.
```

**Solution:**

```json
{
  "mediaType": "image/png",
  "compression": "maximum"
}
```
