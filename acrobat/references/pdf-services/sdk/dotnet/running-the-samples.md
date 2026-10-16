# Running the samples

Downloading the code samples during the Getting Credentials workflow is the fastest path to a running setup. They give you the lot at once: ready-to-run sample code, an embedded credential json file, and dependency connections already configured.

1. Get the [samples project](https://www.adobe.com/go/pdftoolsapi_net_samples) by cloning or downloading it.
2. Within the samples directory, run `dotnet build` to compile the project.
3. Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

   - **Windows:**

     - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
     - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

   - **MacOS/Linux:**
     - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
     - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Give the sample code a run from the command line.
5. Lean on this document for how to run the samples, and on the API Reference for the API specifics.
