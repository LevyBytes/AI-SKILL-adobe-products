# Security, Status, Support

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_security_md — Security; raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_status_md; Technical Support — Version Support Policy.

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_security_md — Security

Keeping your digital experiences secure matters to us at Adobe. Security thinking runs through the tools and the processes our teams use for software development and operations, and our cross-functional groups follow it closely so that incidents get prevented, spotted, and handled quickly. On top of that, working alongside partners, prominent researchers, security research bodies, and other industry groups keeps us current on emerging threats and vulnerabilities, and we routinely fold advanced security methods into the products and services we ship.

### Acrobat Services APIs Hosting and Security

Every server-side piece of the PDF Services API and the PDF Embed API runs inside Adobe Document Cloud, which sits on AWS cloud infrastructure across the US-East and EMEA regions. Where their documents get processed is a choice customers make.

Components that anyone can reach and download — Acrobat Services SDKs and JavaScript libraries among them — live on whichever providers fit the component, such as library repositories and CDNs.

### Data Encryption

Anything moving in transit is protected with TLS 1.2 or higher.

### Acrobat Services API Security

### Authentication

Service Account authentication is what the Acrobat Services APIs rely on. To dig into this authentication type, see the OAuth Server to Server credential section of the authentication guide here [Adobe I/O Authentication Overview](https://www.adobe.io/developer-console/docs/guides/authentication/).

### User-Generated Content Storage

User-generated content (UGC) is something the PDF Services API both takes in and sends back. As part of routine service operations, that content gets uploaded to Adobe Document Cloud and held in a temporary cache.

### PDF Embed API Security

### Authentication

Built on client-side JavaScript and WASM, the PDF Embed API library reaches out to cloud-based services in only three cases:

- Checking, at load time, the client ID set in the JavaScript code;
- Recording anonymous usage data in Adobe Analytics that Adobe uses internally to improve products and gather feedback.
- Recording event data for out-of-the-box analytics and a pre-built analytics dashboard, which is strictly opt-in and happens only when the developer configures it explicitly. It kicks in when the PDF Embed API integrator supplies an Adobe Analytics report suite ID.

### Iframe Security

PDF Embed API does its core work inside a sandboxed HTML iframe, an arrangement that keeps any flaw in the library from reaching the host site and the other way around too. It likewise blocks unintended access to and tampering with the document object model (DOM) across the iframe boundary.

### Content Security Policy (CSP)

Whatever loads inside the iframe is bound by CSP directives, which guard against several attack types, cross-site scripting (XSS) among them.

### Content Storage

Cloud storage of content is not something the PDF Embed API handles. What it mainly does is load and render PDF files the customer provides and, on request, save a copy of the open file to a local drive or external storage. Whether the documents are controlled or stored comes down to the website's or the browser's own access controls over the PDF file.

### Details on User-Generated Content Storage

### Interacting with the API

Adobe Acrobat Services APIs bundle together a number of services that each tackle a particular problem fast while also driving multi-step document workflows. Through them you reach the foundational PDF services — creating, securing, compressing, converting, combining, and splitting PDFs — plus more capable ones such as the Document Generation API and the PDF Extract API.

Getting to the Acrobat Services can happen in several ways: through our REST API, through one of our SDKs for Node.js, Java, Python, or .NET, or through the Microsoft Power Automate, Workfront Fusion, and UiPath connectors. Below, this section walks through the transient storage options tied to each of those usage methods.

By default, anything uploaded as an asset or produced as output by the API stays in Adobe Document Cloud for 24 hours. Worth noting: that asset can be reached only by the developer working under the same credential it was generated with, or through the signed URL the API hands back. No API exists for listing the assets that are available.

### Acrobat Services Data Flow Diagram

How data usually travels between the customer's environment and Adobe Document Cloud is shown in the diagram below.

[Figure: Data Flow Diagram](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/data-flow.png)

### Data Flow Narrative:

### Step 1: Get Access Token Using Credentials

a. Request Platform API for Generating the Access Token - At this stage an authentication token is acquired using valid credentials. Usually that means handing the server authentication details such as a client_id and client_secret, and the server then issues the token. From there the token drives authorization and grants access to resources.
Passing identifiers like a client_id and client_secret to the server prompts it to mint the token, after which that token underpins the authorization and resource access that follow.

b. Received Access Token To Client - With the token generated in the prior step, Acrobat Services sends it back to the client. The client then uses it to authenticate the API requests that follow. Think of the access token as a digital key that lets its holder reach protected resources on behalf of whoever — user or application — obtained it.

### Step 2: Get the URL to Upload Input File

a. Request for Upload URL - At this point the client asks for a particular URL meant for uploading files. That URL is where the file has to be sent to be stored.

b. Receive a URL For Upload - This refers to the real URL handed back by Acrobat Services. It marks the spot where the file will be uploaded, and it is essential for kicking off the upload in the steps that follow.

### Step 3. Upload Input File to Storage

a. Read Input File from Client Storage - Here the client system pulls the input file from its designated storage spot. That spot might be a local file system, a cloud storage service, or any other medium in the client ecosystem where the input file lives.

b. Upload Input File to Acrobat Services Transient Storage - With the input file in hand, it gets uploaded to transient storage through the URL Acrobat Services supplied. Transient storage generally means temporary space used for short-lived work such as processing or transformation.

### Step 4. Submit a Request to Perform Operation

a. Submit a Request to Platform Service - Once the input file is in place, the client sends the PDF service a request to carry out the wanted operation — create pdf, export pdf, and the like. That request carries whatever parameters or instructions the operation needs to run.

b. Received Job URI For Poll - With the request successfully submitted to Acrobat Services, the client gets back a job URL in the location response header. Since the Platform API works asynchronously, the client has to use that job URL to poll for the response until the result lands.

### Step 5. Upload Output File upon Operation Completion

When the PDF service finishes the requested operation, the resulting output file is produced. That output file then gets uploaded to a chosen location, set for retrieval and any further handling.

### Step 6. Poll for Response

a. Poll Request - Because the Platform API is asynchronous, the client, after getting the job URL, must use it to poll for the response until the result arrives.

b. Output Response (URL to download output file) - As soon as processing wraps up and the result is ready, the client receives a response carrying a URL through which the output file can be downloaded. That URL usually points at the spot where the output file is held for the time being.

### Step 7. Download/Save Output File

a. Download File Using URL - Armed with the URL from the prior step, the system goes ahead and downloads the output file from the AWS storage hosting it. This makes sure the processed output is fetched and ready for whatever comes next, whether further action or distribution.

b. Write Output File into Storage - With the output file downloaded, it then gets written or saved into the chosen storage location. Doing so keeps the processed output persisted and within reach for later reference or use.

### Step 8. Delete Asset (Optional)

a. Submit Delete Asset Request - As an optional move, this step removes the input asset or any other assets tied to the processing job. Clearing assets keeps storage usage tidy while upholding data privacy and security. The client asks the Platform service to delete the file linked to the assetId.

b. Delete Asset from Cloud Storage - Once the delete request comes in, Acrobat Services removes the file tied to the asset from cloud storage. That keeps unneeded files or data out of the system, cutting down on clutter and on possible security risks.

### Adobe Acrobat Services REST API

The widest range of storage choices comes from calling the REST API directly. With most of the Acrobat Services, you needn't upload or download assets to Adobe Document Cloud at all. Developers can "bring their own storage" by way of signed URLs. The REST API can also wipe assets that were uploaded to or generated by Acrobat Services the moment they are no longer wanted, via the [Assets endpoint with the DELETE verb](https://developer.adobe.com/document-services/docs/apis/#tag/Assets/operation/asset.delete).

Reaching files straight from the client's external storage is something the Acrobat Services APIs support. By calling the APIs with signed URLs, the client lets the files be accessed automatically from that external storage. A signed URL grants temporary access to a resource. Because signed URLs carry user/authentication information, systems lacking credentials can still reach the resource in question. For input and output files alike, PDF Services APIs accept signed URLs in the request body.

**Supported External Storage Solutions**

Signed URLs are a shared idea across many cloud storage solutions for both downloading and uploading files. At present, the Adobe PDF Services APIs work with signed URLs generated by the external storage providers below.

- Microsoft SharePoint
- Amazon S3
- Dropbox
- Microsoft Azure Blob

**Adobe PDF Services SDKs**

Since the PDF Services API is REST-based, any language with HTTP support will do for developers. That said, SDKs come ready for Java, .NET, Node.js, and Python as well.

**Version 3.x.x SDKs:**

With the .NET, Node.js, and Python SDKs, every document uploaded as an asset or produced as output by the API stays on the servers for 24 hours. Bear in mind that the asset can be reached only by the developer working under the same credential it was generated with, or solely through the signed URL the API supplies. There is no API for listing the assets that are available.

**Version 4.x.x SDKs:**

Version 4.0.0 of the Java SDK brings new interfaces that draw fully on the power of the PDF Services REST APIs. Just like those REST APIs, it works with external storage and can delete assets from the Adobe servers right after processing.

**Adobe PDF Services connector for Microsoft Power Automate**
Assets uploaded through the Adobe PDF Services connector for Microsoft Power Automate get deleted automatically once they have been processed in Adobe Document Cloud.

### Processing Secured PDF Files

### PDF Document Security and Permissions

Through PDF document security and permissions, whoever creates the PDF holds onto control of the document and the rights that go with it. Access to a PDF can be narrowed by applying passwords and by locking down certain features such as printing, commenting, and editing. There are two kinds of passwords:

**Document open password**: Also called a user password, a document open password makes the user enter a password to open the PDF.

**Permissions password**: Also called an owner password, a permissions password guards changes to the permission settings. With one in place, you can restrict printing, editing, and copying content in the PDF. No password is required of recipients who simply want to open it in Acrobat, in Acrobat Reader, or in any other conforming PDF reader.

When a PDF carries both password types, either one will open it. Still, only the permissions password lets the user alter the restricted features.

The use of the Adobe PDF Services API can be affected by both password types.

### Processing PDF files that require a password to open (User Password)

The PDF Services API cannot work with PDF files locked behind an open password. When the password is known and the PDF author has allowed it, run the Remove Protection API first to strip the security off those PDF files before handing them to one of the other Acrobat Services.

### Processing PDF files that have restricted permissions (Owner Password)

Apart from the cases below, Acrobat Services cannot work with PDF files that carry any security setting permitting or denying functionality in conforming PDF readers.

**Extract API**: Extract API cannot work with PDF files whose security settings block content copying. In that case the call comes back with a statusCode of 400 and the errorCode '`DISQUALIFIED_PERMISSIONS`'.

[Figure: CopyNotAllowed](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/copy-not-allowed.png)

**PDF to Images**: PDF to Images API cannot work with PDF files whose security settings block content copying, page extraction, document assembly, or printing.

### Detecting PDF Permissions

When the password is known and the document owner has allowed it, run the [Remove Protection API](https://developer.adobe.com/document-services/docs/apis/#tag/Remove-Protection) to strip the security from those PDF files before handing them to one of the other Acrobat Services.

Where that isn't an option, developers can read the permissions on a PDF file with the [PDF Properties API](https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Properties). What PDF Properties returns is a JSON object holding a "security_info" key nested inside a "permissions" key. That JSON mirrors what shows up in the Security Tab of the Acrobat Document Properties dialog.

```yaml
"permissions":
  {
    "assistive_technology": false,
    "form_filling": false,
    "copying": false,
    "page_extraction": false,
    "document_assembly": false,
    "commenting": false,
    "printing": "none",
    "editing": false,
  }
```

[Figure: NoPermission](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/no-permission.png)

### The Effect of PDF Permissions on Adobe PDF Services API

Other than when the PDF Extract API and the Export PDF API turn PDFs into images, Acrobat Services will not process PDF files holding any permission set to false, and they return a 400 error.

When "copying" is set to true, PDF Extract API will go ahead and process the PDF.

Export PDF API will run the PDF-to-images conversion once "copying", "page_extraction", "document_assembly", and "printing" are all true.

### raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_security_md — Privacy

How Adobe handles privacy across its Services and Software — as those are defined in our General [Terms of Use](https://www.adobe.com/legal/terms.html) — is laid out in the Adobe Privacy Policy, which also governs anywhere we show or point to this policy. For the full picture, head to this [page](https://www.adobe.com/privacy/policy.html).

### raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_security_md — Compliance

Built to stay [open and flexible](https://www.adobe.com/trust/compliance/adobe-ccf.html), our framework shifts with ever-changing standards and regulations so that compliance holds steady across all our products and services. For more, take a look at this [link](https://www.adobe.com/trust/compliance/compliance-list.html).

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_status_md

To check where all of our API services stand right now, head to the [System Status page](https://status.adobe.com/products/512699).

## Technical Support — Version Support Policy

### SDK Support

Running the newest product version (Major.Minor.Patch) is what Adobe always suggests, since it brings the most capability and the strongest security. So that existing applications which need time to migrate aren't left behind, the SDK team holds to a support policy that keeps deployed versions running securely along these lines:

- Each Major/Minor Version stays supported for a year past the release of the next Major/Minor Version — put another way, a Major.Minor.X version hits end of life one year after the following Major/Minor Release. As an example, given releases of 1.2.0 (Minor), 1.3.0 (Minor), and 2.0.0 (Major) in that order:
  - 1.2.0 loses support a year after 1.3.0 ships.
  - 1.3.0 loses support a year after 2.0.0 ships.
- Security patches and critical bug fixes generally land on the final dot release of the supported major versions. For instance, with supported versions of 1.2.1, 1.3.1, and 2.0.0, only 1.3.1 and 2.0.0 would get a security update. The recommended practice is to move any deployment on a supported major release up to that release's last minor update.

After a version passes its end-of-life date, its features can be deprecated and may quit working.

![Every Major/Minor Version is supported for one year after the
release of a newer Major/Minor Version; that is a Major.Minor.X
version reaches its end of life 1 year after the next Major/Minor
Release](./images/support1.png)

### Public API Support

As our APIs evolve, a fresh API version can introduce non-backward-compatible changes, and we suggest taking up a new version as soon as it lands. Whichever API version came before stays supported for one year past the release of a new one. Adobe will make reasonable commercial efforts to give 12 months' notice before deprecation, unless special circumstances call for a shorter window. Such notices get refreshed now and then right here, and checking for those updates periodically is solely your responsibility. Past the deprecation notice, the service receives no further enhancements. Adobe keeps the right to change, deprecate, or retire the service, whether in full or in part, whenever it chooses.

Once a version crosses into end of life, the functionality it offered may be retired and cease to operate.
