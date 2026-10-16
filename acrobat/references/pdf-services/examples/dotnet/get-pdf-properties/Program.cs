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
using Adobe.PDFServicesSDK.pdfjobs.parameters.pdfproperties;
using Adobe.PDFServicesSDK.pdfjobs.results;
using Adobe.PDFServicesSDK.pdfjobs.results.pdfproperties;
using log4net;
using log4net.Config;
using log4net.Repository;
namespace GetPDFProperties
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
                using Stream inputStream = File.OpenRead(@"pdfPropertiesInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                PDFPropertiesParams pdfPropertiesParams = PDFPropertiesParams.PDFPropertiesParamsBuilder()
                    .IncludePageLevelProperties()
                    .Build();
                PDFPropertiesJob pdfPropertiesJob = new PDFPropertiesJob(asset);
                pdfPropertiesJob.SetParams(pdfPropertiesParams);
                String location = pdfServices.Submit(pdfPropertiesJob);
                PDFServicesResponse<PDFPropertiesResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFPropertiesResult>(location, typeof(PDFPropertiesResult));
                PDFProperties pdfProperties = pdfServicesResponse.Result.PDFProperties;
                log.Info("The size of input PDF is : " + pdfProperties.Document?.FileSize);
                log.Info("Input PDF Version is : " + pdfProperties.Document?.PDFVersion);
                log.Info("Number of pages in input PDF : " + pdfProperties.Document?.PageCount);
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
    }
}
