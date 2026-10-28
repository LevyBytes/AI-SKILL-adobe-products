# Example 2: Complex edit (multiple adjustments)

**V1 Code (3 separate calls):**

This is a three-request outline. The ellipses omit request headers and bodies; use the corresponding complete operation examples when making requests.

```shell
# Call 1
curl -X POST https://image.adobe.io/lrService/autoTone ...

# Call 2
curl -X POST https://image.adobe.io/lrService/autoStraighten ...

# Call 3
curl -X POST https://image.adobe.io/lrService/edit \
  -d '{
    "inputs": {...},
    "options": {
      "Exposure": 1.2,
      "Contrast": 10,
      "Saturation": 15
    },
    "outputs": [...]
  }'
```
