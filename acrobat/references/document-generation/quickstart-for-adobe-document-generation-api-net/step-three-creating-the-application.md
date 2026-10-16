# Step Three: Creating the application

1. Begin with the Word template itself. Opening the file in Microsoft Word reveals a number of tokens scattered across it (flagged by the `{{` and `}}` markers).

[Figure: Example of tokens](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot10.png)

Once the Document Generation API runs, it swaps those tokens for the JSON data passed to the API. The tokens handle plain substitutions — `{{Customer.Name}}`, for one, gives way to a customer's name supplied through JSON. Dynamic tables are on offer too. The table in the Word template leans on invoice items to render, on the fly, whichever items happened to be ordered. You can likewise apply conditions to reveal or conceal content, and you'll spot two such conditions near the document's close. On top of that, simple arithmetic can run dynamically as well, which is what drives the "Grand Total".

2. Moving on, here's the sample data we'll be working with:

[Complete sample invoice data](../examples/sample-invoice-data.json).

See how the tokens in the Word file line up with the values held in our JSON. Our example sticks with a fixed dataset kept in a file, though real-world applications are free to source their data from wherever they like. With that, let's dig into the code.

3. First off, we'll pull in the dependencies we need:

Complete example files:

- [Program.cs](../../pdf-services/examples/dotnet/generate-receipt-pdf/Program.cs)

4. Now let's define our main class and `Main` method:


5. Define the `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` environment variables by issuing the commands below, swapping the `YOUR CLIENT ID` and `YOUR CLIENT SECRET` placeholders for the credentials found in your `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

6. After that, we build our credentials and put them to work spinning up a PDF Services instance


7. With that done, we upload the asset and assemble the JSON data for the merge:


8. Next up, we put together the parameters along with the job:


What this block lays out is the operation we're running (a document merge, which is the SDK's term for Document Generation), aims it at our local JSON file, and declares the output as a PDF. It also references the Word file serving as the template.

9. This following block of code hands off the job and retrieves its result:


10. This next block writes the output out to the location you've specified:


Running this carries out the Document Generation process and afterward writes the produced PDF file onto the file system.

[Figure: Example running at the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot9.png)

Use the complete example files linked above.
