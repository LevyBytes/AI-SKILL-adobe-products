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
    "prompt": "a product on a wooden table in a cozy kitchen",
    "image": {
        "source": { "url": "https://example.com/product.png" }
    }
}

response = requests.post(
    f"{API_BASE}/v3/images/generate-object-composite-async",
    headers=headers,
    json=payload
)
response.raise_for_status()
result = response.json()
print("Job ID:", result["jobId"])
print("Status URL:", result.get("statusUrl"))
print("Cancel URL:", result.get("cancelUrl"))
```
