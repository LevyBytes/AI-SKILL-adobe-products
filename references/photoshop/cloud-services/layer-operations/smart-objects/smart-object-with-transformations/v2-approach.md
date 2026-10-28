# V2 approach

```json
{
  "type": "smart_object_layer",
  "name": "Scaled Logo",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  },
  "transformMode": "custom",
  "transform": {
    "offset": {
      "horizontal": 100,
      "vertical": 100
    },
    "dimension": {
      "width": 500,
      "height": 300
    }
  }
}
```

Instead of `bounds`, V2 expresses the same placement and sizing through `transform.offset` and `transform.dimension`. The `transformMode` value determines the transform behavior and accepts `"custom"`, `"fit"`, `"fill"`, or `"none"`.
