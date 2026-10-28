# 2. Source image field

V1 supplied image content through the `input` object.

```json
{
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

V2 supplies that same content through `image.source`.

```json
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  }
}
```
