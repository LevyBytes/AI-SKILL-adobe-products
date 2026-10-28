# Running the samples

Pulling down the code samples during the Getting Credentials workflow is the fastest route to a working setup. Each bundle hands you ready-to-run sample code, a baked-in credential json file, and connections to dependencies already wired up.

1.  Download [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Build the sample project with Maven: `mvn clean install`.
3.  Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4.  Exercise the sample code from the command line.
5.  Lean on this document for how to run the samples, and on the API Reference whenever you need API specifics.

Running from the command line isn't required. You're free to pull the samples Maven project into whatever IDE you like (e.g. IntelliJ/Eclipse) and run the samples there instead.
