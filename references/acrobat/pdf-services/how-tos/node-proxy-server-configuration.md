# Node.js proxy server configuration

Import `ProxyServerConfig`, `ProxyScheme`, `UsernamePasswordCredentials` and `ClientConfig` from `@adobe/pdfservices-node-sdk`. Pass the proxy instance as `proxyServerConfig` to `ClientConfig`, then pass the client configuration as `clientConfig` to `PDFServices`.

| Constructor option | Meaning |
| --- | --- |
| `host` | Proxy hostname or IP address. |
| `scheme` | `ProxyScheme.HTTP` or `ProxyScheme.HTTPS`; the documented default is HTTP. |
| `port` | Port on which the actual proxy listens. |
| `credentials` | A `UsernamePasswordCredentials` instance containing `username` and `password`, when authentication is required. |

Open the [Node.js examples](node-js.md#proxy-without-authentication) for both authentication modes. Match scheme and port independently; using port 443 does not automatically enable HTTPS. The [complete authenticated-proxy sample](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-authenticated-proxy-server.js) supplies this configuration to the client and performs a PDF operation.
