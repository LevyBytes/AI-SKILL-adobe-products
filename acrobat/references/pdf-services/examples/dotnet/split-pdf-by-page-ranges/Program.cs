/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters;
using Adobe.PDFServicesSDK.pdfjobs.parameters.splitpdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
namespace SplitPDFByPageRanges
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
                using Stream inputStream = File.OpenRead(@"splitPDFInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                PageRanges pageRanges = GetPageRanges();
                SplitPDFParams splitPDFParams = new SplitPDFParams();
                splitPDFParams.SetPageRanges(pageRanges);
                SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);
                String location = pdfServices.Submit(splitPDFJob);
                PDFServicesResponse<SplitPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<SplitPDFResult>(location, typeof(SplitPDFResult));
                List<IAsset> resultAssets = pdfServicesResponse.Result.Assets;
                String outputFilePath = CreateOutputFilePath();
                int index = 0;
                foreach (IAsset resultAsset in resultAssets)
                {
                    StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
                    new FileInfo(Directory.GetCurrentDirectory() + String.Format(outputFilePath, index)).Directory
                        .Create();
                    Stream outputStream =
                        File.OpenWrite(Directory.GetCurrentDirectory() + String.Format(outputFilePath, index));
                    streamAsset.Stream.CopyTo(outputStream);
                    outputStream.Close();
                    index++;
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
        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
        private static PageRanges GetPageRanges()
        {
            PageRanges pageRanges = new PageRanges();
            pageRanges.AddSinglePage(1);
            pageRanges.AddRange(3, 4);
            return pageRanges;
        }
        private static String CreateOutputFilePath()
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return ("/output/split" + timeStamp + "_{0}.pdf");
        }
    }
}
