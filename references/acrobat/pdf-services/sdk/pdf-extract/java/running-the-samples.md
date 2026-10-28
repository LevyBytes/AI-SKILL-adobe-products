# Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup, since they bundle ready-to-run code, a baked-in credential json file, and dependency connections that are already configured.

1.  Download [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Build the sample project with Maven: `mvn clean install`.
3.  Set the environment variables `PDF_SERVICES_CLIENT_ID` and `CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4.  Test the sample code on the command line.
5.  Refer to this document for details about running samples as well as the API Reference for API details.

You aren't obligated to run things from the command line. Feel free to pull the samples Maven project into whatever IDE you like (e.g. IntelliJ/Eclipse) and execute the samples there.
