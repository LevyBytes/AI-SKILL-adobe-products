# Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file lands automatically; what it holds depends on whether you chose to include personalized code samples.

- **Personalized Download**: yields a zip holding `adobe-dc-pdf-services-sdk-java-samples`, where a `pdfservices-api-credentials.json` file is already set up for you.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, its credentials already filled in.

With the zip downloaded, you can run its samples right away once you set the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` using the commands that follow:

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
