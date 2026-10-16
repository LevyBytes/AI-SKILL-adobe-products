# Step 4 : Getting the API access token

Authentication guards the PDF Electronic Seal API endpoints, so fetching an access token happens in two stages:

1. ** Get Credentials ** - A credential issued by Adobe is required before you can call the PDF Services API. Grab one by [clicking here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and finishing the flow. Remember to copy the credential values somewhere secure.
2. ** Retrieve Access Token ** - Requests to the PDF Services APIs have to be authorized with an access_token. You can either pull it via the "Get AccessToken" API in the Postman Collection, supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1, or just run the cURL command shown below to retrieve the access_token.
