/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace ElectronicSealWithTimeStampAuthority
{
    partial class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {
            ConfigureLogging();
            try
            {
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));
                PDFServices pdfServices = new PDFServices(credentials);
                using Stream inputStream = File.OpenRead(@"SampleInvoice.pdf");
                using Stream inputStreamSealImage = File.OpenRead(@"sampleSealImage.png");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                IAsset sealImageAsset =
                    pdfServices.Upload(inputStreamSealImage, PDFServicesMediaType.PNG.GetMIMETypeValue());
                DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;
                String sealFieldName = "Signature1";
                int sealPageNumber = 1;
                bool sealVisible = true;
                FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);
                FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                    .SetVisible(sealVisible)
                    .SetFieldLocation(fieldLocation)
                    .SetPageNumber(sealPageNumber)
                    .Build();
                String providerName = "<PROVIDER_NAME>";
                String accessToken = "<ACCESS_TOKEN>";
                String credentialID = "<CREDENTIAL_ID>";
                String pin = "<PIN>";
                CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");
                CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
                    .WithProviderName(providerName)
                    .WithCredentialID(credentialID)
                    .WithPin(pin)
                    .WithCSCAuthContext(cscAuthContext)
                    .Build();
                TSABasicAuthCredentials tsaBasicAuthCredentials =
                    new TSABasicAuthCredentials("<USERNAME>", "<PASSWORD>");
                TSAOptions tsaOptions = new RFC3161TSAOptions("<TIMESTAMP_URL>", tsaBasicAuthCredentials);
                PDFElectronicSealParams pdfElectronicSealParams =
                    PDFElectronicSealParams.PDFElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                        .WithDocumentLevelPermission(documentLevelPermission)
                        .WithTSAOptions(tsaOptions)
                        .Build();
                PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);
                pdfElectronicSealJob.SetSealImageAsset(sealImageAsset);
                String location = pdfServices.Submit(pdfElectronicSealJob);
                PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFElectronicSealResult>(location, typeof(PDFElectronicSealResult));
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
                String outputFilePath = CreateOutputFilePath();
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }
    }
}
