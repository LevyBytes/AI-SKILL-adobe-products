# Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup. Bundled in are ready-to-run sample code, a credential json file already embedded, plus dependency connections that come preconfigured.

1. Clone or download the [samples project](https://www.adobe.com/go/pdftoolsapi_net_samples).
2. From the samples directory, build the sample project: `dotnet build`.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Run the sample code from the command line to try it out.
5. Lean on this document for the particulars of running samples, and on the API Reference for the API specifics.
