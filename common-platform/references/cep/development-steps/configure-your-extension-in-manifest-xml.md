# 2. Configure Your Extension in `manifest.xml`

`manifest.xml` supports many configuration choices, but this guide keeps the focus on the minimum needed setup. For more detail, review the [manifest schema](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/ExtensionManifest_v_7_0.xsd).

For a minimal configuration, review these XML elements and attributes in `manifest.xml`. Match them to comments (**#1-7**) in the following code:

1. **ExtensionBundleId**: The bundle ID for the extension, for example `com.my.test`
1. **Extension Id**: The extension's ID. A common pattern combines `ExtensionBundleID` + `.panel` = `com.my.test.panel` (the manifest contains this ID in two places)
1. **Host Name & Version**: The host application IDs and versions the extension is designed to support. For details, see the [Adobe CEP HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep)
1. **MainPath**: The path to `index.html`, written relative to the top level directory of the code base
1. **ScriptPath**: The path to `index.jsx`, written relative to the top level directory of the code base
1. **Menu**: The extension name displayed in the host app(s) dropdown menu
1. **Size**: The starting dimensions for the extension

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!-- 1) -->
<ExtensionManifest ExtensionBundleId="com.my.test" ExtensionBundleVersion="1.0.0" Version="7.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ExtensionList>
    <!-- 2) -->
    <Extension Id="com.my.test.panel" Version="1.0.0" />
  </ExtensionList>
  <ExecutionEnvironment>
    <HostList>
      <!-- 3) -->
      <Host Name="PHSP" Version="19" />
      <Host Name="PHXS" Version="19" />
    </HostList>
    <LocaleList>
      <Locale Code="All" />
    </LocaleList>
    <RequiredRuntimeList>
      <RequiredRuntime Name="CSXS" Version="7.0" />
    </RequiredRuntimeList>
  </ExecutionEnvironment>
  <DispatchInfoList>
    <!-- 2) -->
    <Extension Id="com.my.test.panel">
      <DispatchInfo>
        <Resources>
          <!-- 4) -->
          <MainPath>./client/index.html</MainPath>
          <!-- 5) -->
          <ScriptPath>./host/index.jsx</ScriptPath>
          <CEFCommandLine />
        </Resources>
        <Lifecycle>
          <AutoVisible>true</AutoVisible>
        </Lifecycle>
        <UI>
          <Type>Panel</Type>
          <!-- 6) -->
          <Menu>My First Panel</Menu>
          <Geometry>
            <Size>
              <!-- 7) -->
              <Height>500</Height>
              <Width>350</Width>
            </Size>
          </Geometry>
          <Icons />
        </UI>
      </DispatchInfo>
    </Extension>
  </DispatchInfoList>
</ExtensionManifest>
```

With this configuration, Photoshop v19 displays a panel-type extension named "My First Panel" at 500px x 350px.
