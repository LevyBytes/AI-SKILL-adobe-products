# Pdf Extract Api — Gettingstarted (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk

### Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup, since they bundle ready-to-run code, a baked-in credential json file, and dependency connections that are already configured.

1. Download and extract the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Copy the downloaded zip to the directory that you set up for this project and unzip the files there.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Go to the project directory (which contains `requirements.txt` file) and setup a virtual environment.

```
pip install virtualenv
python -m venv myenv
source myenv/bin/activate # on windows, use `myenv\Scripts\activate`
```

5. Now build the sample project using this command in terminal: `pip install -r requirements.txt`.
6. Test the sample code on the command line.
7. Refer to this document for details about running samples as well as the API Reference for API details.
8. You can import the samples into your preferred IDE and run the samples from there or run the commands from the README.md file in terminal.

### Verifying download authenticity

You might want to validate that the installer is genuine for security purposes. If so:

1.  After downloading the package zip, run following command

```
pip hash <download_dir>/pdfservices-sdk-4.2.0.tar.gz
```

1.  Above command will return the hash of downloaded package.
2.  Verify the hash matches the value published here.

```
378afa7d3b22683264a1817393932a649b98e4d4b3913816f839de240f7132d5
```

### To extract data from the sample PDF file

```
python src/extractpdf/extract_text_table_info_with_renditions_from_pdf.py
```

Note: those commands operate on the “extractPdfInput.pdf” input found in the “src/main/resources” directory and write their result into the project's “output” directory; should the output files already be present, the commands raise an error.

The SDK ships with other sample programs too, letting you experiment with API options such as producing a tagging report and promoting headings so that only the document title stays at H1.

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk — Public API

Adobe-supplied credentials are required to authenticate, and you can reach the PDF Services API directly over its REST endpoints. After you've worked through the [Getting Credentials](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api) workflow, a zip file lands on your machine whose contents differ according to whether you opted in to personalized code samples. Here is how the zip is laid out:

- **Personalized Download**: Hands you a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Hands you just the `pdfservices-api-credentials.json`, pre-filled with your credentials.

You can launch the bundled samples straight from the zip once you've defined the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, which you set with these commands:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

**Example pdfservices-api-credentials.json file**

```json
{
  "client_credentials": {
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```
