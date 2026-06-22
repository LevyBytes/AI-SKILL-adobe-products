# Legacy Documentation — Gettingstarted (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk — Public API

You can also call the PDF Services API straight through its REST APIs, which authenticate using an Adobe-provided credential. After you finish the [Getting Credentials](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) workflow, a zip file downloads by itself, and its layout changes depending on whether personalized code samples were requested. Those zip layouts break down like so:

- **Personalized Download**: supplies the zip carrying `adobe-dc-pdf-services-sdk-java-samples` plus a preconfigured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: supplies the standalone `pdfservices-api-credentials.json`, already populated with your credentials.

After extracting the zip, the bundled samples are ready to run as soon as you configure the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` using the commands shown here:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

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
