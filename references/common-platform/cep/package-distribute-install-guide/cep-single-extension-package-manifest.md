# CEP single-extension package manifest

For a package containing only one HTML extension, use a folder layout like the following and put `manifest.xml` under `CSXS` folder:

The following `manifest.xml` example corresponds to that folder layout:

Historical CEP 7 manifest example; the referenced client HTML and host JSX must be bundled at these paths.

```xml
<?xml version="1.0"?>
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  ExtensionBundleId="com.example.extension"
  ExtensionBundleVersion="1.0.0" Version="7.0">
  <ExtensionList>
    <Extension Id="com.example.extension.panel" Version="1.0.0"/>
  </ExtensionList>
  <ExecutionEnvironment>
    <HostList>
        <Host Name="PHXS" Version="14.0" />
        <Host Name="PHSP" Version="14.0" />
    </HostList>
    <LocaleList>
      <Locale Code="All"/>
    </LocaleList>
    <RequiredRuntimeList>
      <RequiredRuntime Name="CSXS" Version="7.0"/>
    </RequiredRuntimeList>
  </ExecutionEnvironment>
  <DispatchInfoList>
    <Extension Id="com.example.extension.panel">
      <DispatchInfo>
        <Resources>
          <MainPath>./client/index.html</MainPath>
          <ScriptPath>./host/index.jsx</ScriptPath>
          <CEFCommandLine/>
        </Resources>
        <Lifecycle>
          <AutoVisible>true</AutoVisible>
        </Lifecycle>
        <UI>
          <Type>Panel</Type>
          <Menu>Example Extension</Menu>
          <Geometry>
            <Size>
              <Height>500</Height>
              <Width>350</Width>
            </Size>
          </Geometry>
          <Icons/>
        </UI>
      </DispatchInfo>
    </Extension>
  </DispatchInfoList>
</ExtensionManifest>
```

_SEE: [complete version of the manifest spec](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/ExtensionManifest_v_7_0.xsd)_

Related references:

- [CEP additional-file package configuration](additional-package-configuration.md)
