# Authentication

When the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) step finishes, a zip or json file lands on your machine automatically, and what it holds depends on whether you chose to include personalized code samples.

- **Personalized Download**: gives you the zip holding `adobe-dc-pdf-services-sdk-java-samples` alongside a ready-configured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: gives you only the `pdfservices-api-credentials.json`, set up in advance with your credentials.

With the zip unpacked, you can launch the bundled samples right away once you define the pair of environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, which you set using these commands:

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
