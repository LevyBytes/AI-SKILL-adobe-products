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
 * This sample illustrates how to secure a PDF file with owner password and allow certain access permissions
 * such as copying and editing the contents, and printing of the document at low resolution.
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
        readStream = sdk.fs.createReadStream("resources/protectPDFInput.pdf")
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: sdk.MimeType.PDF
        });
        // Create new permissions instance and add the required permissions
        const permissions = new sdk.Permissions({
            permissions: [
                sdk.Permission.PRINT_LOW_QUALITY,
                sdk.Permission.EDIT_DOCUMENT_ASSEMBLY,
                sdk.Permission.COPY_CONTENT
            ]
        });
        // Create parameters for the job
        const params = new sdk.ProtectPDFParams({
            ownerPassword: "password",
            permissions: permissions,
            encryptionAlgorithm: sdk.EncryptionAlgorithm.AES_256,
            contentEncryption: sdk.ContentEncryption.ALL_CONTENT_EXCEPT_METADATA,
        });
        // Create a new job instance
        const job = new sdk.ProtectPDFJob({inputAsset, params});
        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: sdk.ProtectPDFResult
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
        readStream?.destroy();
    }
})();
// Generates a string containing a directory structure and file name for the output file
