# Incorrect input structure

**Problem:** v1 input format is being used

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

**Fix:** Switch to the v2 images structure

```json
{
  "images": [
    {
      "source": {
        "url": "<URL>"
      }
    }
  ]
}
```
