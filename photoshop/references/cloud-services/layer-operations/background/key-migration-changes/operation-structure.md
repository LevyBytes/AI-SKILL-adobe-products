# Operation Structure

**V1:** Separate `add` block

```json
{
  "type": "backgroundLayer",
  "name": "Background",
  "add": {},
  "input": {
    "href": "<IMAGE_URL>",
    "storage": "external"
  }
}
```

**V2:** Explicit `operation` block

```json
{
  "type": "background_layer",
  "name": "Background",
  "image": {
    "source": {
      "url": "<IMAGE_URL>"
    }
  },
  "operation": {
    "type": "add"
  }
}
```
