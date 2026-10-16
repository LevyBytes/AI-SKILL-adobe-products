# Delete a secret

Before deleting, call the listing endpoint for all client secrets on the credential. Take the `uuid` for the older secret you want removed. Then call this API, passing that `uuid` in the URL, to delete the old `client_secret` from the credential.

```bash
curl -X DELETE 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets/{uuid}' \
     -H 'Authorization: Bearer {ACCESS TOKEN}' \
     -H 'x-api-key: {CLIENT ID}'
```

After deletion, a client secret cannot be recovered. Confirm that every place using the old value has already been moved to the new secret.
