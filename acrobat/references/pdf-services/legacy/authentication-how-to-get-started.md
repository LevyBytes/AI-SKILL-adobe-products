# Authentication - How to get started?

**STEP 1: Get Credentials -** An Adobe-provided credential is needed before you can invoke PDF Services API. To obtain one, [click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and run through the workflow. Make sure you copy the credential values and stash them somewhere secure.

**Validity term:** Your credential's associated certificate stays valid for one year. That said, you can just generate a fresh credential or apply a new certificate to the existing one from the [Document Cloud Developer Console](https://developer.adobe.com/console/).

**STEP 2: Generate JWT -** Take the credential you made in STEP-1 and use it to produce a signed JSON Web Token (JWT). JWT can be generated in either of these two ways:

**• Using Adobe IO Console:**

Goto [Document Cloud Developer Console](https://developer.adobe.com/console/) > Select your newly created Integration > Click on "Service Account (JWT)" > Goto "Generate JWT" tab.

Paste your private.key (from the Credentials zip downloaded in STEP-1) > Click on "Generate token".

Save the Generated JWT and Sample cURL command to retrieve access_token in STEP-3.

**• Using JWT Libraries:** You can find the steps for generating the JWT with libraries referenced here.

Grab [sample code](https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/samples/#sample-code) in whatever programming language you prefer to build the JWT. When generating the JWT, apply the metascope noted here.

**STEP 3: Retrieve Access Token -** To authorize the request, the PDF Services APIs need an access_token. Take the "Exchange JWT" API from the Postman Collection, supply your client_id, client_secret (found in the pdfservices-api-credentials.json file inside the Credentials zip downloaded in STEP-1) and the JWT you generated above to obtain the access_token — or simply run the saved Sample cURL command from STEP-2 to get it.

To learn how the request must be shaped to fetch the access_token, follow this link [How to retrieve Access Token](https://developer.adobe.com/developer-console/docs/guides/#!AdobeDocs/adobeio-auth/master/JWT/JWT.md#exchanging-jwt-to-retrieve-an-access-token)?
