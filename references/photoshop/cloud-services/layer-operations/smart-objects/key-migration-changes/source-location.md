# 2. Source location

**V1:** source details are placed in the `input` property

```json
{
  "type": "smartObject",
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

**V2:** source details move to the `smartObject.smartObjectFile.source` path

```json
{
  "type": "smart_object_layer",
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  }
}
```

The smart object source URL belongs inside `smartObject.smartObjectFile.source.url`; it is not a top-level layer value.
