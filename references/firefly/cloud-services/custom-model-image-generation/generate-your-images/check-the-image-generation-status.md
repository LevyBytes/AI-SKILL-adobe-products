# Check the image generation status

1. Query the Get Status endpoint to read the image generation job state. The following code shows one way to poll it.

cURL

```bash
curl --location 'https://firefly-epo852211.adobe.io/v3/status/urn:ff:jobs:EXAMPLE85125:2dc3bd5f-1606-4658-8781-111111111' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $CUSTOM_MODELS_CLIENT_ID" \
--header "Authorization: Bearer $CUSTOM_MODELS_ACCESS_TOKEN"
```

Python

```python
def check_job_status(status_url, access_token):
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': os.environ['CUSTOM_MODELS_CLIENT_ID'],
        'Authorization': f'Bearer {access_token}',
    }

    status_url = status_url
    response = requests.get(status_url, headers=headers)
    response.raise_for_status()
    return response.json()
```

JavaScript

```js
async function checkJobStatus(status_url, accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.CUSTOM_MODELS_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get(status_url, { headers: headers });
  return response.data;
}
```
