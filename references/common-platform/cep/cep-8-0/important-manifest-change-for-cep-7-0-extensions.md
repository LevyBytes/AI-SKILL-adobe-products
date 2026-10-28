# Important Manifest Change for CEP 7.0 Extensions

For CEP 7.0 manifest files, a `HostList` may be scoped to one extension in the bundle. The following counts as the "default" `HostList`:

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<!-- Other manifest settings omitted. -->
<ExecutionEnvironment>
  <HostList>
    <Host Name="DRWV" Version="15.0" />
    <Host Name="FLPR" Version="15.0" />
    <Host Name="IDSN" Version="11.0 "/>
    <Host Name="AICY" Version="11.0" />
    <Host Name="ILST" Version="19.0" />
    <Host Name="PHSP" Version="16.0" />
    <Host Name="PHXS" Version="16.0" />
    <Host Name="PPRO" Version="9.0" />
    <Host Name="PRLD" Version="4.0" />
    <Host Name="AEFT" Version="13.0" />
    <Host Name="DEMO" Version="1.0" />
    <Host Name="AUDT" Version="8.0" />
    <Host Name="LTRM" Version="7.0" />
    <Host Name="MUSE" Version="2015" />
  </HostList>
  <!-- Other manifest settings omitted. -->
</ExecutionEnvironment>
<!-- Other manifest settings omitted. -->
```

A custom `HostList` can also be set per extension, as shown here:

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<!-- Other manifest settings omitted. -->
<DispatchInfoList>
  <!-- Other manifest settings omitted. -->
  <Extension Id="com.adobe.CEPHTMLTEST.Panel1">
    <HostList>
      <Host Name="PHXS" />
    </HostList>
    <!-- Other manifest settings omitted. -->
  </Extension>
  <DispatchInfo>
  <!-- Other manifest settings omitted. -->
  </DispatchInfo>
  <!-- Other manifest settings omitted. -->
</DispatchInfoList>
```

`HostLists` under extension tags take precedence over the default `HostList` under the execution environment tag. Adding `HostList` nodes without child nodes effectively disables that extension for all host applications, and that behavior is intentional. Do not specify both `HostList` tags and `Host` attributes in `DispatchInfo` tags for an extension; choose only one form. Using both is likely to produce unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags rather than the Host attribute.
