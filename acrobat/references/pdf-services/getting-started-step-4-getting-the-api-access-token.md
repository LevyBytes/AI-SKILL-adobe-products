# Getting Started — Step 4 : Getting the API access token

The PDF Electronic Seal API exposes authenticated endpoints, and obtaining an access token takes two steps:

1. ** Get Credentials ** - An Adobe-provided credential is needed to invoke the PDF Services API. [Click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) to obtain one and finish the workflow. Remember to copy the credential values and stash them somewhere secure.
2. ** Retrieve Access Token ** - To authorize a request, the PDF Services APIs need an access_token. Either pull it via the "Get AccessToken" call in the Postman Collection, supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1, or just run the cURL shown below to fetch the access_token directly.
