# Authentication

The [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) workflow, once complete, auto-downloads a zip or json file whose contents vary according to whether personalized code samples were requested.

- **Personalized Download**: Downloads the zip which contains `pdfservices-python-sdk-samples` with a preconfigured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Downloads the `pdfservices-api-credentials.json` with your preconfigured credentials.

With the zip in hand, the samples inside it run as-is once you've defined the pair of environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by issuing the commands below:

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
