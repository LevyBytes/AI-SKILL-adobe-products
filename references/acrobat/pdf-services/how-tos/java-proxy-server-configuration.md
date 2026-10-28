# Java proxy server configuration

Use `ProxyServerConfig.Builder`, then attach the result through `ClientConfig.builder().withProxyServerConfig(...)`. Supply that client configuration when constructing `PDFServices`.

| Setting | Builder method or value |
| --- | --- |
| Proxy hostname or IP address | `withHost(...)` |
| Protocol | `withProxyScheme(ProxyScheme.HTTP)` or `ProxyScheme.HTTPS`; the documented default is HTTP. |
| Port | `withPort(...)`; the documented scheme defaults are 80 for HTTP and 443 for HTTPS. |
| Username and password | `withCredentials(new UsernamePasswordCredentials(...))`, when authentication is needed. |

The proxy types are in `com.adobe.pdfservices.operation.config.proxy`; `ClientConfig` is in `com.adobe.pdfservices.operation.config`. Open the [Java examples](java.md#proxy-examples) for the imports and builder statements. Match both scheme and port to the actual proxy. The [complete authenticated-proxy sample](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithAuthenticatedProxyServer.java) shows credential setup, client construction and an operation.
