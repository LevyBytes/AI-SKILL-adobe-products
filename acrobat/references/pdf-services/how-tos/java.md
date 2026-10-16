# Java

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

Use the returned configuration when constructing the PDF Services client. Values retain this reference’s version-specific example.

### Java

- [Java Sample for Proxy Server Config](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithProxyServer.java)
- [Java Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithAuthenticatedProxyServer.java)

### Java

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

### Java

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
