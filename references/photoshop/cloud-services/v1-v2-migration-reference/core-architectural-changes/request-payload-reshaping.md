# 2. Request payload reshaping

**V1 Pattern:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "inputs": [
    {
      "href": "<URL>",
      "storage": "external"
    }
  ],
  "options": { /* additional content omitted */ },
  "outputs": [
    {
      "href": "<URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}
```

**V2 Pattern:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  },
  "edits": { /* additional content omitted */ },
  "outputs": [
    {
      "destination": {
        "url": "<URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**Key Changes:**

- `inputs[0].href` → `image.source.url`
- `options` → `edits`
- `outputs[].href` → `outputs[].destination.url`
- `outputs[].type` → `outputs[].mediaType`
- `storage` → `storageType` (and it's now optional for external URLs)

**Artboard exception:** Because `/v2/create-artboard` accepts multiple input images, it uses `images` (plural) with a `source` object for each image instead of `image` (singular).
