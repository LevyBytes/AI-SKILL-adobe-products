# SDK

SDKs for widely used languages — Node.js, Java, Python and .NET — also give you access to the PDF Services API.

Add these hostnames to your allow-list before you put the Adobe PDF Services SDK to use:

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

- Using United States (Default) region for processing documents:
  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)
- Using Europe region for processing documents:
  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

For clients using SDK version upto 2.x:

- cpf-ue1.adobe.io
