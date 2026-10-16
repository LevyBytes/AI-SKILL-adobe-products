/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace CombinePDFWithPageRanges
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
                using Stream inputStream1 = File.OpenRead(@"combineFileWithPageRangeInput1.pdf");
                using Stream inputStream2 = File.OpenRead(@"combineFileWithPageRangeInput2.pdf");
                List<IAsset> assets = pdfServices.UploadAssets(new List<StreamAsset>()
                {
                    new StreamAsset(inputStream1, PDFServicesMediaType.PDF.GetMIMETypeValue()),
                    new StreamAsset(inputStream2, PDFServicesMediaType.PDF.GetMIMETypeValue())
                });
                PageRanges pageRangesForFirstFile = GetPageRangeForFirstFile();
                PageRanges pageRangesForSecondFile = GetPageRangeForSecondFile();
                CombinePDFParams combinePDFParams = CombinePDFParams.CombinePDFParamsBuilder()
                    .AddAsset(assets[0], pageRangesForFirstFile)
                    .AddAsset(assets[1], pageRangesForSecondFile)
                    .Build();
                CombinePDFJob combinePDFJob = new CombinePDFJob(combinePDFParams);
                String location = pdfServices.Submit(combinePDFJob);
                PDFServicesResponse<CombinePDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<CombinePDFResult>(location, typeof(CombinePDFResult));
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
