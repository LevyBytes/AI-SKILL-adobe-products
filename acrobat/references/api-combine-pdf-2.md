# Combine Pdf (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Creates an output stream and copy stream asset's content to it — Combine pages from multiple files

private static PageRanges GetPageRangeForFirstFile()
{
// Specify which pages of the first file are to be included in the combined file.
PageRanges pageRangesForFirstFile = new PageRanges();
// Add page 2.
pageRangesForFirstFile.AddSinglePage(2);
// Add page 3.
pageRangesForFirstFile.AddSinglePage(3);
// Add pages 5 to 7.
pageRangesForFirstFile.AddRange(5, 7);
return pageRangesForFirstFile;
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
// node src/combinepdf/combine-pdf-with-page-ranges.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    CombinePDFParams,
    CombinePDFJob,
    CombinePDFResult,
    PageRanges,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let readStream1;
    let readStream2;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.`PDF_SERVICES_CLIENT_ID`,
            clientSecret: process.env.`PDF_SERVICES_CLIENT_SECRET`
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        readStream1 = fs.createReadStream("./combineFilesInput1.pdf");
        readStream2 = fs.createReadStream("./combineFilesInput2.pdf");
        const [inputAsset1, inputAsset2] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: readStream1,
                mimeType: MimeType.PDF
            }, {
                readStream: readStream2,
                mimeType: MimeType.PDF
            }]
        });

        // Create a CombinePDFParams instance
        const params = new CombinePDFParams()
            .addAsset(inputAsset1, getPageRangesForFirstFile())
            .addAsset(inputAsset2, getPageRangesForSecondFile());

        // Create a new job instance
        const job = new CombinePDFJob({params});

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: CombinePDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates an output stream and copy result asset's content to it
        const outputFilePath = "./combineFilesOutput.pdf";
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
        readStream1?.destroy();
        readStream2?.destroy();
    }
})();

const getPageRangesForFirstFile = () => {
    // Specify which pages of the first file are to be included in the combined file.
    const pageRangesForFirstFile = new PageRanges();
    // Add page 1.
    pageRangesForFirstFile.addSinglePage(1);
    // Add page 2.
    pageRangesForFirstFile.addSinglePage(2);
    // Add pages 3 to 4.
    pageRangesForFirstFile.addRange(3, 4);
    return pageRangesForFirstFile;
};

const getPageRangesForSecondFile = () => {
    // Specify which pages of the second file are to be included in the combined file.
    const pageRangesForSecondFile = new PageRanges();
    // Add all pages including and after page 3.
    pageRangesForSecondFile.addAllFrom(3);
    return pageRangesForSecondFile;
};
````

### Python

```python

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class CombinePDFWithPageRanges:
    def __init__(self):
        try:
            file = open('./combineFilesInput1.pdf', 'rb')
            input_stream_1 = file.read()
            file.close()

            file = open('./combineFilesInput2.pdf', 'rb')
            input_stream_2 = file.read()
            file.close()

## Creates an asset(s) from source file(s) and upload

stream_assets = [StreamAsset(input_stream_1, PDFServicesMediaType.PDF),
                             StreamAsset(input_stream_2, PDFServicesMediaType.PDF)]

            assets = pdf_services.upload_assets(stream_assets)

            page_ranges_for_first_file = self.get_page_range_for_first_file()
            page_ranges_for_second_file = self.get_page_range_for_second_file()

## Create parameters for the job

combine_pdf_params = ((CombinePDFParams()
                                  .add_asset(assets[0],page_ranges=page_ranges_for_first_file))
                                  .add_asset(assets[1],page_ranges=page_ranges_for_second_file))

## Creates an output stream and copy stream asset's content to it

output_file_path = 'output/CombinePDFWithPageRanges.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_page_range_for_first_file() -> PageRanges:

## Specify which pages of the first file are to be included in the combined file

page_ranges_for_first_file = PageRanges()

## Add pages 3 to 4

page_ranges_for_first_file.add_range(3, 4)
        return page_ranges_for_first_file

    @staticmethod
    def get_page_range_for_second_file() -> PageRanges:

## Specify which pages of the first file are to be included in the combined file

page_ranges_for_second_file = PageRanges()

## Add all pages including and after page 3

page_ranges_for_second_file.add_all_from(3)
        return page_ranges_for_second_file

if __name__ == "__main__":
    CombinePDFWithPageRanges()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/combinepdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assets": [
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 1,
                    "end": 3
                }
            ]
        },
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 2,
                    "end": 4
                }
            ]
        }
    ]
}'
```
