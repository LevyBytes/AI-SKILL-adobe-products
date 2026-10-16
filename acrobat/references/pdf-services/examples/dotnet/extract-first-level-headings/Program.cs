/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace ExtractTextInfoFromPDF
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
                using Stream inputStream = File.OpenRead(@"Adobe Extract API Sample.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                ExtractPDFParams extractPDFParams = ExtractPDFParams.ExtractPDFParamsBuilder()
                    .AddElementToExtract(ExtractElementType.TEXT)
                    .Build();
                ExtractPDFJob extractPDFJob = new ExtractPDFJob(asset)
                    .SetParams(extractPDFParams);
                String location = pdfServices.Submit(extractPDFJob);
                PDFServicesResponse<ExtractPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ExtractPDFResult>(location, typeof(ExtractPDFResult));
                IAsset resultAsset = pdfServicesResponse.Result.Resource;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
                String outputFilePath = "/output/ExtractTextInfoFromPDF.zip";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.Create(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
                Console.Write("Successfully extracted information from PDF. Printing H1 Headers:\n\n");
                PrintHeadingOutput(Directory.GetCurrentDirectory() + outputFilePath);
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
