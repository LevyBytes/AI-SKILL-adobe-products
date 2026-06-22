# Electronic Seal Api (part 4)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Creates an output stream and copy stream asset's content to it — Apply Electronic Seal with trusted timestamp on PDF

// Creates CSCAuthContext instance using access token and token type.
CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

                // Create CertificateCredentials instance with required certificate details.
                CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
                    .WithProviderName(providerName)
                    .WithCredentialID(credentialID)
                    .WithPin(pin)
                    .WithCSCAuthContext(cscAuthContext)
                    .Build();

                //Create TSABasicAuthCredentials using username and password
                TSABasicAuthCredentials tsaBasicAuthCredentials =
                    new TSABasicAuthCredentials("<USERNAME>", "<PASSWORD>");

                // Set the Time Stamp Authority Options using url and TSA Auth credentials
                TSAOptions tsaOptions = new RFC3161TSAOptions("<`TIMESTAMP_URL`>", tsaBasicAuthCredentials);

                // Create parameters for the job
                PDFElectronicSealParams pdfElectronicSealParams =
                    PDFElectronicSealParams.PDFElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                        .WithDocumentLevelPermission(documentLevelPermission)
                        .WithTSAOptions(tsaOptions)
                        .Build();

                // Creates a new job instance
                PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);
                pdfElectronicSealJob.SetSealImageAsset(sealImageAsset);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(pdfElectronicSealJob);
                PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFElectronicSealResult>(location, typeof(PDFElectronicSealResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/sealedOutput.pdf";
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

````

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/electronicseal/electronic-seal-with-stamp-authority.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    FieldLocation,
    FieldOptions,
    CSCAuthContext,
    CSCCredential,
    PDFElectronicSealParams,
    PDFElectronicSealJob,
    PDFElectronicSealResult,
    DocumentLevelPermission,
    TSABasicAuthCredentials,
    RFC3161TSAOptions,
    SDKError,
    ServiceUsageError,
    ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {

    let sourceFileReadStream;
    let sealImageReadStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.`PDF_SERVICES_CLIENT_ID`,
            clientSecret: process.env.`PDF_SERVICES_CLIENT_SECRET`
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        sourceFileReadStream = fs.createReadStream("./sampleInvoice.pdf")
        sealImageReadStream = fs.createReadStream("./sampleSealImage.png");
        const [sourceFileAsset, sealImageAsset] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: sourceFileReadStream,
                mimeType: MimeType.PDF
            }, {
                readStream: sealImageReadStream,
                mimeType: MimeType.PNG
            }]
        });

        // Set the document level permission to be applied for output document
        const documentLevelPermission = DocumentLevelPermission.`FORM_FILLING`;

        // Set the Seal Field Name to be created in input PDF document
        const sealFieldName = "Signature1";

        // Set the page number in input document for applying seal
        const sealPageNumber = 1;

        // Set if seal should be visible or invisible
        const sealVisible = true;

        // Create FieldLocation instance and set the coordinates for applying signature
        const fieldLocation = new FieldLocation({
            left: 150,
            top: 250,
            right: 350,
            bottom: 200
        });

        // Create FieldOptions instance with required details
        const sealFieldOptions = new FieldOptions({
            visible: sealVisible,
            location: fieldLocation,
            fieldName: sealFieldName,
            pageNumber: sealPageNumber,
        });

        // Set the name of TSP Provider being used
        const providerName = "<`PROVIDER_NAME`>";

        // Set the access token to be used to access TSP provider hosted APIs
        const accessToken = "<`ACCESS_TOKEN`>";

        // Set the credential ID
        const credentialId = "<`CREDENTIAL_ID`>";

        // Set the PIN generated while creating credentials
        const pin = "<PIN>";

        // Create CSCAuthContext instance using access token and token type
        const authorizationContext = new CSCAuthContext({
            accessToken,
            tokenType: "Bearer"
        });

        // Create CertificateCredentials instance with required certificate details
        const certificateCredentials = new CSCCredential({
            providerName,
            credentialId,
            pin,
            authorizationContext,
        });

        // Create TSABasicAuthCredentials using username and password
        const tsaBasicAuthCredentials = new TSABasicAuthCredentials({
            username: "<USERNAME>",
            password: "<PASSWORD>"
        });

        // Set the Time Stamp Authority Options using url and TSA Auth credentials
        const tsaOptions = new RFC3161TSAOptions({
            url: "<`TIMESTAMP_URL`>",
            credentialAuthParameters: tsaBasicAuthCredentials
        });

        // Create parameters for the job
        const params = new PDFElectronicSealParams({
            documentLevelPermission,
            certificateCredentials,
            sealFieldOptions,
            tsaOptions
        });

        // Creates a new job instance
        const job = new PDFElectronicSealJob({
            inputAsset: sourceFileAsset,
            sealImageAsset,
            params,
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: PDFElectronicSealResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = "./sealedOutput.pdf";
        console.log(`Saving asset at ${outputFilePath}`);

const writeStream = fs.createWriteStream(outputFilePath);
        streamAsset.readStream.pipe(writeStream);
    } catch (err) {
        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {
            console.log("Exception encountered while executing operation", err);
        } else {
            console.log("Exception encountered while executing operation", err);
        }
    } finally {
        sourceFileReadStream?.destroy();
        sealImageReadStream?.destroy();
    }
})();
````

### Python

```javascript

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class ElectronicSealWithTimestampAuthority:
    def __init__(self):
        try:
            pdf_file = open('./sampleInvoice.pdf', 'rb')
            file_input_stream = pdf_file.read()
            pdf_file.close()

            seal_image_file = open('./sampleSealImage.png', 'rb')
            seal_image_input_stream = seal_image_file.read()
            seal_image_file.close()

## Create TSABasicAuthCredentials using username and password

tsa_basic_auth_credentials: TSABasicAuthCredentials = TSABasicAuthCredentials(
                username="<USERNAME>",
                password="<PASSWORD>",
            )

## Set the Time Stamp Authority Options using url and TSA Auth credentials

tsa_options: RFC3161TSAOptions = RFC3161TSAOptions(
                url="<`TIMESTAMP_URL`>",
                tsa_basic_auth_credentials=tsa_basic_auth_credentials,
            )

## Create parameters for the job

electronic_seal_params = PDFElectronicSealParams(
                seal_certificate_credentials=certificate_credentials,
                seal_field_options=field_options,
                tsa_options=tsa_options,
                document_level_permissions=document_level_permission,
            )

## Creates an output stream and copy stream asset's content to it

output_file_path = 'output/ElectronicSeal.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    ElectronicSealWithTimestampAuthority()
```

### REST API

```javascript
curl --location --request POST 'https://pdf-services.adobe.io/operation/electronicseal' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputDocumentAssetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-xxxx-xxxx-087832fca718",
    "sealImageAssetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-xxxx-xxxx-087832fca718",
    "sealOptions": {
        "signatureFormat": "PKCS7",
        "documentLevelPermission": "`FORM_FILLING`",
        "cscCredentialOptions": {
            "credentialId": "<`CREDENTIAL_ID`>",
            "providerName": "<`PROVIDER_NAME`>",
            "authorizationContext": {
                "tokenType": "Bearer",
                "accessToken": "<`ACCESS_TOKEN`>"
            },
            "credentialAuthParameters": {
                "pin": "<PIN>"
            }
        },
        "tsaOptions": {
            "url" : "<`TIMESTAMP_URL`>",
            "credentialAuthParameters": {
                "username" : "<USERNAME>",
                "password" : "<PASSWORD>"
        },
        "sealFieldOptions": {
            "location": {
                "left": 150,
                "top": 250,
                "right": 350,
                "bottom": 200
            },
            "fieldName": "Signature1",
            "pageNumber": 1
        },
        "sealAppearanceOptions": {
            "displayOptions": [
                "NAME",
                "DATE",
                "`DISTINGUISHED_NAME`",
                "LABELS",
                "`SEAL_IMAGE`"
            ]
        }
    }
}'
```
