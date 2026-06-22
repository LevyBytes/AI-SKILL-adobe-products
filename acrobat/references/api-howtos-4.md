# Export Pdf Form Data, Import Pdf Form Data

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Export PDF Form Data; Import PDF Form Data; How Tos.

## Export PDF Form Data

Given a PDF form, the Export PDF Form Data API pulls out the field values and hands them back as a JSON file.
[Figure: Export PDF Form Data](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/export-pdf-form.png)

### Input Documents : Required

Supported formats:

- **PDF (application/pdf)** – accepted from **PDF version 1.6 and above** only.
- **AcroForm and Static XFA** – an **interactive form** carrying the values you mean to pull must be present in the source document.

### Input Document

A **filled interactive PDF form (AcroForm/Static XFA)** whose entered values you want pulled out.

### Important Notes:

- Coverage is limited to **Static XFA** files alone.
- **Dynamic XFA** input is rejected and triggers an error.

### REST API

For full details, consult the public API Reference entry covering the [Export PDF Form Data API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Export-PDF-Form-Data).

In the example that follows, form values are pulled from a PDF and handed back in JSON form.

Consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md) for the steps involved in calling these APIs.

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.ExportPDFFormData

public class ExportPDFFormData {
    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFFormData.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/exportPdfFormDataInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Creates a new job instance
            ExportPDFFormDataJob exportPDFFormDataJob = new ExportPDFFormDataJob(asset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(exportPDFFormDataJob);
            PDFServicesResponse<ExportPDFFormDataResult> pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFFormDataResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/ExportPDFFormData.pdf").toPath());
            LOGGER.info(String.format("Saving asset at output/ExportPDFFormData.pdf", outputFilePath));
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```

### Python

```python

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class ExportPDFFormData:
    def __init__(self):
        try:
            file = open('../resources/exportPdfFormDataInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Creates a new job instance

export_pdf_form_data_job = ExportPDFFormDataJob(input_asset=input_asset)

### Submit the job and gets the job result

location = pdf_services.submit(export_pdf_form_data_job)
            pdf_services_response = pdf_services.get_job_result(location, ExportPDFFormDataResult)

### Get content from the resulting asset(s)

result_asset = pdf_services_response.get_result().get_asset()
            stream_asset = pdf_services.get_content(result_asset)

### Creates an output stream and copy stream asset's content to it

output_file_path = self.create_output_file_path()
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

### Generates a string containing a directory structure and file name for the output file

@staticmethod
    def create_output_file_path() -> str:
        now = datetime.now()
        time_stamp = now.strftime("%Y-%m-%dT%H-%M-%S")
        os.makedirs("../../output/ExportPDFFormData", exist_ok=True)
        return f"../../output/ExportPDFFormData/export{time_stamp}.json"

if __name__ == "__main__":
    ExportPDFFormData()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF-Form-Data

curl --location --request POST 'https://pdf-services.adobe.io/operation/getformdata' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

## Import PDF Form Data

Supply your form data as JSON and the Import PDF Form Data API drops those values into the PDF form, producing the finished PDF document.
[Figure: Import PDF Form Data](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/import-pdf-form.png)

### Input Documents : Required

Supported formats:

- **PDF (application/pdf)** – accepted from **PDF version 1.6 and above** only.
- **AcroForm and Static XFA** – the source document needs to hold an **interactive form** that the supplied data will populate.

### Input Document

An **interactive PDF form (AcroForm/Static XFA)** that receives the JSON-supplied form data and yields the finished PDF document.

### Important Notes:

- Coverage is limited to **Static XFA** files alone.
- **Dynamic XFA** input is rejected and triggers an error.

### REST API

For full details, consult the public API Reference entry covering the [Import PDF Form Data API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Import-PDF-Form-Data).

The example below walks through feeding JSON form data into a PDF and producing the finished PDF document.

Consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md) for the steps involved in calling these APIs.

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.ImportPdfFormData

public class ImportPdfFormData {
    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ImportPdfFormData.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/importPdfFormDataInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                                            System.getenv("PDF_SERVICES_CLIENT_ID"),
                                            System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            // Create parameters for the job
            ImportPDFFormDataParams importPDFFormDataParams = ImportPDFFormDataParams.importPdfFormDataParamsBuilder()
                .withJsonFormFieldsData(new JSONObject("{\n" +
                    "  \"option_two\": \"Yes\",\n" +
                    "  \"option_one\": \"Yes\",\n" +
                    "  \"name\": \"sufia\",\n" +
                    "  \"option_three\": \"Off\",\n" +
                    "  \"age\": \"25\",\n" +
                    "  \"favorite_movie\": \"Star Wars Again\"\n" +
                    "}\n"))
                .build();

            // Creates a new job instance
            ImportPDFFormDataJob importPDFFormDataJob = new ImportPDFFormDataJob(asset);
            importPDFFormDataJob.setParams(importPDFFormDataParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(importPDFFormDataJob);
            PDFServicesResponse<ImportPDFFormDataResult> pdfServicesResponse = pdfServices.getJobResult(location, ImportPDFFormDataResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/ImportPDFFormData.pdf").toPath());
            LOGGER.info(String.format("Saving asset at output/ImportPDFFormData.pdf", outputFilePath));
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```

### Python

```python

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class ImportPDFFormData:
    def __init__(self):
        try:
            file = open('../resources/importPdfFormDataInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Form data to be imported

form_data = {
                "option_two": "Yes",
                "option_one": "Yes",
                "name": "garvit",
                "option_three": "Off",
                "age": "24",
                "favorite_movie": "Star Wars Again",
            }

### Create parameters for the job

import_pdf_form_data_params = ImportPDFFormDataParams(json_form_fields_data=form_data)

### Creates a new job instance

import_pdf_form_data_job = ImportPDFFormDataJob(input_asset=input_asset)

### Submit the job and gets the job result

location = pdf_services.submit(import_pdf_form_data_job)
            pdf_services_response = pdf_services.get_job_result(location, ImportPDFFormDataResult)

### Generates a string containing a directory structure and file name for the output file

@staticmethod
    def create_output_file_path() -> str:
        now = datetime.now()
        time_stamp = now.strftime("%Y-%m-%dT%H-%M-%S")
        os.makedirs("../../output/ImportPDFFormData", exist_ok=True)
        return f"../../output/ImportPDFFormData/import{time_stamp}.pdf"

if __name__ == "__main__":
    ImportPDFFormData()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data

curl --location --request POST 'https://pdf-services.adobe.io/operation/setformdata' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "jsonFormFieldsData":"{}"
}'
```

## How Tos

Whether you want to stand up the PDF Services SDK fast or just browse what it can do, the samples and reference material gathered here are meant to make that quick. Each example walks through a PDF action driven by the SDK, and together they cover:

- Building a PDF out of several input types, among them HTML, Microsoft Office files, and plain text documents
- Converting a PDF into a different format or rendering it as an image
- Merging whole PDFs, or only the page ranges you specify
- Running OCR so a PDF becomes searchable, with a locale you choose
- Shrinking PDFs by compression level, plus linearizing them
- Locking PDFs behind one or more passwords, and stripping that password protection back off again
- Everyday page edits such as inserting, replacing, removing, reordering, and rotating
- Breaking a single PDF apart into several output files
- Pulling a PDF out as JSON, capturing the content, the structure, table and figure renditions, and the bounding boxes around characters
- Reading a PDF's attributes, including its page total, PDF version, file size, compliance levels, font details, permissions, and beyond
- Raising the accessibility of PDFs (offered through the Early Access Program)

### Service region configuration

By default the Adobe PDF Services SDKs route every document through the `US (United States)` region for processing.
After you buy PDF Services SDK, you can point the SDKs at any of the regions enumerated below to handle your documents there instead.
At present, the regions PDF Services SDKs can target are these:

| Region Code | Name |
| --- | --- |
| `US` | United States (default) |
| `EU` | Europe |

Beyond what is described below, these ready-to-run code samples are also available for reference:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/ExportPDFWithSpecifiedRegion.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/ExportPDFWithSpecifiedRegion/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/export-pdf-with-specified-region.js)
- [Python](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/export_pdf_with_specified_region.py)

Available properties:

- **region**: Default: `US`. Every document gets handled within whichever region you name here.

Supply your own `ClientConfig` class to replace the `region` property:

### Java

```javascript
ClientConfig clientConfig = ClientConfig.builder()
    .setRegion(Region.EU)
    .build();
```

### .NET

```javascript
ClientConfig clientConfig = ClientConfig.ConfigBuilder()
    .SetRegion(Region.EU)
    .Build();
```

### Node.js

```javascript
const clientConfig = new ClientConfig({
  region: Region.EU,
});
```

### Python

```javascript
client_config = ClientConfig((region = Region.US));
```

### Proxy Server Configuration

Through Client Configurations, the Java and Node SDKs can reach the API across a Proxy, and the proxy connection also accepts username-and-password authentication. This lets clients run the SDK from inside networks where every outbound request must pass through a proxy and is permitted only when allow-listed there. The sample below covers the specifics.

### Java

- [Java Sample for Proxy Server Config](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithProxyServer.java)
- [Java Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithAuthenticatedProxyServer.java)

### Java Proxy Server configuration

Available properties:

- **host**: Hostname of the proxy server, given as a DNS name or IP address.
- **scheme**: Default: http. The proxy server's scheme, that is http or https.
- **port**: Default: 80 for http, 443 for https. The port the proxy server listens on.
- **username**: The username used to authenticate.
- **password**: The password used to authenticate.

### Node.js

- [Node Sample for Proxy Server Config](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-proxy-server.js)
- [Node Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-authenticated-proxy-server.js)

### Node Proxy Server configuration

Available properties:

- **host**: Hostname of the proxy server, given as a DNS name or IP address.
- **scheme**: Default: http. The proxy server's scheme, that is http or https.
- **port**: The port the proxy server listens on.
- **username**: The username used to authenticate.
- **password**: The password used to authenticate.

### Python

- [Python Sample for Proxy Server Config](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_proxy_server.py)
- [Python Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_authenticated_proxy_server.py)

### Python Proxy Server configuration

Available properties:

- **host**: Hostname of the proxy server, given as a DNS name or IP address.
- **scheme**: Default: http. The proxy server's scheme, that is http or https.
- **port**: Default: 80 for http, 443 for https. The port the proxy server listens on.
- **username**: The username used to authenticate.
- **password**: The password used to authenticate.

Every one of these properties lives inside the `proxyServerConfig` object. On top of that, `username` and `password` belong in the nested `usernamePasswordCredentials` object.

Configure the values above through a custom `ProxyServerConfig` class, then wire the proxy server up by way of the `ClientConfig` class.

**Below: configuring the proxy server with no authentication involved.**

### Java

```java
ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()
    .withHost("PROXY_HOSTNAME")
    .withProxyScheme(ProxyScheme.HTTPS)
    .withPort(443)
    .build();

ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(10000)
    .withSocketTimeout(40000)
    .withProxyServerConfig(proxyServerConfig)
    .build();
```

### Node.js

```js
const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
});

const clientConfig = new ClientConfig({
  proxyServerConfig,
});
```

### Python

```python
proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
)

client_config = ClientConfig(
    proxy_server_config=proxy_server_config
)
```

**Below: configuring the proxy server where authentication is required.**

### Java

```java
ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()
    .withHost("PROXY_HOSTNAME")
    .withProxyScheme(ProxyScheme.HTTPS)
    .withPort(443)
    .withCredentials(new UsernamePasswordCredentials("USERNAME", "PASSWORD"))
    .build();

ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(10000)
    .withSocketTimeout(40000)
    .withProxyServerConfig(proxyServerConfig)
    .build();
```

### Node.js

```js
const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
  credentials: new UsernamePasswordCredentials({
    username: "USERNAME",
    password: "PASSWORD",
  }),
});

const clientConfig = new ClientConfig({
  proxyServerConfig,
});
```

### Python

```python
proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
    credentials=UsernamePasswordCredentials(
        username="USERNAME",
        password="PASSWORD"
    )
)

client_config = ClientConfig(
    proxy_server_config=proxy_server_config
)
```

### Custom timeout configuration

For the API calls the APIs derive timeout values and ship with defaults already set. That said, you can override them, since the SDK lets you define your own timeouts. Adjust the timeout values to suit your network speed and the environment you run in. Beyond what is covered below, these ready-to-run code samples are also available for reference:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js)
- [Python](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_custom_timeouts.py)

### Java timeout configuration

Available properties:

- **connectTimeout**: Default: 2000. The longest time, in milliseconds, permitted to open the first HTTPS connection.
- **socketTimeout**: Default: 10000. The longest time, in milliseconds, allowed between one HTTP response packet and the next.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(3000)
    .withSocketTimeout(20000)
    .build();
```

### .NET timeout configuration

Available properties:

- **timeout**: Default: 400000. The longest time, in milliseconds, allowed to open a connection, dispatch a request, and receive a response.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
ClientConfig clientConfig = ClientConfig.ConfigBuilder()
    .WithTimeout(40000)
    .Build();
```

### Node.js timeout configuration

Available properties:

- **timeout**: Default: 10000. The longest time, in milliseconds, the request may run before it times out. Should it run past `timeout`, the request gets aborted.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
const clientConfig = new ClientConfig({
  timeout: 15000,
});
```

### Python timeout configuration

Available properties:

- **connectTimeout**: Default: 4000. How many milliseconds Requests holds out for the client to open a connection to the Server.
- **readTimeout**: Default: 10000. How many milliseconds the client holds out for the server to return a response.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
client_config = ClientConfig((connect_timeout = 4000), (read_timeout = 10000));
```
