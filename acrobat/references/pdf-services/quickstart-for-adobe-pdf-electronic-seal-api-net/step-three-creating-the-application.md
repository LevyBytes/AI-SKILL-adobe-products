# Step Three: Creating the application

1. Let's open by pulling in the dependencies we rely on:

Complete example files:

- [Program.cs](../examples/dotnet/electronic-seal-with-appearance-options/Program.cs)
- [imports.cs](../examples/dotnet/electronic-seal-with-appearance-options/imports.cs)
- [configure-logging.cs](../examples/dotnet/electronic-seal-with-appearance-options/configure-logging.cs)
- [create-output-file-path.cs](../examples/dotnet/electronic-seal-with-appearance-options/create-output-file-path.cs)

2. With that done, we lay out our main class along with its `Main` method:


3. Run the commands below to set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, swapping the placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` for the credentials found in the `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. With that set, we go on to build our credentials together with a PDFServices instance:


5. With that ready, the asset gets uploaded:


6. After that, the document-level permission gets defined:


7. After that, we specify the seal field options:


8. Next up, a CSC Certificate Credentials instance gets created:


9. From here, we assemble the job by feeding the seal parameters the certificate credentials and field options, then attach the seal image asset:


This block of code spells out the task at hand (an Electronic Seal operation), sets the parameters driving the seal job, and supplies the input seal image asset.

10. Submitting the job and retrieving its result is what the next code block handles:


11. Writing the result out to the location you choose is what the next code block does:


The finished application in full (`Program.cs`):
