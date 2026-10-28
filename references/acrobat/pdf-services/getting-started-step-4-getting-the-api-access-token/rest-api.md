# Adobe token request

Replace the client-ID and client-secret placeholders with your Adobe credential. Run this template in Bash; keep credentials in a trusted server environment.

```bash
curl --location 'https://pdf-services.adobe.io/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={{Placeholder for Client ID}}' \
--data-urlencode 'client_secret={{Placeholder for Client Secret}}'
```

Read `access_token`, `token_type` and `expires_in` from the response. Use the token with the client ID on operation requests; this request does not obtain a TSP certificate token.
