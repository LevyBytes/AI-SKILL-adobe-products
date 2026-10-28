# Python

```python
def generate_image(access_token):
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': os.environ['FIREFLY_SERVICES_CLIENT_ID'],
        'Authorization': f'Bearer {access_token}'
    }

    data = {
        'prompt': 'a realistic illustration of a cat coding',  # Replace with your actual prompt
    }

    response = requests.post(
        'https://firefly-api.adobe.io/v3/images/generate-async',
        headers=headers,
        json=data
    )
    response.raise_for_status()
    job_response = response.json()
    print("Generate Image Response:", job_response)
    return job_response
```
