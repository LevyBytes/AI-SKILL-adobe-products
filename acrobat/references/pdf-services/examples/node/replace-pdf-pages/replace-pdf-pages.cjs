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
 * This sample illustrates how to replace specific pages in a PDF file
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
    let baseReadStream;
    let readStream1;
    let readStream2;
    try {
        // Initial setup, create credentials instance
        const credentials = new sdk.ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });
        // Creates a PDF Services instance
        const pdfServices = new sdk.PDFServices({credentials});
        // Creates an asset(s) from source file(s) and upload
        baseReadStream = sdk.fs.createReadStream("resources/baseInput.pdf");
        readStream1 = sdk.fs.createReadStream("resources/replacePagesInput1.pdf");
        readStream2 = sdk.fs.createReadStream("resources/replacePagesInput2.pdf");
        const [baseAsset, asset1, asset2] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: baseReadStream,
                mimeType: sdk.MimeType.PDF
            }, {
                readStream: readStream1,
                mimeType: sdk.MimeType.PDF
            }, {
                readStream: readStream2,
                mimeType: sdk.MimeType.PDF
            }]
        });
        // Create parameters for the job
        const params = new sdk.ReplacePagesParams(baseAsset)
            // Add the first asset as input to the params, along with its page ranges and base page
            .addPagesForReplace({
                asset: asset1,
                pageRanges: helpers.getPageRangesForFirstFile(),
                basePage: 1
            })
            // Add the second asset as input to the params, along with base page
            .addPagesForReplace({
                asset: asset2,
                basePage: 3
            });
        // Create a new job instance
        const job = new sdk.ReplacePagesJob({params});
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.InsertPagesResult
        });
        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});
        // Creates an output stream and copy result asset's content to it
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
        baseReadStream?.destroy();
        readStream1?.destroy();
        readStream2?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
