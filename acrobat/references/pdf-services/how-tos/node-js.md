# Node.js

```javascript
const clientConfig = new ClientConfig({
  region: Region.EU,
});
```

### Node.js

- [Node Sample for Proxy Server Config](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-proxy-server.js)
- [Node Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-authenticated-proxy-server.js)

### Node.js

```js
const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
});

const clientConfig = new ClientConfig({
  proxyServerConfig,
});
```

### Node.js

```js
const proxyServerConfig = new ProxyServerConfig({
  host: "PROXY_HOSTNAME",
  port: 443,
  scheme: ProxyScheme.HTTP,
  credentials: new UsernamePasswordCredentials({
    username: "USERNAME",
    password: "PASSWORD",
  }),
});

const clientConfig = new ClientConfig({
  proxyServerConfig,
});
```
