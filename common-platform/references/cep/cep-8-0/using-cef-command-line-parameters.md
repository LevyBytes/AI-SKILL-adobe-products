# Using CEF command line parameters

- Add `<CEFCommandLine><Parameter>--param1</Parameter></CEFCommandLine>`
- When the parameter uses `key=value`, add
  `<CEFCommandLine><Parameter>--param1=value1</Parameter></CEFCommandLine>`

Example:

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="xx.yy.zz" ExtensionBundleVersion="1.0" Version="5.0">
    <ExtensionList>
        <Extension Id="xx.yy.zz" Version="1.0"/>
    </ExtensionList>
    <ExecutionEnvironment>
        <HostList>
            <Host Name="PHXS" Version="13.0"/>
            <Host Name="PPRO" Version="6.0"/>
        </HostList>
        <LocaleList>
            <Locale Code="All"/>
        </LocaleList>
        <RequiredRuntimeList>
            <RequiredRuntime Name="CSXS" Version="5.0"/>
        </RequiredRuntimeList>
    </ExecutionEnvironment>  
    <DispatchInfoList>
        <Extension Id="xx.yy.zz">
            <DispatchInfo>
                <Resources>
                    <MainPath>./html/index.html</MainPath>
                    <CEFCommandLine>
                        <Parameter>--enable-media-stream</Parameter>
                    </CEFCommandLine>
                </Resources>
                <!-- Other manifest settings omitted. -->
            </DispatchInfo>
        </Extension>
    </DispatchInfoList>
</ExtensionManifest>
```
