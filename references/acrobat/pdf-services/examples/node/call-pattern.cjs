// PDF Services call sequence shared by every operation: upload, submit, wait, download.
// Swap CompressPDFJob and CompressPDFResult for the operation's classes in operations.md; jobs
// with options also take a params object. Errors are SDKError, ServiceUsageError or ServiceApiError.
const fs = require("node:fs");
const {pipeline} = require("node:stream/promises");
const {ServicePrincipalCredentials, PDFServices, MimeType, CompressPDFJob, CompressPDFResult} =
    require("@adobe/pdfservices-node-sdk");

async function run(sourcePath, targetPath) {
    const credentials = new ServicePrincipalCredentials({
        clientId: process.env.PDF_SERVICES_CLIENT_ID,
        clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
    });
    const pdfServices = new PDFServices({credentials});
    const readStream = fs.createReadStream(sourcePath);
    try {
        const inputAsset = await pdfServices.upload({readStream, mimeType: MimeType.PDF});
        const pollingURL = await pdfServices.submit({job: new CompressPDFJob({inputAsset})});
        const response = await pdfServices.getJobResult({pollingURL, resultType: CompressPDFResult});
        const streamAsset = await pdfServices.getContent({asset: response.result.asset});
        await pipeline(streamAsset.readStream, fs.createWriteStream(targetPath));
    } finally {
        readStream.destroy();
    }
}

run(process.argv[2], process.argv[3]).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
