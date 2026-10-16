# Retrieve an access token

In a secure terminal, `export` the **Client ID** and **Client Secret** into environment variables for the commands you will run afterward:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_CLIENT_ID='<your_Client_ID>'
export FIREFLY_SERVICES_CLIENT_SECRET='<your_Client_Secret>'
```

Then request an access token with this command:

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=$FIREFLY_SERVICES_CLIENT_ID" \
--data-urlencode "client_secret=$FIREFLY_SERVICES_CLIENT_SECRET" \
--data-urlencode 'scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
```

The response has this form:

```json
{ "access_token": "yourExampleTokenAsdf123", "token_type": "bearer", "expires_in": 86399 }
```

The `expires_in` value tells you how many seconds remain before the access token stops being valid. Tokens last 24 hours; once that period passes, the secure server-side application must ask for another token. Store the token securely, and refresh it ahead of expiration.

Put the access token into an environment variable:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_ACCESS_TOKEN=yourExampleTokenAsdf123
```

After authentication is ready, continue with [Generate Images API](../image-generation-quickstart/reference-index.md).

