# .NET timeout configuration

`WithTimeout` sets the maximum interval, in milliseconds, for connecting, sending the request and receiving the response. The [configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) lists a default of 400000 milliseconds. Supply the resulting `ClientConfig` to the `PDFServices` constructor.

## 500-second example

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

## 40-second alternative

Choose this alternative when the application requires the shorter interval. It is a different custom value, not the SDK default. Use one configuration implementation in the application.

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

The [complete timeout sample](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs) uses the 40000-millisecond choice and shows client construction, upload and result handling. See [.NET region configuration](net.md) to select the processing region.
