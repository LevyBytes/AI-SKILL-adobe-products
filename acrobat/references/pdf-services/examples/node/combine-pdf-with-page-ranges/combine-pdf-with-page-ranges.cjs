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
 * This sample illustrates how to combine specific pages of multiple PDF files into a single PDF file.
 * <p>
 * Note that the SDK supports combining upto 20 files in one operation
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
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
        readStream1 = sdk.fs.createReadStream("resources/combineFilesInput1.pdf");
        readStream2 = sdk.fs.createReadStream("resources/combineFilesInput2.pdf");
        const [inputAsset1, inputAsset2] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: readStream1,
                mimeType: sdk.MimeType.PDF
            }, {
                readStream: readStream2,
                mimeType: sdk.MimeType.PDF
            }]
        });
        // Create a CombinePDFParams instance
        const params = new sdk.CombinePDFParams()
            .addAsset(inputAsset1, helpers.getPageRangesForFirstFile())
            .addAsset(inputAsset2, helpers.getPageRangesForSecondFile());
        // Create a new job instance
        const job = new sdk.CombinePDFJob({params});
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.CombinePDFResult
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
        readStream1?.destroy();
        readStream2?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
