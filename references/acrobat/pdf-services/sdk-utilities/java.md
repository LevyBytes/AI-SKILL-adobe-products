# Java

```java
import com.adobe.pdfservices.operation.PDFServices;
import com.adobe.pdfservices.operation.PDFServicesResponse;
import com.adobe.pdfservices.operation.io.Asset;
import com.adobe.pdfservices.operation.pdfjobs.result.CreatePDFResult;

public final class CreatedPdfAsset {
    public static Asset refresh(PDFServices service,
            PDFServicesResponse<CreatePDFResult> response) throws Exception {
        Asset asset = response.getResult().getAsset();
        return service.refreshDownloadURI(asset);
    }
}
```

Pass an authenticated PDFServices client and a completed CreatePDFResult response. Handle service errors at the caller.

### Java

```java
import com.adobe.pdfservices.operation.PDFServices;
import com.adobe.pdfservices.operation.PDFServicesResponse;
import com.adobe.pdfservices.operation.io.Asset;
import com.adobe.pdfservices.operation.pdfjobs.result.CreatePDFResult;

public final class CreatedPdfAsset {
    public static void delete(PDFServices service,
            PDFServicesResponse<CreatePDFResult> response) throws Exception {
        Asset asset = response.getResult().getAsset();
        service.deleteAsset(asset);
    }
}
```

Pass an authenticated PDFServices client and a completed CreatePDFResult response. Handle service errors at the caller.
