# Protect Pdf

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Lock down a PDF by encrypting it behind a password. Define an owner password together with limits on features such as printing, editing, and copying, so recipients are blocked from altering the file.

Both AES-128 and AES-256 encryption are available for PDFs, and permissions can be set at a fine grain — covering high- and low-quality printing as well as restrictions on fill-and-sign form fields.

## REST API

Consult our public API Reference covering [Protect PDF](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Protect-PDF)

## Protect PDFs with user password

A document-open password can be attached to a PDF, restricting access so the file opens only for people who hold that password.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.protectpdf.ProtectPDF

      public class ProtectPDF {
        // Initialize the logger.
        private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDF.class);

        public static void main(String[] args) {

            try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/protectPDFInput.pdf").toPath())) {
                // Initial setup, create credentials instance
                Credentials credentials = new ServicePrincipalCredentials(
                        System.getenv("PDF_SERVICES_CLIENT_ID"),
                        System.getenv("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

                // Create parameters for the job
                ProtectPDFParams protectPDFParams = ProtectPDFParams.passwordProtectOptionsBuilder()
                        .setUserPassword("password")
                        .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                        .build();

                // Creates a new job instance
                ProtectPDFJob protectPDFJob = new ProtectPDFJob(asset, protectPDFParams);

                // Submit the job and gets the job result
                String location = pdfServices.submit(protectPDFJob);
                PDFServicesResponse<ProtectPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ProtectPDFResult.class);

                // Get content from the resulting asset(s)
                Asset resultAsset = pdfServicesResponse.getResult().getAsset();
                StreamAsset streamAsset = pdfServices.getContent(resultAsset);

                // Creates an output stream and copy stream asset's content to it
                Files.createDirectories(Paths.get("output/"));
                OutputStream outputStream = Files.newOutputStream(new File("output/protectPDFOutput.pdf").toPath());
                LOGGER.info("Saving asset at output/protectPDFOutput.pdf");
                IOUtils.copy(streamAsset.getInputStream(), outputStream);
                outputStream.close();
            } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
                LOGGER.error("Exception encountered while executing operation", ex);
            }
        }
      }
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ProtectPDF/
// dotnet run ProtectPDF.csproj

namespace ProtectPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"protectPDFInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                ProtectPDFParams protectPDFParams = ProtectPDFParams.PasswordProtectParamsBuilder()
                    .SetUserPassword("password")
                    .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                    .Build();

                // Creates a new job instance
                ProtectPDFJob protectPDFJob = new ProtectPDFJob(asset, protectPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(protectPDFJob);
                PDFServicesResponse<ProtectPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ProtectPDFResult>(location, typeof(ProtectPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/protectPDFOutput.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }

        // Generates a string containing a directory structure and file name for the output file.
        private static String CreateOutputFilePath()
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return ("/output/protect" + timeStamp + ".pdf");
        }
    }
}
```

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/protectpdf/protect-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    ProtectPDFParams,
    EncryptionAlgorithm,
    ProtectPDFJob,
    ProtectPDFResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let readStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        readStream = fs.createReadStream("./protectPDFInput.pdf")
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Create parameters for the job
        const params = new ProtectPDFParams({
            userPassword: "password",
            encryptionAlgorithm: EncryptionAlgorithm.AES_256
        });

        // Create a new job instance
        const job = new ProtectPDFJob({inputAsset, params});

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: ProtectPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates an output stream and copy stream asset's content to it
        const outputFilePath = "./protectPDFOutput.pdf";
        console.log(`Saving asset at ${outputFilePath}`);
```

## Initialize the logger

```javascript
logging.basicConfig(level=logging.INFO)

class ProtectPDF:
    def __init__(self):
        try:
            file = open('./protectPDFInput.pdf', 'rb')
            input_stream = file.read()
            file.close()
```

## Create parameters for the job

```javascript
protect_pdf_params = PasswordProtectParams(
  (user_password = "password"),
  (encryption_algorithm = EncryptionAlgorithm.AES_256),
  (content_encryption = ContentEncryption.ALL_CONTENT),
);
```

## Creates a new job instance

```javascript
protect_pdf_job = ProtectPDFJob(
  (input_asset = input_asset),
  (protect_pdf_params = protect_pdf_params),
);
```

## Submit the job and gets the job result

```javascript
location = pdf_services.submit(protect_pdf_job);
pdf_services_response = pdf_services.get_job_result(location, ProtectPDFResult);
```

## Creates an output stream and copy stream asset's content to it

```javascript
output_file_path = 'output/ProtectPDF.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    ProtectPDF()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/protectpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "passwordProtection": {
        "userPassword": "user_password"
    },
    "encryptionAlgorithm": "AES_128",
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

## Creates an output stream and copy stream asset's content to it — Protect PDFs with owner password

An owner (permissions) password can guard a PDF while you cap what readers may do with it — printing, editing, and copying can all be limited. For the full set of encryptable content types and document-permission options, check `ContentEncryption` and `Permission` in the API docs.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.protectpdf.ProtectPDFWithOwnerPassword

 public class ProtectPDFWithOwnerPassword {

   // Initialize the logger.
   private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDFWithOwnerPassword.class);

   public static void main(String[] args) {

       try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/protectPDFInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create new permissions instance and add the required permissions
            Permissions permissions = Permissions.createNew();
            permissions.addPermission(Permission.PRINT_LOW_QUALITY);
            permissions.addPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);
            permissions.addPermission(Permission.COPY_CONTENT);

            // Create parameters for the job
            ProtectPDFParams protectPDFParams = ProtectPDFParams.passwordProtectOptionsBuilder()
                    .setOwnerPassword("password")
                    .setPermissions(permissions)
                    .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                    .setContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
                    .build();

            // Creates a new job instance
            ProtectPDFJob protectPDFJob = new ProtectPDFJob(asset, protectPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(protectPDFJob);
            PDFServicesResponse<ProtectPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ProtectPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/protectPDFWithOwnerPasswordOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/protectPDFWithOwnerPasswordOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
       } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
           LOGGER.error("Exception encountered while executing operation", ex);
       }
   }
 }

```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ProtectPDFWithOwnerPassword/
// dotnet run ProtectPDFWithOwnerPassword.csproj

namespace ProtectPDFWithOwnerPassword
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"protectPDFInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create new permissions instance and add the required permissions
                Permissions permissions = new Permissions();
                permissions.AddPermission(Permission.PRINT_LOW_QUALITY);
                permissions.AddPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);
                permissions.AddPermission(Permission.COPY_CONTENT);

                // Create parameters for the job
                ProtectPDFParams protectPDFParams = ProtectPDFParams.PasswordProtectParamsBuilder()
                    .SetOwnerPassword("password")
                    .SetPermissions(permissions)
                    .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                    .SetContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
                    .Build();

                // Creates a new job instance
                ProtectPDFJob protectPDFJob = new ProtectPDFJob(asset, protectPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(protectPDFJob);
                PDFServicesResponse<ProtectPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ProtectPDFResult>(location, typeof(ProtectPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/protectPDFWithOwnerPasswordOutput.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/protectpdf/protect-pdf-with-owner-password.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    ProtectPDFParams,
    EncryptionAlgorithm,
    ProtectPDFJob,
    ProtectPDFResult,
    ContentEncryption,
    Permissions,
    Permission,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let readStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        readStream = fs.createReadStream("./protectPDFInput.pdf")
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Create new permissions instance and add the required permissions
        const permissions = new Permissions({
            permissions: [
                Permission.PRINT_LOW_QUALITY,
                Permission.EDIT_DOCUMENT_ASSEMBLY,
                Permission.COPY_CONTENT
            ]
        });

        // Create parameters for the job
        const params = new ProtectPDFParams({
            ownerPassword: "password",
            permissions: permissions,
            encryptionAlgorithm: EncryptionAlgorithm.AES_256,
            contentEncryption: ContentEncryption.ALL_CONTENT_EXCEPT_METADATA,
        });

        // Create a new job instance
        const job = new ProtectPDFJob({inputAsset, params});
```

```javascript
// Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: ProtectPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates an output stream and copy stream asset's content to it
        const outputFilePath = "./protectPDFWithOwnerPasswordOutput.pdf";
        console.log(`Saving asset at ${outputFilePath}`);

        const outputStream = fs.createWriteStream(outputFilePath);
        streamAsset.readStream.pipe(outputStream);
    } catch (err) {
        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {
            console.log("Exception encountered while executing operation", err);
        } else {
            console.log("Exception encountered while executing operation", err);
        }
    } finally {
        readStream?.destroy();
    }
})();
```

### Python

```python

```

## Initialize the logger

```javascript
logging.basicConfig(level=logging.INFO)

class ProtectPDFWithOwnerPassword:
    def __init__(self):
        try:
            file = open('./protectPDFInput.pdf', 'rb')
            input_stream = file.read()
            file.close()
```

## Create new permissions instance and add the required permissions

```javascript
permissions = Permissions();
permissions.add_permission(Permission.PRINT_LOW_QUALITY);
permissions.add_permission(Permission.EDIT_DOCUMENT_ASSEMBLY);
permissions.add_permission(Permission.COPY_CONTENT);
```

## Create parameters for the job

```javascript
protect_pdf_params = PasswordProtectParams(
  (owner_password = "password"),
  (encryption_algorithm = EncryptionAlgorithm.AES_256),
  (permissions = permissions),
  (content_encryption = ContentEncryption.ALL_CONTENT_EXCEPT_METADATA),
);
```

## Creates an output stream and copy stream asset's content to it

```javascript
output_file_path = 'output/ProtectPDFWithOwnerPassword.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    ProtectPDFWithOwnerPassword()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/protectpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "passwordProtection": {
    "ownerPassword": "owner_password"
  },
  "encryptionAlgorithm": "AES_256",
  "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```
