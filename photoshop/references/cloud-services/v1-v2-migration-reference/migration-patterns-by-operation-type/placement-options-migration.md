# Placement Options migration

**Placement Options:**

Choose `top` or `bottom` for absolute placement; use `above`, `below` or `into` with a reference layer for relative placement. Identify the reference layer by `name` or `id`.

Absolute placement

```json
{
  "placement": {
    "type": "top"
  }
}
```

Relative placement by name

```json
{
  "placement": {
    "type": "above",
    "referenceLayer": {
      "name": "Layer Name"
    }
  }
}
```

Relative placement by ID

```json
{
  "placement": {
    "type": "into",
    "referenceLayer": {
      "id": 123
    }
  }
}
```
