# Step 4 : Fetching the status

With the job created, take the `location` value returned in the Step 3 response header and poll it with the API shown here.

**Status polling endpoints:**

- **For Extract PDF (JSON):** `/operation/extractpdf/{jobId}/status`
- **For PDF to Markdown:** `/operation/pdftomarkdown/{jobId}/status`

A fuller writeup of this API is [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.extractpdf.jobstatus).

## Step 4 : Fetching the status

After the job has been created successfully, poll the `location` handed back in the Step 3 response header, calling the API below.

Fuller detail on the API is available [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.jobstatus).
