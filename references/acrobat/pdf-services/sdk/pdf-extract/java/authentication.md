# Authentication

When you finish the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) flow, a zip or json file lands on your machine; what's inside it depends on whether you chose to include personalized code samples.

- **Personalized Download**: Hands you a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Hands you just the `pdfservices-api-credentials.json`, pre-filled with your credentials.

You can launch the bundled samples straight from the zip once you've defined the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, which you set with these commands:

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
