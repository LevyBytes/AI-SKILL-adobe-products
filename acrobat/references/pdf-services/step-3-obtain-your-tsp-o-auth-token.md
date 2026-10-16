# Step 3: Obtain your TSP OAuth Token

To the TSP's OAuth 2.0 authorization API, the client submits its `client_id` and `client_secret`. Back comes an access token, and the PDF Electronic Seal API then receives it among its [input parameters](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-electronic-seal-api/howtos/electronic-seal-api.md#api-parameters). That token exists so the sealing process can reach the TSP's endpoints, and it stays valid only for the window the TSP defines.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/tsp-token.png)

**Sample OAuth Request**

```bash
curl --location --request POST 'https://<base-url>/<API-domain-name>/csc/v0/oauth2/token'
--header 'cache-control: no-cache'
--header 'content-type: application/json'
--data-raw '{
   "lang": "en-US",
   "client_id": "<YOUR_CLIENT_ID>",
   "client_secret": "<YOUR_CLIENT_SECRET>",
   "grant_type": "client_credentials"
}'
```

**Sample Response**

Token-response fields:

| Field | Contract |
| --- | --- |
| `access_token` | Token string; `xxxx-xxx-xxx-xxxx-xxxxxxxx` is a masked example, not a usable credential. |
| `token_type` | `Bearer`. |
| `expires_in` | Numeric expiration interval in seconds. |

With every prerequisite now satisfied, the customer invokes the PDF Electronic Seal API using the right parameters and receives the electronically sealed PDF in return.

[Figure: Seal Workflow](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal-flow.png)
