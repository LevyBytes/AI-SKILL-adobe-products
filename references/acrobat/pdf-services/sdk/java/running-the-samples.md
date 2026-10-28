# Running the samples

Downloading the code samples during the Getting Credentials workflow is by far the fastest route to a working setup. They hand you everything at once: sample code you can run as-is, a credential json file already embedded, and dependency connections already wired up.

1.  Grab [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Have Maven build it: `mvn clean install`.
3.  Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4.  Give the sample code a run from the command line.
5.  Lean on this document for how to run the samples, and on the API Reference for the API specifics.

You aren't obliged to run things from the command line. The samples Maven project imports cleanly into whatever IDE you favour (e.g. IntelliJ/Eclipse), and the samples run from there too.
