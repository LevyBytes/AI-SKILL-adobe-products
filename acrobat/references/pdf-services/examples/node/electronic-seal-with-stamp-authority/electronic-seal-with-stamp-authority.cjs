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
const {createSealOptions} = require('./seal-options.cjs');
const helpers = require('./helpers.cjs');
/**
 * This sample illustrates how to apply electronic seal over the PDF document using time stamp authority options.
 *
 * <p>
 * To know more about PDF Electronic Seal, please see the
 * <a href="https://www.adobe.com/go/dc_eseal_overview_doc" target="_blank">documentation</a>.
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
    let sourceFileReadStream;
    let sealImageReadStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new sdk.ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });
        // Creates a PDF Services instance
        const pdfServices = new sdk.PDFServices({credentials});
        // Creates an asset(s) from source file(s) and upload
        sourceFileReadStream = sdk.fs.createReadStream("resources/sampleInvoice.pdf")
        sealImageReadStream = sdk.fs.createReadStream("resources/sampleSealImage.png");
        const [sourceFileAsset, sealImageAsset] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: sourceFileReadStream,
                mimeType: sdk.MimeType.PDF
            }, {
                readStream: sealImageReadStream,
                mimeType: sdk.MimeType.PNG
            }]
        });
        const params = createSealOptions();
        // Creates a new job instance
        const job = new sdk.PDFElectronicSealJob({
            inputAsset: sourceFileAsset,
            sealImageAsset,
            params,
        });
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.PDFElectronicSealResult
        });
        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});
        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = helpers.createOutputFilePath();
        console.log(`Saving asset at ${outputFilePath}`);
        const writeStream = sdk.fs.createWriteStream(outputFilePath);
        await sdk.pipeline(streamAsset.readStream, writeStream);
    } catch (err) {
        process.exitCode = 1;
        if (err instanceof sdk.SDKError || err instanceof sdk.ServiceUsageError || err instanceof sdk.ServiceApiError) {
            console.log("Exception encountered while executing operation", err);
        } else {
            console.log("Exception encountered while executing operation", err);
        }
    } finally {
        sourceFileReadStream?.destroy();
        sealImageReadStream?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
