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
const args = process.argv;
/**
 * This sample illustrates how to generate a tagged PDF by setting options with command line arguments.
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
(async () => {
    let readStream;
    try {
        console.log("--input " + helpers.getInputFilePathFromCmdArgs(args));
        console.log("--output " + helpers.getOutputFilePathFromCmdArgs(args));
        console.log("--report " + helpers.getGenerateReportFromCmdArgs(args));
        console.log("--shift_headings " + helpers.getShiftHeadingsFromCmdArgs(args));
        // Initial setup, create credentials instance
        const credentials = new sdk.ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });
        // Creates a PDF Services instance
        const pdfServices = new sdk.PDFServices({credentials});
        // Creates an asset(s) from source file(s) and upload
        readStream = sdk.fs.createReadStream(helpers.getInputFilePathFromCmdArgs(args));
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: sdk.MimeType.PDF
        });
        // Create parameters for the job
        const params = new sdk.AutotagPDFParams({
            generateReport: helpers.getGenerateReportFromCmdArgs(args),
            shiftHeadings: helpers.getShiftHeadingsFromCmdArgs(args)
        });
        // Creates a new job instance
        const job = new sdk.AutotagPDFJob({inputAsset, params});
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.AutotagPDFResult
        });
        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.taggedPDF;
        const resultAssetReport = pdfServicesResponse.result.report;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});
        const streamAssetReport = resultAssetReport
            ? await pdfServices.getContent({asset: resultAssetReport})
            : undefined;
        // Creates an output stream and copy stream asset's content to it
        const outputPath = helpers.getOutputFilePathFromCmdArgs(args);
        const outputFilePath = outputPath + "autotagPDFInput-tagged.pdf";
        console.log(`Saving asset at ${outputFilePath}`);
        const writeStream = sdk.fs.createWriteStream(outputFilePath);
        await sdk.pipeline(streamAsset.readStream, writeStream);
        if (resultAssetReport) {
            const outputFileReportPath = outputPath + "autotagPDFInput-report.xlsx";
            console.log(`Saving asset at ${outputFileReportPath}`);
            const writeStream = sdk.fs.createWriteStream(outputFileReportPath);
            await sdk.pipeline(streamAssetReport.readStream, writeStream);
        }
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
