# Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest route to a running setup. They bundle it all: code you can run immediately, a credential json file already embedded, and dependency connections set up ahead of time.

1. Download [the Node.js sample project ](http://www.adobe.com/go/pdftoolsapi_node_sample).
2. From the samples root directory, run `npm install`.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Test the sample code on the command line.
5. Lean on this document for guidance on running the samples, and on the API Reference for specifics about the API.
