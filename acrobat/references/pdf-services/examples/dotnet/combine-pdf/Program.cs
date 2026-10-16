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
using Adobe.PDFServicesSDK.pdfjobs.parameters.combinepdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
namespace CombinePDF
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
                using Stream inputStream1 = File.OpenRead(@"combineFilesInput1.pdf");
                using Stream inputStream2 = File.OpenRead(@"combineFilesInput2.pdf");
                List<IAsset> assets = pdfServices.UploadAssets(new List<StreamAsset>()
                {
                    new StreamAsset(inputStream1, PDFServicesMediaType.PDF.GetMIMETypeValue()),
                    new StreamAsset(inputStream2, PDFServicesMediaType.PDF.GetMIMETypeValue())
                });
                CombinePDFParams combinePDFParams = CombinePDFParams.CombinePDFParamsBuilder()
                    .AddAsset(assets[0])
                    .AddAsset(assets[1])
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
        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
        private static String CreateOutputFilePath()
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return ("/output/combine" + timeStamp + ".pdf");
        }
    }
}
