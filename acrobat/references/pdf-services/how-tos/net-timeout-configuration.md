# .NET timeout configuration

Available properties:

- **timeout**: Default: 400000. The longest span, in milliseconds, allowed to cover opening a connection, dispatching a request, and receiving a response.

Set replacement values for these properties by way of a custom `ClientConfig` class:

###

```csharp
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.config;

public static class PdfClientSettings {
    public static ClientConfig Create() {
        return ClientConfig.ConfigBuilder()
            .WithTimeout(500000)
            .Build();
    }
}
```

Use the returned configuration when constructing the PDF Services client. This excerpt preserves the documented timeout or regional value.

### .NET timeout configuration

Available properties:

- **timeout**: Default: 400000. The longest time, in milliseconds, allowed to open a connection, dispatch a request, and receive a response.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```csharp
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.config;

public static class PdfClientSettings {
    public static ClientConfig Create() {
        return ClientConfig.ConfigBuilder()
            .WithTimeout(40000)
            .Build();
    }
}
```

Use the returned configuration when constructing the PDF Services client. This excerpt preserves the documented timeout or regional value.
