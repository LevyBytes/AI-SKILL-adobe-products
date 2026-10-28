# Color Balance

For **V2**, include `type` inside `adjustments`:

```json
{
  "type": "adjustment_layer",
  "name": "Color Balance",
  "adjustments": {
    "type": "color_balance",
    "colorBalance": {
      "preserveLuminosity": true,
      "shadowLevels": [-10, 5, 15],
      "midtoneLevels": [0, 0, 10],
      "hightoneLevels": [5, -5, 0]
    }
  }
}
```

**Parameters:**

- `preserveLuminosity`: true/false
- `shadowLevels`: Array of 3 integers [-100 to 100]
- `midtoneLevels`: Array of 3 integers [-100 to 100]
- `hightoneLevels`: Array of 3 integers [-100 to 100]

The three array positions correspond to: [Cyan-Red, Magenta-Green, Yellow-Blue]
