# CEP 7.0 Extension Manifest Change

In CEP 7.0 manifest files, a particular extension in the bundle can now have its own `HostList`. For example, the following is treated as the "default" `HostList`:

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

A per-extension custom `HostList` can also be declared, as shown here:

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

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

`HostLists` declared under extension tags override the default `HostList` from the execution environment tag. A `HostList` node with no child nodes intentionally disables that extension for every host application. For each extension, choose either `HostList` tags or `Host` attributes in `DispatchInfo` tags; mixing both is likely to cause unexpected results. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags instead of the Host attribute.
