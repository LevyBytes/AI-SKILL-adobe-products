# JavaScript

[Complete Node.js helper](../../../api-examples/node/retrieve-custom-model-token.cjs).

The service returns a payload in this shape:

```json
{ "access_token": "yourAccessTokenAsdf123", "token_type": "bearer", "expires_in": 86399 }
```

3. Export the access token so later requests can reuse it.

```bash
export CUSTOM_MODELS_ACCESS_TOKEN='YOUR_ACCESS_TOKEN'
```

Replace the placeholders with the credentials or response values described above.
