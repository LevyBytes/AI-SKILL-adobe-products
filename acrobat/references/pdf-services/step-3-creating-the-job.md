# Step 3 : Creating the job

Build the job by passing the `assetID` you picked up in Step 2 into the API request body. A successful submission returns status `201` along with a `location` response header that you'll poll against later.

The exact request shape for each operation is documented in its own [PDF Operation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md) API spec.

**Choose your operation endpoint:**

- **For JSON output (Extract PDF):** Use the `/operation/extractpdf` endpoint
- **For Markdown output (PDF to Markdown):** Use the `/operation/pdftomarkdown` endpoint

[Extract PDF API Reference](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.extractpdf) | [PDF to Markdown API Reference](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.pdftomarkdown)
