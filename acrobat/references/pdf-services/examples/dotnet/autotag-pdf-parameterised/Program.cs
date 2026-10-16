/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised
{
    partial class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main(String[] args)
        {
            ConfigureLogging();
            log.Info("--input " + GetInputFilePathFromCmdArgs(args));
            log.Info("--output " + GetOutputFilePathFromCmdArgs(args));
            log.Info("--report " + GetGenerateReportFromCmdArgs(args));
            log.Info("--shift_headings " + GetShiftHeadingsFromCmdArgs(args));
            try
            {
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));
                PDFServices pdfServices = new PDFServices(credentials);
                using Stream inputStream = File.OpenRead(GetInputFilePathFromCmdArgs(args));
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                AutotagPDFParams autotagPDFParams = GetParamsFromCmdArgs(args);
                AutotagPDFJob autotagPDFJob = new AutotagPDFJob(asset).SetParams(autotagPDFParams);
                String location = pdfServices.Submit(autotagPDFJob);
                PDFServicesResponse<AutotagPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<AutotagPDFResult>(location, typeof(AutotagPDFResult));
                IAsset resultAsset = pdfServicesResponse.Result.TaggedPDF;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
                String outputPath = GetOutputFilePathFromCmdArgs(args);
                String outputFilePathForTaggedPDF = CreateOutputFilePathForTaggedPDF(outputPath);
                new FileInfo(outputFilePathForTaggedPDF).Directory.Create();
                Stream outputStream = File.OpenWrite(outputFilePathForTaggedPDF);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
                if (autotagPDFParams != null && autotagPDFParams.IsGenerateReport)
                {
                    IAsset resultAssetReport = pdfServicesResponse.Result.Report;
                    StreamAsset streamAssetReport = pdfServices.GetContent(resultAssetReport);
                    String outputFilePathForReport = CreateOutputFilePathForTaggingReport(outputPath);
                    new FileInfo(outputFilePathForReport).Directory.Create();
                    Stream outputStreamReport =
                        File.OpenWrite(outputFilePathForReport);
                    streamAssetReport.Stream.CopyTo(outputStreamReport);
                    outputStreamReport.Close();
                }
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
