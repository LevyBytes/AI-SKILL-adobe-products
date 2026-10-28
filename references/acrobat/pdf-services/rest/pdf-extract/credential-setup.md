# Public REST API setup

Adobe-supplied credentials are required to authenticate, and you can reach the PDF Services API directly over its REST endpoints. After you've worked through the [Getting Credentials](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api) workflow, a zip file lands on your machine whose contents differ according to whether you opted in to personalized code samples. Here is how the zip is laid out:

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
