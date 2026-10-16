/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters;
using Adobe.PDFServicesSDK.pdfjobs.parameters.replacepages;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
namespace ReplacePDFPages
{
    class Program
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
                using Stream baseInputStream = File.OpenRead(@"baseInput.pdf");
                using Stream firstInputStream = File.OpenRead(@"replacePagesInput1.pdf");
                using Stream secondInputStream = File.OpenRead(@"replacePagesInput2.pdf");
                IAsset baseAsset = pdfServices.Upload(baseInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                IAsset firstAssetToReplace =
                    pdfServices.Upload(firstInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                IAsset secondAssetToReplace =
                    pdfServices.Upload(secondInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                PageRanges pageRanges = GetPageRangeForFirstFile();
                ReplacePagesParams replacePagesParams = ReplacePagesParams.ReplacePagesParamsBuilder(baseAsset)
                    .AddPagesForReplace(firstAssetToReplace, pageRanges, 1)
                    .AddPagesForReplace(secondAssetToReplace, 3)
                    .Build();
                ReplacePagesPDFJob replacePagesPDFJob = new ReplacePagesPDFJob(replacePagesParams);
                String location = pdfServices.Submit(replacePagesPDFJob);
                PDFServicesResponse<ReplacePagesResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ReplacePagesResult>(location, typeof(ReplacePagesResult));
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
        private static PageRanges GetPageRangeForFirstFile()
        {
            PageRanges pageRanges = new PageRanges();
            pageRanges.AddRange(1, 3);
            pageRanges.AddSinglePage(4);
            return pageRanges;
        }
        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
        private static string CreateOutputFilePath()
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return ("/output/replace" + timeStamp + ".pdf");
        }
    }
}
