# Python timeout configuration

Pass timeout values to a `ClientConfig` instance, then pass that instance as `client_config` when constructing `PDFServices`. Use the constructor interface shown in the [current configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/).

| Python argument | Guide label | Default, milliseconds | Meaning |
| --- | --- | ---: | --- |
| `connect_timeout` | `connectTimeout` | 4000 | Wait for the connection to be established. |
| `read_timeout` | `readTimeout` | 10000 | Wait for the server response after connecting. |

This example explicitly selects the documented defaults. Change the values to match the application's connection and response requirements.

```python
from adobe.pdfservices.operation.config.client_config import ClientConfig

client_config = ClientConfig(connect_timeout=4000, read_timeout=10000)
```

Open the [complete timeout sample](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_custom_timeouts.py) for credential setup, client construction, upload, submission and result handling. Configure [region and proxy settings](python.md) on the same client configuration when needed.
