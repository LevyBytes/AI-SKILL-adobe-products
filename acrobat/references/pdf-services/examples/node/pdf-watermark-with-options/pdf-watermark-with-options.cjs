/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */
const sdk = require('./dependencies.cjs');
const helpers = require('./helpers.cjs');
/**
 * This sample illustrates how to apply watermark to a PDF file.
 * It showcases how to customize watermarking with specific page ranges and appearance settings.
 * <p>
 * Note that PDF Watermark operation on a PDF file results in a PDF file.
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
    let sourceFileReadStream;
    let waterMarkReadStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new sdk.ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });
        // Creates a PDF Services instance
        const pdfServices = new sdk.PDFServices({credentials});
        // Creates an asset(s) from source file(s) and upload
        sourceFileReadStream = sdk.fs.createReadStream("resources/watermarkPDFInput.pdf");
        waterMarkReadStream = sdk.fs.createReadStream("resources/watermark.pdf");
        const [inputAsset, watermarkAsset] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: sourceFileReadStream,
                mimeType: sdk.MimeType.PDF
            }, {
                readStream: waterMarkReadStream,
                mimeType: sdk.MimeType.PDF
            }]
        });
        // watermark pages of the document (as specified by PageRanges).
        const pageRangesForWatermark = helpers.getPageRangesForWatermark();
        const watermarkAppearance = new sdk.WatermarkAppearance({
            appearOnForeground: false,
            opacity: 50,
        });
        // Create parameters for the job
        const pdfWatermarkParams = new sdk.PDFWatermarkParams({
            watermarkAppearance: watermarkAppearance,
            pageRanges: pageRangesForWatermark
        })
        // Creates a new job instance
        const job = new sdk.PDFWatermarkJob({
            inputAsset: inputAsset,
            watermarkAsset: watermarkAsset,
            params: pdfWatermarkParams
        });
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.PDFWatermarkResult
        });
        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});
        // Creates an output stream and copy stream asset's content to it
        const outputFilePath = helpers.createOutputFilePath();
        console.log(`Saving asset at ${outputFilePath}`);
        const outputStream = sdk.fs.createWriteStream(outputFilePath);
        await sdk.pipeline(streamAsset.readStream, outputStream);
    } catch (err) {
        process.exitCode = 1;
        if (err instanceof sdk.SDKError || err instanceof sdk.ServiceUsageError || err instanceof sdk.ServiceApiError) {
            console.log("Exception encountered while executing operation", err);
        } else {
            console.log("Exception encountered while executing operation", err);
        }
    } finally {
        sourceFileReadStream?.destroy();
        waterMarkReadStream?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
