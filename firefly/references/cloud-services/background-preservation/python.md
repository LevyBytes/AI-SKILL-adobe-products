# Python

```python

API_BASE = "https://firefly-api.adobe.io"
ACCESS_TOKEN = "your_access_token"
API_KEY = "your_api_key"

headers = {
    "Authorization": f"Bearer {ACCESS_TOKEN}",
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

payload = {
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
    "preserveBackground": True,
    "harmonization": 0.7,
    "shadowIntensity": 1,
    "seeds": [42, 84, 126],
    "output": { "mediaType": "image/png" }
}

response = requests.post(
    f"{API_BASE}/v3/images/adaptive-composite",
    headers=headers,
    json=payload
)
response.raise_for_status()
result = response.json()
print("Job ID:", result["jobId"])
print("Status URL:", result.get("statusUrl"))
print("Cancel URL:", result.get("cancelUrl"))
```
