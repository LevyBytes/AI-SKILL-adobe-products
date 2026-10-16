# Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file comes down automatically; what's inside it differs depending on whether you chose to grab personalized code samples.

- **Personalized Download**: yields a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, prefilled with your credentials.

With the zip downloaded, the samples in it are ready to run directly once you've set the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` via the commands below:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

**Example pdfservices-api-credentials.json file**

```json
{
  "client_credentials": {
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```
