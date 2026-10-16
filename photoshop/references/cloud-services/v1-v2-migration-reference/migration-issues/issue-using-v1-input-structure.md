# Issue: Using V1 input structure

**Problem:**

```json
{
  "inputs": [
    {
      "href": "<URL>",
      "storage": "external"
    }
  ]
}
```

**Solution:** Use V2 image structure

```json
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  }
}
```
