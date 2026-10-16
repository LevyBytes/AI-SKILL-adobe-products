# SDK

Beyond REST, the PDF Services API can be driven from SDKs in widely used languages including Node.js, Java and .NET.

Allow-list the hostnames below before you put the Adobe PDF Services SDK to work:

- ims-na1.adobelogin.com (Required for all the clients)

On SDK version 3.x or newer:

- When documents are processed in the United States (the default region):

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- When documents are processed in the Europe region:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

On SDK versions through 2.x:

- cpf-ue1.adobe.io
