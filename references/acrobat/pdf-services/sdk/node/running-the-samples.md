# Running the samples

Pulling the code samples during the Getting Credentials workflow is the quickest way to a working setup. They supply everything together: sample code that runs as-is, an embedded credential json file, and dependency connections set up in advance.

1. Grab [the Node.js sample project ](http://www.adobe.com/go/pdftoolsapi_node_sample).
2. At the samples root directory, execute `npm install`.
3. Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

   - **Windows:**

     - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
     - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

   - **MacOS/Linux:**
     - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
     - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Give the sample code a run from the command line.
5. Lean on this document for how to run the samples, and on the API Reference for the API specifics.
