# 4. Authentication (unchanged)

V1 and V2 both use OAuth Server-to-Server authentication:

```shell
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials' \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d 'scope=openid,AdobeID,read_organizations'
```
