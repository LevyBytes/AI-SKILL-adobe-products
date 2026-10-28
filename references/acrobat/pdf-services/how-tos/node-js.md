# Node.js region and proxy examples

Create a `ClientConfig` and pass it as `clientConfig` to `PDFServices`. Select the [service region](service-region-configuration.md) and [proxy settings](node-proxy-server-configuration.md) for the account and network. Each block is an independent configuration example.

## Service region

```javascript
const { ClientConfig, Region } = require("@adobe/pdfservices-node-sdk");

const clientConfig = new ClientConfig({
  region: Region.EU,
});
```

The [complete region sample](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/export-pdf-with-specified-region.js) supplies this configuration to the client before exporting a document.

## Proxy without authentication

```javascript
const { ClientConfig, ProxyServerConfig, ProxyScheme } = require("@adobe/pdfservices-node-sdk");

const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
});
const clientConfig = new ClientConfig({ proxyServerConfig });
```

Match scheme and port to the proxy; the explicit `HTTP`/`443` pair does not select HTTPS. Use `ProxyScheme.HTTPS` when that is the required protocol. See the [complete proxy sample](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-proxy-server.js).

## Proxy with username and password

```javascript
const {
  ClientConfig, ProxyServerConfig, ProxyScheme, UsernamePasswordCredentials,
} = require("@adobe/pdfservices-node-sdk");

const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
  credentials: new UsernamePasswordCredentials({
    username: "USERNAME",
    password: "PASSWORD",
  }),
});
const clientConfig = new ClientConfig({ proxyServerConfig });
```

The [complete authenticated-proxy sample](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-authenticated-proxy-server.js) demonstrates credential setup and client construction. Add a [timeout option](node-js-timeout-configuration.md) to the same client configuration when needed.
