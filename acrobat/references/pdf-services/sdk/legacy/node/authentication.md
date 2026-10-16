# Authentication

Wrapping up the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) step triggers an automatic download of a zip or json file, whose contents differ according to whether you asked for personalized code samples.

- **Personalized Download**: delivers a zip that packs `adobe-dc-pdf-services-sdk-java-samples` next to a pre-set `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: delivers the `pdfservices-api-credentials.json` on its own, with your credentials baked in.

Once the zip is extracted, the included samples will run straight away after you declare the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`; set them with the commands below:

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
