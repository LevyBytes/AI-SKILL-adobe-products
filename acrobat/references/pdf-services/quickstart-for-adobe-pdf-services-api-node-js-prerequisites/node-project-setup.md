# Quickstart for Adobe PDF Services API (Node.js) — Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-Node.jsSamples.zip. Extracting it reveals a samples folder plus the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` into a directory you've just made. Bear in mind that these credential files matter and belong somewhere safe.

3. From the command line, switch into the directory you set up, then spin up a fresh Node.js project using `npm init -y`

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot7.png)

4. Pull in the Adobe PDF Services Node.js SDK by running `npm install --save @adobe/pdfservices-node-sdk` at the command line.

5. Add a package that helps us handle ZIP files. Run `npm install --save adm-zip`.

By now we've pulled in the Node.js SDK for the Adobe PDF Services API as a project dependency and brought our credential files over.

The PDF our application works on is `Bodea Brochure.pdf` (grab it from [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)), and the goal is to turn it into a Microsoft Word document named `Bodea Brochure.docx`.

6. Inside your editor, open the directory where you copied the credentials earlier. Add a new file, `export.js`.

With that, coding can begin.
