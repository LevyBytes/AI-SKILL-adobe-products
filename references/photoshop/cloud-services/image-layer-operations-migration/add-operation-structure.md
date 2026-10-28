# 1. Add operation structure

In v1, an `add` block carried insertion instructions for where the new layer should be placed.

```json
{
  "type": "layer",
  "name": "New Layer",
  "add": {
    "insertTop": true
  },
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

For v2, placement moves into the `placement` property inside a single `operation` block.

```json
{
  "type": "layer",
  "name": "New Layer",
  "image": {
    "source": {
      "url": "<URL>"
    }
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```
