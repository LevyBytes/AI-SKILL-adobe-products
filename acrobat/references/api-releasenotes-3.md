# Releasenotes

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

### Versioning scheme

Version strings for the SDK follow a \#.\#.\# shape (for instance 1.1.0), where the three digits map respectively to a major release, a minor release, and a patch/update — in other words Major.Minor.Patch. Here is how each tier is defined:

- **Major Releases (1.x.x)**: A major release brings backward-incompatible shifts to the APIs and interfaces, and it kicks off the EOL countdown for every release that came before. Plan to move your code over before the prior major release hits its end of life.
- **Minor Releases (x.1.x)**: These usually ship on a quarterly cadence. Everything stays backward compatible with the most recent major release. New interfaces arrive here; older ones keep working, though some may be marked deprecated, and anything deprecated gets pulled in a later major release.
- **Patch Releases (x.x.1)**: A patch ships only when a critical security or bug fix is required. Whatever a patch contains is folded into the following minor release, letting developers pick up and deploy the updated code on a schedule that suits their own business needs.

## Version - Support policy — Public API

### Versioning

Per the [Public API
Docs](../apis/index.md),
every operation carries its own distinct assetId, supplied through Form Parameters. The usual approach is to extend an API while preserving backward compatibility. When a capability simply cannot grow without introducing breaking changes, a fresh version ships carrying its own unique assetId. Details about which older API versions remain supported are published on the [Public API
Docs](https://documentcloud.adobe.com/document-services/index.html)

One more thing to keep in mind: the PDF Extract API produces its output through a machine learning pipeline that gets retrained often to sharpen how it infers a document's layout and structure. Because of that, the shape of the output is not expected to shift from one version to the next, yet individual results can differ as the model's predictions get better.

## Version - Support policy — Supported versions

Both this document and the URLs across Adobe's website and the rest of the documentation point at the most recent product version.

**Note**: Repository asset links (for example GIT, Maven, and so on) land on the top-level directory. If you want assets that line up with a particular documentation version, browse to the matching version first. To illustrate, while reading the 1.0.0 Java documentation, the 1.0.0 samples can be located in the GIT repo this way:

1.  Go to the [GIT repo](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Select _Releases_.
3.  Select and download the needed release.

[Figure: Previous Release tags with release notes and links to the assets](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/prevrelease.png)

## Version - Support policy — Migration Guide to PDF Services SDK

To move onto PDF Services SDK version 3.4.0, consult the table that follows; the Samples (
[Java](https://www.adobe.com/go/pdftoolsapi_java_samples), [Node
JS](https://www.adobe.com/go/pdftoolsapi_node_sample),
[.NET](https://www.adobe.com/go/pdftoolsapi_net_samples)) are another reference point for the most recent release.

End of Life for the 1.X.X line of the PDF Tools SDK arrives in May 2022. After a version passes that point, its functionality may be deprecated and could cease to work. Moving up to the newest SDK version is strongly advised.

### Java changes

- `artifactId` changed from `pdftools-sdk` to `pdfservices-sdk`
- Replace the `<properties>` tag and SDK `<dependency>` tag in your project's `pom.xml` file with the following:

```javascript
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <pdfservices.sdk.version>4.3.0</pdfservices.sdk.version>
    <pdfservices.sdk.samples.version>4.3.0</pdfservices.sdk.samples.version>
</properties>

<dependency>
    <groupId>com.adobe.documentservices</groupId>
    <artifactId>pdfservices-sdk</artifactId>
    <version>${pdfservices.sdk.version}</version>
</dependency>
```

- Update import statements as per new Package structure. For e.g.

```javascript

```

### Node JS changes

- NPM package name changed from `@adobe/documentservices-pdftools-node-sdk` to `@adobe/pdfservices-node-sdk`
- Update the latest SDK dependency in package.json file of your project

```javascript
"@adobe/pdfservices-node-sdk": "4.1.0"
```

- Require the `@adobe/pdfservices-node-sdk` in the Sample file to access the SDK interface

```javascript
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
```

For HTML to PDF Conversions, the PageLayout object is moved inside html object. To access the PageLayout interface use the following code:

```javascript
const pageLayout = new PDFServicesSdk.CreatePDF.options.html.PageLayout();
```

### .NET changes

- Nuget package name changed from `Adobe.DocumentServices.PDFTools` to `Adobe.PDFServicesSDK`
- Update the SDK dependency in your project's .csproj file with the following:

```javascript

```

- Update the namespaces accordingly in your .cs file as per the new dependency:

```javascript
using Adobe.PDFServicesSDK;
```

### Python changes

- Add the following dependency in your project's requirements.txt file:

```javascript
pdfservices-sdk~=4.1.0
```

## Version - Support policy — Archived Documentation

You can reach the previous major version of our documentation [here](api-legacy-documentation.md).

## Version - Support policy — Change types

The categories of change break down as follows:

- **New**: Capabilities or implementation work introduced in the present release.
- **Changed**: Reworked code that alters how a feature or implementation detail behaves.
- **Security**: A fix for a bug or vulnerability shipped through an out-of-band patch.
- **Deprecated**: Functionality whose support is winding down or has already stopped.

Each Minor and Patch release stays backward compatible with the one before it. Moving up to the newest SDK shouldn't disrupt applications you already have running.

## Version - Support policy — Change history

### September 29, 2025; .NET SDK 4.3.1 patch release

- Bug fixes and stability improvements.

### July 10, 2025; Python SDK 4.2.0 Release

- The PDF Services Python SDK now exposes [Export PDF Form Data](api-howtos-4.md) and [Import PDF Form Data](api-howtos-4.md), so users can pull data out of forms and write data back into them.

### May 22, 2025; .NET SDK 4.3.0 Release

- The PDF Services .NET SDK gained [Export PDF Form Data](api-howtos-4.md) and [Import PDF Form Data](api-howtos-4.md), letting users read out and fill in form data.

### May 12, 2025; Python SDK 4.1.1 Release

- Trimmed the runtime dependency footprint (setuptools) to make installation leaner.
- Hardened XML handling by switching to a secure XML parser.

### April 30, 2025; Adobe Document Generation Server Side Release

- Text indentation styles are now handled in the Document Generation API.
- Text alignment styles are now handled in the Document Generation API.
- Fixed a defect that duplicated content when paragraphs, lists, and tables were involved.

### April 25, 2025; Adobe Document Generation Server Side Release

- Resolved font inconsistencies that showed up in content around tables.
- Superscript and Subscript are now available in the Document Generation API.
- The Document Generation API can now detect heading tags and render them.
- Put in a temporary fix for the file corruption problem.

### April 22, 2025; Java SDK 4.3.0 Release

- The PDF Services Java SDKs picked up [Export PDF Form Data](api-howtos-4.md) and [Import PDF Form Data](api-howtos-4.md), so users can extract and populate form data.
- The Excel to PDF operation can now convert just the active sheet rather than the whole workbook.
- The Create PDF operation now honors pageRange across every supported file format, making page-by-page conversion possible.
- A `waitTimeToLoad` option arrived in the HTML to PDF operation, letting users cap the wait (in milliseconds) before the PDF is finalized.

### March 03, 2025; Adobe Document Generation Server Side Release

- Fixed how conditional-sections behave when used.

### February 24, 2025; Adobe Document Generation Server Side Release

- Charts landed in the Document Generation API, so users can drop in a range of charts on the fly.

### February 21, 2025; .NET SDK 4.2.0 release

- The Excel to PDF operation can now convert only the active sheet instead of the full workbook.
- The Create PDF operation now supports pageRange for all supported file formats, enabling page-selective conversion.
- A `waitTimeToLoad` option came to the HTML to PDF operation, letting users set the longest wait (in milliseconds) before the PDF is finalized.

### February 17, 2025; Adobe Document Generation Server Side Release

- Footnote phrases are now supported in the Document Generation API.

### February 4, 2025; Server Side Release

- The PDF Services API gained an [Export PDF Form Data API](api-howtos-4.md) operation that pulls data from a PDF form and hands it back as a JSON file.
- The PDF Services API gained an [Import PDF Form Data API](api-howtos-4.md) operation that fills PDF forms from JSON data and produces the finished PDF.

### November 06, 2024; Adobe Document Generation Server Side Release

- Capped tag length at 1000 characters within the Document Generation API.

### November 06, 2024; Java SDK 4.2.0 and NodeJS, .NET, Python SDK 4.1.0 minor release

- PDF Watermark and PDF Accessibility Checker operations are now open to every user across the PDF Services SDKs.

### October 1, 2024; Java SDK 4.1.1 patch release

- Bug fixes and stability improvements.

### September 10, 2024; Adobe Document Generation Server Side Release

- Broadened [JSONata functions](api-document-generation-api-5.md) support inside Table Tag with Markers.

### August 23, 2024; Added new features for Document Generation API and updated Acrobat Service API postman collection

- base64-encoded inline images are now supported.
- Added attribute support for the img tag (height and width only).
- Postman collection covering external storage: Electronic Seal, Extract, Split, Accessibility Checker.
- Included a request body schema with an example for the accessibility checker using external storage.

### July 30, 2024; PDF Accessibility Checker API Added

- The PDF Services API gained a [PDF Accessibility Checker](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/pdf-accessibility-checker-api.md) operation that checks accessibility on chosen pages of a PDF document.

### July 22, 2024; .NET SDK 4.0.0 major release

- Shipped Adobe PDF Services .NET SDK v4.0.0, with new interfaces that draw fully on the capabilities of the new PDF Services REST APIs.
- Brought in delete asset, refresh download URI, and webhook notifiers.
- Cut out the need for storage to hold intermediate results by dropping the dependency on temporary storage.
- Widened I/O reach by adding external storage for PDF Services operations.
- Made it possible to reach the Internet via Proxy, with proxy server settings configurable through "proxyServerConfig" in the client config.
- Reworked the PDF Properties operation so it returns a PDFProperties object alongside the JSON string.
- Reworked the Extract PDF operation so it returns content and resource assets alongside the content JSON object.

### July 16, 2024; Server Side Release - Get PDF Properties

- Bug fixes [Get PDF Properties](api-howtos-5.md) corrected a data problem tied to permissions in the JSON response.

### July 09, 2024; Server Side Release

- The PDF Services API gained a [PDF Watermark](api-pdf-watermark-api.md) operation that stamps a watermark onto chosen pages of a PDF document.

### June 12, 2024; NodeJS SDK 4.0.1 patch release

- Bug fixes and stability improvements.

### June 05, 2024; .NET SDK 3.5.1 patch release

- Bug fixes and stability improvements.

### June 04, 2024; Java SDK 4.1.0 minor release

- Carried external storage and notifier config support across to every operation.

### May 22, 2024; Python SDK 4.0.0 major release

- Shipped Adobe PDF Services Python SDK v4.0.0, with new interfaces that draw fully on the power of the new PDF Services REST APIs.
- Added coverage for every operation the Adobe PDF Services APIs drive.
- Brought in asset deletion and webhook notifiers.
- Dropped the need to store intermediate results for chained operations by ending reliance on temporary local storage.
- Widened I/O reach by adding external storage for PDF Services operations.
- Made it possible to reach the Internet via Proxy, with proxy server settings configurable through Proxy Server Config.

### May 15, 2024; .NET SDK 3.5.0 minor release

- Added a client-config switch to turn "configureAwait" on or off, so developers can decide whether asynchronous continuations run on the original synchronization context. **Note**: As of the next major release, "configureAwait" will default to disabled and will no longer be configurable.

### April 30, 2024; Adobe Document Generation Server Side Release

- Added the ability to [discard the row in a horizontal table](api-document-generation-api-4.md) within the Document Generation API.

### April, 2024; NodeJS SDK 4.0.0 major release

- Shipped Adobe PDF Services Node SDK v4.0.0, with new interfaces that draw fully on the power of the new PDF Services REST APIs.
- Brought in delete asset and webhook notifiers.
- Cut out the need for storage to hold intermediate results by dropping the dependency on temporary storage.
- Widened I/O reach by adding external storage for PDF Services operations.
- Made it possible to reach the Internet via Proxy, with proxy server settings configurable through "proxyServerConfig" in the client config.
- Reworked the PDF Properties operation so it returns a PDFProperties object alongside the JSON string.
- Reworked the Extract PDF operation so it returns content and resource assets alongside the content JSON object.

### April, 2024; Server Side Release

- Added [Webhook Notification](api-webhook-notification.md) support to PDF Properties.
- Added [External Storage](api-howtos-5.md) support to Extract PDF, Split PDF, PDF Electronic Seal, and Auto-Tag PDF.
- Added [Webhook Notification](api-webhook-notification.md) support for external storage operations.

### March, 2024; Python SDK 2.3.1 patch release

- PDF operations now allow configurable timeouts.

### February, 2024: .NET SDK 3.4.1 patch release

- Upgraded dependent libraries and cleared up compatibility issues with RestSharp v110+.

### January, 2024; Java SDK 4.0.0 major release

- Shipped Adobe PDF Services Java SDK v4.0.0, with new interfaces that draw fully on the power of the new PDF Services REST APIs.
- Brought in delete asset, refresh download URI, and webhook notifiers.
- Cut out the need for storage to hold intermediate results by dropping the dependency on temporary storage.
- Widened I/O reach by adding external storage to most PDF Services operations.
- Reworked the PDF Properties operation so it returns a PDFProperties object alongside the JSON string.
- Reworked the Extract PDF operation so it returns content and resource assets alongside the content JSON object.

### January, 2024; Server Side Release

- Added [Webhook Notification](api-webhook-notification.md) support across every operation **except** PDF Properties.

### January, 2024: Adobe Document Generation Server Side Release

- Added [Table Tag with Markers](api-document-generation-api-4.md) support to the Document Generation API.

### December, 2023: Java SDK 3.5.1 patch release

- Upgraded dependent libraries and cleared up compatibility issues with Spring Boot v3.x.

### October, 2023: Java SDK 3.5.0 minor release

- Brought document-level permissions and trusted timestamping (via [supported TSAs](api-pdf-electronic-seal-api.md)) to the Java SDK for the [PDF Electronic Seal API](api-pdf-electronic-seal-api.md).

### October, 2023; Adobe Document Generation Server Side Release

- Performance Improvements - Available in [REST API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation) and SDK(s) v3.0.0 and above.

### August, 2023; Server Side Release

- Brought document-level permissions and trusted timestamping (via [supported TSAs](api-pdf-electronic-seal-api.md)) to the [PDF Electronic Seal API](api-pdf-electronic-seal-api.md).
- Added [External Storage](api-howtos-5.md) support to every operation **except** Extract PDF, Split PDF, PDF Electronic Seal, and Auto-Tag PDF.

### August, 2023, NodeJS SDK 3.4.2 minor release

- Reorganized the internals for cleaner structure.

### July, 2023, NodeJS SDK 3.4.1 minor release

- Repaired broken links in the README.md file.

### June, 2023; Java,NodeJS,.NET SDK 3.4.0 minor release

- The PDF Electronic Seal operation is now open to every user across the PDF Services SDKs and REST APIs.
- Added OAuth-based Server-to-Server credential support to the PDF Services SDKs.
- JWT-based service account credentials and the matching SDK interfaces are now deprecated.

### June, 2023; Python SDK 2.3.0 minor release

- Added OAuth-based Server-to-Server credential support to the PDF Services SDKs.
- JWT-based service account credentials and the matching SDK interfaces are now deprecated.

### June, 2023; Adobe Document Generation Server Side Release

- Added [External Storage](api-howtos-5.md) support to the Document Generation API.
