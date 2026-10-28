# V2 Placement

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "above",
      "referenceLayer": {
        "name": "Background"
      }
    }
  }
}
```

Supported placement types are `"top"`, `"bottom"`, `"above"`, `"below"`, and `"into"`.

V2 identifies the anchor layer through `referenceLayer` using `name` or `id`, rather than inline object references.
