# JavaScript

```js
async function retrieveAccessToken() {
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  const config = {
    method: "post",
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Access Token Retrieved");
    return response.data.access_token;
  } catch (error) {
    console.error("Error retrieving access token:", error.response.data);
  }
}
```

A successful token response has this shape:

```json
{ "access_token": "yourAccessTokenAsdf123", "token_type": "bearer", "expires_in": 86399 }
```

Export the access token for the script you run next:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_ACCESS_TOKEN=yourAccessTokenAsdf123
```
