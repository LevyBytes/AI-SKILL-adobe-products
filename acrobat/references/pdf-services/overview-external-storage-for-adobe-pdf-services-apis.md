# Overview - External Storage for Adobe PDF Services APIs

Reaching files straight from a client's own external storage is now possible with Adobe PDF Services APIs. By calling the PDF Services API with Signed URLs, the client lets files be pulled automatically from wherever they are stored.

Access to a resource for a limited window is what a **Signed URL** grants. Because user and authentication details are baked into them, Signed URLs let people who hold no credentials still reach the resource in question.

Within the request body, PDF Services APIs accept signed URLs for both input and output files. For the full picture, check the **External Section** under the Request Body of whichever API you are calling.
