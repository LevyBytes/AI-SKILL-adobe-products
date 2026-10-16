# Step 6 : Creating the job

Submit the `assetID` you got back in Step 5 inside the API request body to kick off the job for this operation. A successful submission returns status code `201` together with a `location` response header, and that header is what you poll against later.

The matching API spec for whichever [PDF Operation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md) you are running explains how to build the job request.
