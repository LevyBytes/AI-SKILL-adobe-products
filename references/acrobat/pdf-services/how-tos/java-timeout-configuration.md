# Java timeout configuration

Build a `ClientConfig` with the HTTP timeout values the application needs, then supply it when constructing `PDFServices`.

| Setting | Default, milliseconds | Meaning |
| --- | ---: | --- |
| `connectTimeout` | 2000 | Maximum wait to establish the initial HTTPS connection. |
| `socketTimeout` | 10000 | Maximum interval between successive HTTP response packets. |

```java
import com.adobe.pdfservices.operation.config.ClientConfig;

public final class TimeoutClientConfig {
    public static ClientConfig create() {
        return ClientConfig.builder()
            .withConnectTimeout(3000)
            .withSocketTimeout(20000)
            .build();
    }
}
```

The example selects 3000 and 20000 milliseconds rather than the defaults. The [complete timeout sample](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java) supplies the returned configuration to the client and performs an operation. See [Java region and proxy examples](java.md) for the other client settings and the [configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) for the documented defaults.
