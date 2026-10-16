const { pipeline } = require("node:stream/promises");
const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  ExportPDFParams,
  ExportPDFTargetFormat,
  ExportPDFJob,
  ExportPDFResult
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
  let readStream;
  try {
    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({credentials});

    // Creates an asset(s) from source file(s) and upload
    readStream = fs.createReadStream("./Bodea Brochure.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF
    });

    // Create parameters for the job
    const params = new ExportPDFParams({
      targetFormat: ExportPDFTargetFormat.DOCX
    });

    // Creates a new job instance
    const job = new ExportPDFJob({inputAsset, params});

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({job});
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: ExportPDFResult
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({asset: resultAsset});

    // Creates an output stream and copy stream asset's content to it
    const outputFilePath = "./Bodea Brochure.docx";
    console.log(`Saving asset at ${outputFilePath}`);
    const outputStream = fs.createWriteStream(outputFilePath);
    await pipeline(streamAsset.readStream, outputStream);
  } catch (err) {
    process.exitCode = 1;
    console.log("Exception encountered while executing operation", err);
  } finally {
    readStream?.destroy();
  }
})();
