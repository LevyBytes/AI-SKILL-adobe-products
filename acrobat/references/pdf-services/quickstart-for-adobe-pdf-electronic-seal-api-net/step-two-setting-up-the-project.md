# Step Two: Setting up the project

1. Inside your Downloads folder, locate the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Unzipping that archive reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/quickstarts/dotnet/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a freshly made directory.

3. Within that new directory, add a file named `ElectronicSeal.csproj`. Declaring our requirements is one job of this file; it also helps spell out the application we're putting together.


What this file lays out is the set of dependencies required plus the way the application gets built.

Taking an Invoice PDF document, `sampleInvoice.pdf` (shipped with the sample project download), our application invokes the Acrobat Services API with sealing options set to their default appearance to stamp an electronic seal across the PDF and turn out an electronically sealed PDF.

4. Within your editor, open the folder where the credentials were copied earlier and the `csproj` file was created. Add a new file called `Program.cs`.

Now you're ready to begin coding.
