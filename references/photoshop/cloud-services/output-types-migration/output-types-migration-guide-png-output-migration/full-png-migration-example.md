# Full PNG migration example

**Main field moves:**

1. `inputs[].href` → `image.source.url`
2. `outputs[].href` → `outputs[].destination.url`
3. `outputs[].type` → `outputs[].mediaType`
4. `compression: "medium"` stays the same (but more options available)
5. `storage` field removed

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://my-storage.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-storage.com/output.png",
      "storage": "external",
      "type": "image/png",
      "compression": "medium",
      "width": 1920
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://my-storage.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.png"
      },
      "mediaType": "image/png",
      "compression": "medium",
      "width": 1920
    }
  ]
}
```
