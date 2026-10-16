# Important Manifest Change for CEP 5.0 Extensions

Use correct point product versions. Example:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<HostList>
    <Host Name="PHXS" Version="[15.0,15.9]"/>
    <Host Name="PHSP" Version="[15.0,15.9]"/>
</HostList>
```

This supports Photoshop version 15.0 through 15.9 inclusive. With the syntax below, releases up to 15.9 are supported, but 15.9 itself is excluded.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<HostList>
    <Host Name="PHXS" Version="[15.0,15.9)"/>
    <Host Name="PHSP" Version="[15.0,15.9)"/>
</HostList>
```

Use the correct CEP version as well.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<RequiredRuntimeList>
    <RequiredRuntime Name="CSXS" Version="5.0"/>
</RequiredRuntimeList>
```
