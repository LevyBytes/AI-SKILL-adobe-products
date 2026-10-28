# Python region and proxy examples

Create a `ClientConfig` and supply it to `PDFServices` as `client_config`. Select the [service region](service-region-configuration.md) and [proxy settings](python-proxy-server-configuration.md) required by the account and network. Each block below is an independent configuration example.

## Service region

```python
from adobe.pdfservices.operation.config.client_config import ClientConfig
from adobe.pdfservices.operation.region import Region

client_config = ClientConfig(region=Region.US)
```

`Region.US` selects the default explicitly. The [complete region sample](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/export_pdf_with_specified_region.py) demonstrates `Region.EU` and client construction.

## Proxy without authentication

```python
from adobe.pdfservices.operation.config.client_config import ClientConfig
from adobe.pdfservices.operation.config.proxy.proxy_scheme import ProxyScheme
from adobe.pdfservices.operation.config.proxy.proxy_server_config import ProxyServerConfig

proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
)
client_config = ClientConfig(proxy_server_config=proxy_server_config)
```

Match both scheme and port to the actual proxy. The explicit `HTTP`/`443` pair does not select HTTPS automatically. Use `ProxyScheme.HTTPS` when that is the proxy's protocol. See the [complete proxy sample](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_proxy_server.py).

## Proxy with username and password

```python
from adobe.pdfservices.operation.config.client_config import ClientConfig
from adobe.pdfservices.operation.config.proxy.proxy_scheme import ProxyScheme
from adobe.pdfservices.operation.config.proxy.proxy_server_config import ProxyServerConfig
from adobe.pdfservices.operation.config.proxy.username_password_credentials import UsernamePasswordCredentials

proxy_server_config = ProxyServerConfig(
    host="PROXY_HOSTNAME",
    port=443,
    scheme=ProxyScheme.HTTP,
    credentials=UsernamePasswordCredentials(username="USERNAME", password="PASSWORD"),
)
client_config = ClientConfig(proxy_server_config=proxy_server_config)
```

The [complete authenticated-proxy sample](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_authenticated_proxy_server.py) supplies the configuration to `PDFServices`. Replace the placeholders with the application's proxy settings. Add [timeout arguments](python-timeout-configuration.md) to the same `ClientConfig` when needed.
