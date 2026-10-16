# Script output patterns

Use glob patterns to collect files created by UXP scripts:

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "layer-*.png"
    }
  ]
}
```
