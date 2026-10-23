# Step Three: Creating the application

1. The first thing to pull in is the set of dependencies we rely on:

Example setup and source:

- [extract-first-level-headings setup and source](../examples/dotnet/extract-first-level-headings/extract-first-level-headings-setup.md)

2. Now let's define our main class and `Main` method:


3. Define the `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` environment variables: run the commands below, swapping the `YOUR CLIENT ID` and `YOUR CLIENT SECRET` placeholders for the credentials that live in your `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. With that done, we build the credentials and hand them to a new PDF Services instance:


5. Next, push the asset up:


here we name the PDF that gets extracted. (That source, `Adobe Extract API Sample.pdf`, ships with the .NET sample project.) A production application would normally supply these values dynamically.

6. With that uploaded, build the job:


This block declares the operation we're running (an Extract) and sets up the parameters for that Extract job. Several options exist for PDF Extract API, but here we stick to the simplest extraction of all — just the document's text content.

7. This following block hands the job off and collects what comes back:


Running this carries out the extraction and retrieves the result zip's content as a stream asset.

8. This following block writes the result out to the path we name:


9. At this point we crack open the ZIP, locate the JSON output inside, and decode it:


10. Lastly, we walk the results and print each element found to be an `H1`:


[Figure: Example running in the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot9.png)

Use the complete example files linked above.
