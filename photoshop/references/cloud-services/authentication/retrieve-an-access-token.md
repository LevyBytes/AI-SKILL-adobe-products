# Retrieve an access token

API calls are validated with a temporary access token. Use the Developer Console to [generate this token directly](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s#generate-token),
or follow the process below.

1. In a secure terminal, make **Client ID** and **Client Secret** available as environment variables so later commands can read them:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export PS_FF_SERVICES_CLIENT_ID='<Your_Client_ID>'
export PS_FF_SERVICES_CLIENT_SECRET='<Your_Client_Secret>'
```

2. Send a POST request to generate access tokens programmatically:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials' \
-d "client_id=$PS_FF_SERVICES_CLIENT_ID" \
-d "client_secret=$PS_FF_SERVICES_CLIENT_SECRET" \
-d 'scope=openid,AdobeID,read_organizations'
```

These parameters are required:

- `client_id`: Use the Client ID.
- `client_secret`: Use the Client secret.
- `scope`: Use `openid`, `AdobeID`, and `read_organizations` as the scopes.

The response resembles this example:

```json
{
  "access_token": "exampleAccessTokenAsdf123",
  "token_type": "bearer",
  "expires_in": 86399
}
```

Access tokens remain valid for 24 hours. For OAuth best practices, create a replacement token every 23 hours.

3. Export the access token as an environment variable:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export PS_FF_SERVICES_ACCESS_TOKEN='<Your_Access_Token>'
```
