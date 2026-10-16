# Step 1 : Getting the access token

Calls to PDF Services API endpoints must be authenticated, and obtaining an access token happens in two stages:

1. **Get Credentials** An Adobe-issued credential is mandatory before you can call the PDF Services API. Generate one by [clicking here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and finishing the workflow. Make sure you copy the credential values somewhere safe.
2. **Retrieve Access Token** Every PDF Services API call has to be authorized with an access_token. Either invoke the "Get AccessToken" API from the Postman Collection — supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1 — or just run the cURL command shown below to fetch the access_token.

## Step 1 : Getting the access token

Endpoints in the PDF Services API require authentication. Obtaining an access token happens in two stages:

1. **Get Credentials** Calling the PDF Services API depends on a credential that Adobe issues. [Click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) to get one and finish the workflow, then copy the credential values to a secure spot and save them.
2. **Retrieve Access Token** Authorizing a request to the PDF Services APIs takes an access_token. Either pull it via the "Get AccessToken" API in the Postman Collection — supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1 — or fetch the access_token straight from the cURL command shown below.
