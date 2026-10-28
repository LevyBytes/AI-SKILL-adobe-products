# Execute an API call

After the token exists, make the first API request:

```shell
curl --request GET \
  --url https://image.adobe.io/pie/psdService/hello \
  --header "Authorization: Bearer $PS_FF_SERVICES_ACCESS_TOKEN" \
  --header "x-api-key: $PS_FF_SERVICES_CLIENT_ID"
```

The response is:

```bash
Welcome to the Photoshop API!
```

Congratulations! The first Photoshop API request is complete.
