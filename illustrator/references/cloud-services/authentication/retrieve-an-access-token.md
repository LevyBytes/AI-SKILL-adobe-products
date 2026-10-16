# Retrieve an access token

A temporary access token authorizes API calls. You can [generate an access token in the Developer Console](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s#generate-token), or request one programmatically with the steps below.

1. In a secure terminal, export your **Client ID** and **Client Secret** as environment variables so later commands can read them:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export ILLUSTRATOR_API_CLIENT_ID='<Your_Client_ID>'
export ILLUSTRATOR_API_CLIENT_SECRET='<Your_Client_Secret>'
```

2. Use this command to generate an access token:

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=ILLUSTRATOR_API_CLIENT_ID" \
--data-urlencode "client_secret=ILLUSTRATOR_API_CLIENT_SECRET" \
--data-urlencode 'scope=openid, AdobeID, ff_apis, firefly_enterprise, illustrator_services_beta'
```

The response has this shape:

```json
{
  "access_token": "exampleAccessTokenAsdf123",
  "token_type": "bearer",
  "expires_in": 86399
}
```

In the response, `expires_in` gives the access token lifetime in seconds. Once it expires, the application must ask for another token.

3. Export the access token as an environment variable:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export ILLUSTRATOR_API_ACCESS_TOKEN='<Your_Access_Token>'
```
