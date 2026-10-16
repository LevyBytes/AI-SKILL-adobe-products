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
 * This sample illustrates how to rotate pages in a PDF file
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
    let readStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new sdk.ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });
        // Creates a PDF Services instance
        const pdfServices = new sdk.PDFServices({credentials});
        // Creates an asset(s) from source file(s) and upload
        readStream = sdk.fs.createReadStream("resources/rotatePagesInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: sdk.MimeType.PDF
        });
        // First set of page ranges for rotating the specified pages of the input PDF file
        const firstPageRange = helpers.getFirstPageRangeForRotation();
        // Second set of page ranges for rotating the specified pages of the input PDF file
        const secondPageRange = helpers.getSecondPageRangeForRotation();
        // Create parameters for the job
        const params = new sdk.RotatePagesParams()
            .setAngleToRotatePagesBy(sdk.Angle._90, firstPageRange)
            .setAngleToRotatePagesBy(sdk.Angle._180, secondPageRange);
        // Creates a new job instance
        const job = new sdk.RotatePagesJob({inputAsset, params});
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.RotatePagesResult
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
        readStream?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
