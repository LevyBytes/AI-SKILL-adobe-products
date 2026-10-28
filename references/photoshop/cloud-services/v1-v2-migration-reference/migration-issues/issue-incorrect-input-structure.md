# Issue: Incorrect input structure

**Problem:** The request uses v1 input format.

```json
{
  "inputs": [{ "href": "<URL>", "storage": "external" }]
}
```

**Solution:** Express the inputs through the v2 `images` array.

```json
{
  "images": [{ "source": { "url": "<URL>" } }]
}
```
