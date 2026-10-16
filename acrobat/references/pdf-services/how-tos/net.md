# .NET

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

Use the returned configuration when constructing the PDF Services client. This excerpt preserves the documented timeout or regional value.
