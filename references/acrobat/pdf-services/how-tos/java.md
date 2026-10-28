# Java region and proxy examples

Build a `ClientConfig` and provide it when constructing `PDFServices`. Select the [service region](service-region-configuration.md), [proxy settings](java-proxy-server-configuration.md) and [timeouts](java-timeout-configuration.md) the application needs.

## Service region

```java
import com.adobe.pdfservices.operation.config.ClientConfig;
import com.adobe.pdfservices.operation.Region;

public final class RegionalClientConfig {
    public static ClientConfig create() {
        return ClientConfig.builder()
            .setRegion(Region.EU)
            .build();
    }
}
```

The [complete region sample](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/ExportPDFWithSpecifiedRegion.java) shows client construction and an export operation.

## Proxy examples

Add these imports to the application class. Place the statements from the chosen example inside an application method.

```java
import com.adobe.pdfservices.operation.config.ClientConfig;
import com.adobe.pdfservices.operation.config.proxy.ProxyScheme;
import com.adobe.pdfservices.operation.config.proxy.ProxyServerConfig;
import com.adobe.pdfservices.operation.config.proxy.UsernamePasswordCredentials;
```

Without authentication:

```java
ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()
    .withHost("PROXY_HOSTNAME")
    .withProxyScheme(ProxyScheme.HTTPS)
    .withPort(443)
    .build();

ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(10000)
    .withSocketTimeout(40000)
    .withProxyServerConfig(proxyServerConfig)
    .build();
```

With username/password authentication:

```java
ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()
    .withHost("PROXY_HOSTNAME")
    .withProxyScheme(ProxyScheme.HTTPS)
    .withPort(443)
    .withCredentials(new UsernamePasswordCredentials("USERNAME", "PASSWORD"))
    .build();

ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(10000)
    .withSocketTimeout(40000)
    .withProxyServerConfig(proxyServerConfig)
    .build();
```

Match the scheme, port and credentials to the actual proxy. The timeout values here are explicit choices in milliseconds. Open the complete [proxy sample](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithProxyServer.java) or [authenticated-proxy sample](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithAuthenticatedProxyServer.java) for client construction and operation handling.
