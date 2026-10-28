# Proxy server configuration

Configure a proxy when the application's network requires SDK requests to pass through one. The current guide supplies Java, Node.js and Python examples, with optional username/password authentication. Create the language's proxy configuration, attach it to `ClientConfig`, then provide that client configuration to `PDFServices`.

- Open when choosing Java proxy fields and builder calls. [Java proxy settings](java-proxy-server-configuration.md).
- Open when choosing Node.js constructor options and the credentials object. [Node.js proxy settings](node-proxy-server-configuration.md).
- Open when distinguishing Python constructor arguments from JSON configuration keys. [Python proxy settings](python-proxy-server-configuration.md).

Match the hostname, scheme, port and credentials to the proxy actually used by the network. The proxy protocol is an explicit setting; its port does not select HTTP or HTTPS automatically. See the [official configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) for the supported examples.
