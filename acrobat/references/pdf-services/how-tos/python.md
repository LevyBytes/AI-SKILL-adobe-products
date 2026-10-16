# Python

```javascript
client_config = ClientConfig((region = Region.US));
```

### Python

- [Python Sample for Proxy Server Config](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_proxy_server.py)
- [Python Sample for Proxy Server Config With Basic Authentication](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_authenticated_proxy_server.py)

### Python

```python
proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
)

client_config = ClientConfig(
    proxy_server_config=proxy_server_config
)
```

**Below: configuring the proxy server where authentication is required.**

### Python

```python
proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
    credentials=UsernamePasswordCredentials(
        username="USERNAME",
        password="PASSWORD"
    )
)

client_config = ClientConfig(
    proxy_server_config=proxy_server_config
)
```
