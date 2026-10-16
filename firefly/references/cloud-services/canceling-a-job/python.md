# Python

```python
def cancel_job(cancel_url):
    response = requests.put(
        cancel_url,
        headers={
            "Authorization": f"Bearer {ACCESS_TOKEN}",
            "x-api-key": API_KEY,
            "Content-Type": "application/json"
        }
    )
    response.raise_for_status()
    print("Job canceled:", response.status_code)
    return response.json() if response.content else None
```
