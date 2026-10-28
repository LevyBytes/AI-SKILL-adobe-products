# cURL

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=$CUSTOM_MODELS_CLIENT_ID" \
--data-urlencode "client_secret=$CUSTOM_MODELS_CLIENT_SECRET" \
--data-urlencode 'scope=openid,AdobeID,firefly_api,ff_apis'
```
