# Releasenotes (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Across the supported versions, this document records what changed from one release to the next. To learn how versioning and support are handled, consult the [Version - Support policy](api-pdf-services-api.md).

## Supported versions

Both this document and the URLs found on Adobe's site and elsewhere in the documentation point to the most recent product version.

**Note**: Repository asset links (e.g. GIT, Maven, etc.) take you to the top-level directory. So that the assets line up with the documentation, browse to the matching version. As an illustration, with the 1.0.0 Java documentation the corresponding 1.0.0 samples can be located in the GIT repo this way:

1.  Go to the [GIT repo](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Select _Releases_.
3.  Select and download the needed release.

[Figure: Previous Release tags with release notes and links to the assets](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/prevrelease.png)

## Migration Guide to PDF Services SDK

To move up to PDF Services SDK version 3.4.0, consult the table that follows; for the newest release you can also turn to our Samples ([Java](https://www.adobe.com/go/pdftoolsapi_java_samples), [Node JS](https://www.adobe.com/go/pdftoolsapi_node_sample), [.NET](https://www.adobe.com/go/pdftoolsapi_net_samples)).

End of Life arrives for the 1.X.X releases of PDF Tools SDK in May 2022. After a version hits end of life, its features can be deprecated and may cease to function. Move up to our newest SDK version, please.

### Java changes

- The `artifactId` is now `pdfservices-sdk` rather than the old `pdftools-sdk`
- In your project’s `pom.xml`, swap out the existing `<properties>` tag and the SDK `<dependency>` tag for these:

```
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <pdfservices.sdk.version>3.5.1</pdfservices.sdk.version>
    <pdfservices.sdk.samples.version>3.5.1</pdfservices.sdk.samples.version>
</properties>

<dependency>
    <groupId>com.adobe.documentservices</groupId>
    <artifactId>pdfservices-sdk</artifactId>
    <version>${pdfservices.sdk.version}</version>
</dependency>
```

- Revise your import statements to match the new package structure. For e.g.

```

```

### Node JS changes

- On NPM the package is now `@adobe/pdfservices-node-sdk`, replacing `@adobe/documentservices-pdftools-node-sdk`
- Bump the SDK dependency in your project's package.json file to the newest version

```
"@adobe/pdfservices-node-sdk": "3.4.2"
```

- Pull in `@adobe/pdfservices-node-sdk` within the Sample file so you can reach the SDK interface

```
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
```

When converting HTML to PDF, the PageLayout object now lives inside the html object. Reach the PageLayout interface with this code:

```
const pageLayout = new PDFServicesSdk.CreatePDF.options.html.PageLayout();
```

### .NET changes

- On Nuget the package is now `Adobe.PDFServicesSDK`, replacing `Adobe.DocumentServices.PDFTools`
- In your project’s .csproj file, update the SDK dependency to the following:

```

```

- Adjust the namespaces in your .cs file to fit the new dependency:

```javascript
using Adobe.PDFServicesSDK;
```

## Archived Documentation

You can reach the previous major version of our documentation [here](api-legacy-documentation.md).

## Change types

The categories used to classify changes are these:

- **New**: a feature or an implementation tweak that this release introduces for
  the first time.
- **Changed**: code that has been modified, altering some feature or
  implementation detail.x
- **Security**: a fix or patch shipped separately as an out-of-band update.
- **Deprecated**: capability whose support is winding down or has already
  stopped.

Releases tagged Minor or Patch stay compatible with whatever came before them.
Moving up to the newest SDK shouldn't disrupt applications you already have running.

## Change history

### 3.5.1 (December, 2023: patch release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Java | Dependent library upgrades and fixed compatibility issues with Spring Boot v3.x. |

### 3.5.0 (October, 2023: minor release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Java | Added support for document level permissions and trusted timestamping (using [supported TSAs](api-pdf-electronic-seal-api.md)) in java sdk for [PDF Electronic Seal API](api-pdf-electronic-seal-api.md). |

### Adobe Document Generation Server Side Release (October, 2023; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Performance Improvements - Available in [REST API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation) and SDK(s) v3.0.0 and above. |

### Server Side Release (August, 2023; server side release)

| Change | Language | Description |
| --- | --- | --- |
| New | API | Added support for document level permissions and trusted timestamping (using [supported TSAs](api-pdf-electronic-seal-api.md)) in [PDF Electronic Seal API](api-pdf-electronic-seal-api.md). |
| New | API | Added support for [External Storage](api-howtos-5.md) in all the operations **except** Extract PDF, Split PDF, PDF Electronic Seal and Auto-Tag PDF. |

### 3.4.2 (August, 2023, minor release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | NodeJS | Restructured the internals for improved organization. |

### 3.4.1 (July, 2023, minor release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | NodeJS | Fixed links in README.md file. |

### 3.4.0 (June, 2023; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Java,NodeJS,.NET | PDF Electronic Seal operation is now available for all the users in PDF Services SDKs and REST APIs. |
| New | Java,NodeJS,.NET | Added support for OAuth based Server to Server credentials in PDF Services SDKs. |
| Changed | Java,NodeJS,.NET | JWT based service account credentials and corresponding SDK interfaces are now deprecated. |

### Python SDK 2.3.0 (June, 2023; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Python | Added support for OAuth based Server to Server credentials in PDF Services SDKs. |
| Changed | Python | JWT based service account credentials and corresponding SDK interfaces are now deprecated. |

### Adobe Document Generation Server Side Release (June, 2023; server side release)

| Change | Language | Description |
| --- | --- | --- |
| New | API | Added support for [External Storage](api-howtos-5.md) in Document Generation API. |

### 3.3.0 (May, 2023; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Java,NodeJS,.NET | PDF Accessibility Auto-Tag operation is now available for all the users in PDF Services SDKs and REST APIs. |
| New | Java | Added the support of Basic Authentication for the Proxy Server configuration. Proxy server settings will now be specified via "proxyServerConfig" in the client config. |
| Changed | Java,NodeJS,.NET | Upgraded third party libraries to fix recently discovered vulnerabilities. |

### Python SDK 2.2.0 (May, 2023; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Python | PDF Accessibility Auto-Tag operation is now available for all the users in PDF Services SDKs and REST APIs. |

### Extract PDF Server Side Release (06 March, 2023; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Adding support for larger PDF document processing. The new supported limits are 400 pages for non-scanned and 150 for scanned PDF documents. |

### 2.3.0 (February, 2023, minor release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | NodeJS | Fixed the response failures with `400` HTTP statusCode and `UNKNOWN` errorCode for NodeJS SDK(s) v2.2.3 and below. |

### Adobe Document Generation Server Side Release (January, 2023, server side release)

| Change | Language | Description |
| --- | --- | --- |
| New | Java,NodeJS,.NET | Adding support for [inline images](api-document-generation-api-3.md) feature. |
| New | Java,NodeJS,.NET | Adding support for additional constructs in [fragments](api-document-generation-api-2.md). |
| Changed | Java,NodeJS,.NET | Adding support for prefix in [text tags](api-document-generation-api-5.md). |

### Python SDK 2.1.2 (January, 2023, minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Python | Added configuration for SDKs to process the documents in the specified region. |
| Changed | Python | Upgraded libraries to fix recently discovered vulnerability. |

### 3.4.0 (January, 2023; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | Java,NodeJS,.NET | Added configuration for SDKs to process the documents in the specified region. |
| Changed | NodeJS | Upgraded libraries to fix recently discovered vulnerability.. |

### Python SDK 2.0.0 (December, 2022, major release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Python | Released SDK v2.0.0 for Python, based out of the new PDF Services APIs. |

### 3.0.0 (September, 2022; major release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Java,NodeJS,.NET | Released SDK v3.0.0, based out of the new PDF Services APIs. |
| Changed | Java,NodeJS,.NET | Added the support of OCR locale for Export PDF operation. |
| Changed | Java,NodeJS,.NET | Updated PDF Properties operation to return PDFProperties object. Discontinued the support of returning FileRef and JSON Object. |
| Changed | Java,NodeJS,.NET | Image formats(JPEG and PNG) for Export PDF have been moved from Export PDF operation to ExportPDFToImages operation. |
| New | Java | PDF Electronic Seal operation is now available in Beta PDF Services SDKs. |

### 2.2.3 (July, 2022; patch release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | NodeJS | Fixed the issue of sending UNKNOWN error code for extract operation. ### PDF Accessibility Auto-Tag Release - Available under Early Access Program (21 June, 2022) Change Language Description |
| ------- | ------------------- | --------------------------------------------------------------------------------- |
| New | Java, Python | PDF Accessibility Auto-Tag operation is now available in Beta PDF Services SDKs |

### Extract PDF Server Side Release (21 June, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Enhanced error messages by adding more sub error codes |
| Changed | All | Bug fixes and stability improvements. |

### Extract PDF Server Side Release (16 May, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Bug fixes and stability improvements. |

### 2.2.2 (May, 2022; patch release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Java, NodeJS | Dependent library upgrades to address vulnerabilities reported in NPM and Maven. |

### Create PDF Server Side Release (6 April, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Enhanced support for leveraging embedded TrueType fonts. |

### Extract PDF Server Side Release (05 April, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Improved handling of bad PDFs with 50% reduction in frequency of bad PDF errors and improved successful conversion rate. |
| Changed | All | Bug fixes and stability improvements. |

### 2.2.1 (March, 2022; patch release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | .NET | Dependent library upgrades and SDK internal additional validation checks. |

### Extract PDF Server Side Release (22 February, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Adding support for identification of scanned pages with "is_scanned" field in Extract output. |
| Changed | All | Bug fixes and stability improvements. |

### 2.2.1 (February, 2022; patch release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | Java | Dependent library upgrades. |

### 2.2.1 (January, 2022; patch release)

## See also

- [Releasenotes](api-releasenotes-3.md)
