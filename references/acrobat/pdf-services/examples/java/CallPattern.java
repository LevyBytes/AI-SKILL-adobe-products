// PDF Services call sequence shared by every operation: upload, submit, wait, download.
// Swap CompressPDFJob and CompressPDFResult for the operation's classes in operations.md; jobs
// with options also take a params object. Errors are ServiceApiException, ServiceUsageException,
// SDKException or IOException.
import com.adobe.pdfservices.operation.PDFServices;
import com.adobe.pdfservices.operation.PDFServicesMediaType;
import com.adobe.pdfservices.operation.PDFServicesResponse;
import com.adobe.pdfservices.operation.auth.ServicePrincipalCredentials;
import com.adobe.pdfservices.operation.io.Asset;
import com.adobe.pdfservices.operation.io.StreamAsset;
import com.adobe.pdfservices.operation.pdfjobs.jobs.CompressPDFJob;
import com.adobe.pdfservices.operation.pdfjobs.result.CompressPDFResult;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

public class CallPattern {
    public static void main(String[] args) throws Exception {
        PDFServices services = new PDFServices(new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET")));
        Asset asset;
        try (InputStream source = Files.newInputStream(Paths.get(args[0]))) {
            asset = services.upload(source, PDFServicesMediaType.PDF.getMediaType());
        }
        String location = services.submit(new CompressPDFJob(asset));
        PDFServicesResponse<CompressPDFResult> response = services.getJobResult(location, CompressPDFResult.class);
        StreamAsset content = services.getContent(response.getResult().getAsset());
        Files.copy(content.getInputStream(), Paths.get(args[1]));
    }
}
