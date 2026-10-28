# cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/adaptive-composite' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "background": {
      "image": {
        "source": { "url": "https://example.com/living-room.jpg" }
      },
      "fillAreaMask": {
        "source": { "url": "https://example.com/placement-mask.png" }
      }
    },
    "object": {
      "image": {
        "source": { "url": "https://example.com/chair.png" }
      },
      "mask": {
        "source": { "url": "https://example.com/chair-mask.png" }
      }
    },
    "preserveBackground": true,
    "harmonization": 0.7,
    "shadowIntensity": 1,
    "seeds": [42, 84, 126],
    "output": { "mediaType": "image/png" }
  }'
```
