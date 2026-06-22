# Pdf Watermark Api (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Creates an output stream and copy stream asset's content to it — Apply Watermark on specified pages

```javascript
// Create parameters for the job
        const pdfWatermarkParams = new PDFWatermarkParams({
            watermarkAppearance: watermarkAppearance,
            pageRanges: pageRangesForWatermark
        })

        // Creates a new job instance
        const job = new PDFWatermarkJob({
            inputAsset: inputAsset,
            watermarkAsset: watermarkAsset,
            params: pdfWatermarkParams
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: PDFWatermarkResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = "./pdfWatermarkOutput.pdf";
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
        watermarkFileReadStream?.destroy();
    }
})();
```

### Python

```javascript

```

## Creates an asset(s) from source file(s) and upload

```javascript
input_asset = pdf_services.upload(
  (input_stream = source_file_input_stream),
  (mime_type = PDFServicesMediaType.PDF),
);
watermark_asset = pdf_services.upload(
  (input_stream = watermark_file_input_stream),
  (mime_type = PDFServicesMediaType.PDF),
);

watermark_appearance = WatermarkAppearance((appear_on_foreground = True), (opacity = 50));

page_ranges = PageRanges();
page_ranges.add_range(2, 5);
page_ranges.add_range(8, 10);
```

## Create parameters for the job

```javascript
pdf_watermark_params = PDFWatermarkParams(
  (page_ranges = page_ranges),
  (watermark_appearance = watermark_appearance),
);
```

## Creates a new job instance

```javascript
pdf_watermark_job = PDFWatermarkJob(
  (input_asset = input_asset),
  (watermark_asset = watermark_asset),
  (pdf_watermark_params = pdf_watermark_params),
);
```

## Creates an output stream and copy stream asset's content to it

```javascript
output_file_path = 'output/pdfWatermark.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    if __name__ == "__main__":
        PDFWatermark()
```

### REST API

```javascript
curl --location --request POST 'https://pdf-services.adobe.io/operation/addwatermark' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f68",
    "watermarkDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f1878678e68",
    "pageRanges": [
        {
           "start": 2,
           "end": 5
        },
        {
           "start": 8,
           "end": 10
        }
    ],
    "appearance": {
        "opacity": 50,
        "appearOnForeground": true
    }
}'
```
