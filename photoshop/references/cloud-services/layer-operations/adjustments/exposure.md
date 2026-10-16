# Exposure

For **V2**, include `type` inside `adjustments`. V2 names the exposure amount parameter **`exposureValue`**; in V1, the corresponding field was `exposure`.

```json
{
  "type": "adjustment_layer",
  "name": "Exposure",
  "adjustments": {
    "type": "exposure",
    "exposure": {
      "exposureValue": 0.5,
      "offset": 0.01,
      "gammaCorrection": 1.2
    }
  }
}
```

**Parameters:**

- **V2:** `exposureValue`: -20 to 20 (default: 0); **V1** used the property name `exposure`.
- `offset`: -0.5 to 0.5 (default: 0)
- `gammaCorrection`: 0.01 to 9.99 (default: 1)
