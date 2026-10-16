# Python Proxy Server configuration

Available properties:

- **host**: Hostname of the proxy server, given as a DNS name or IP address.
- **scheme**: Default: http. The proxy server's scheme, that is http or https.
- **port**: Default: 80 for http, 443 for https. The port the proxy server listens on.
- **username**: The username used to authenticate.
- **password**: The password used to authenticate.

Every one of these properties lives inside the `proxyServerConfig` object. On top of that, `username` and `password` belong in the nested `usernamePasswordCredentials` object.

Configure the values above through a custom `ProxyServerConfig` class, then wire the proxy server up by way of the `ClientConfig` class.

**Below: configuring the proxy server with no authentication involved.**
