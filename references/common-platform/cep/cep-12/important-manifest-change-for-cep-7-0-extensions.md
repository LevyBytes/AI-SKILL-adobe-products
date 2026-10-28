# Important Manifest Change for CEP 7.0 Extensions

In CEP 7.0, a manifest can use a `HostList` specific to an extension within the bundle. For example, this qualifies as the "default" `HostList`:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

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

You can also define a custom `HostList` per extension, as shown here:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

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

`HostLists` placed under extension tags override the default `HostList` under the execution environment tag. Important: adding `HostList` nodes without child nodes effectively turns that extension off for every host application, and this is intentional. For each extension, choose either `HostList` tags or `Host` attributes in `DispatchInfo` tags, rather than using both. Combining the two can cause unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags instead of the Host attribute.
