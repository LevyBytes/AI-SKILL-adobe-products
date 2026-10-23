// PDF Services call sequence shared by every operation: upload, submit, wait, download.
// Swap CompressPDFJob and CompressPDFResult for the operation's classes in operations.md; jobs
// with options also take a params object. Errors are ServiceUsageException, ServiceApiException,
// SDKException or IOException.
using System;
using System.IO;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.results;

class CallPattern
{
    static void Main(string[] args)
    {
        PDFServices services = new PDFServices(new ServicePrincipalCredentials(
            Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
            Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET")));
        IAsset asset;
        using (Stream source = File.OpenRead(args[0]))
        {
            asset = services.Upload(source, PDFServicesMediaType.PDF.GetMIMETypeValue());
        }
        string location = services.Submit(new CompressPDFJob(asset));
        PDFServicesResponse<CompressPDFResult> response =
            services.GetJobResult<CompressPDFResult>(location, typeof(CompressPDFResult));
        StreamAsset content = services.GetContent(response.Result.Asset);
        using (Stream target = File.Create(args[1]))
        {
            content.Stream.CopyTo(target);
        }
    }
}
