# 3. Generate PDF and Word documents using Document Generation API

With both the Word-based document template and the JSON data in hand, what remains is to call the Document Generation API so it produces the resulting PDF or Word documents.

The Document Generation API can be reached through two routes:

**3.1. REST API**

Documents can be generated through our cloud-based [REST API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation).

To get going with the REST API, consult [How To Get Started](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md), which covers generating the credentials you need and calling the APIs.

**3.2. REST API with External Storage**

Direct access to client files held in external storage is now possible with the Adobe Document Generation API. By passing Signed URLs from their storage solution, clients can readily reach and work with their files via the Document Generation API.

For the full details, head to [External Storage for Adobe PDF Services APIs](../../pdf-services/overview-external-storage-for-adobe-pdf-services-apis.md).

**3.3. PDF Services SDK**

As another option, our offering is available through the [PDF Services SDK](../../pdf-services/sdk/electronic-seal/reference-index.md).

For a starting point with the PDF Services SDK, see [Quickstarts](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/index.md).

Add the hostnames listed below to your allow-list before you use the Adobe PDF Services SDK:

- ims-na1.adobelogin.com (Required for all the clients)

For clients using SDK version 4.x and above:

- Using United States (Default) region for processing documents:

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- Using Europe region for processing documents:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ew1.adobe.io

For clients using SDK version 3.x and above:

- Using United States region for processing documents:

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- Using Europe region for processing documents:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

For clients using SDK version up to 2.x:

- cpf-ue1.adobe.io
