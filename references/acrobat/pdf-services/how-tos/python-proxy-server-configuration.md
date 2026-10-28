# Python proxy server configuration

Construct `ProxyServerConfig`, then pass it as `proxy_server_config` to `ClientConfig`. Pass the resulting client configuration to `PDFServices`. The [Python examples](python.md#proxy-without-authentication) show the required imports and both authentication modes.

| Python constructor argument | Meaning |
| --- | --- |
| `host` | Proxy hostname or IP address. |
| `scheme` | `ProxyScheme.HTTP` or `ProxyScheme.HTTPS`; the default is HTTP. |
| `port` | Positive integer port. If omitted, the documented scheme defaults are 80 for HTTP and 443 for HTTPS. |
| `credentials` | A `UsernamePasswordCredentials` instance containing `username` and `password`, when proxy authentication is required. |

The [SDK proxy API](https://opensource.adobe.com/pdfservices-python-sdk-samples/apidocs/latest/adobe.pdfservices.operation.config.proxy.html) documents a different JSON shape: the proxy configuration is under `proxyServerConfig`, and its username/password object is named `usernamePasswordCredentials`. Those JSON keys are not the Python constructor argument names. In Python, use `credentials=UsernamePasswordCredentials(...)` and `ClientConfig(proxy_server_config=...)`.

Set scheme and port independently to match the proxy. A numeric port alone does not choose the protocol. Open the [authenticated example](python.md#proxy-with-username-and-password) when credentials are needed.
