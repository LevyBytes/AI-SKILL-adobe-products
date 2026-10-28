# .NET service region configuration

Select a permitted [processing region](service-region-configuration.md), build the `ClientConfig`, and pass it to the `PDFServices` constructor alongside the credentials.

```csharp
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.config;

public static class PdfClientSettings {
    public static ClientConfig Create() {
        return ClientConfig.ConfigBuilder()
            .SetRegion(Region.EU)
            .Build();
    }
}
```

The [complete region sample](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/ExportPDFWithSpecifiedRegion/Program.cs) demonstrates client construction and document export using `Region.EU`. See [.NET timeout configuration](net-timeout-configuration.md) when the same client also needs a custom request interval.
