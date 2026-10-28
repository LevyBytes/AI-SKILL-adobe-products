# Generate a New Secret

Send this request. The response includes the `client_secret` newly added to the project and its `uuid`. You can view it again later in the Developer Console UI. After generating the new secret, point your application at it.

```bash
curl -X POST 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets' \
     -H 'Authorization: Bearer {ACCESS TOKEN}' \
     -H 'x-api-key: {CLIENT ID}'
```
