# Important Manifest Change for CEP 5.0 Extensions

Use correct point product versions. Here is an example.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<HostList>
    <Host Name="PHXS" Version="[15.0,15.9]"/>
    <Host Name="PHSP" Version="[15.0,15.9]"/>
</HostList>
```

This supports Photoshop version 15.0 through 15.9, inclusive. With the following syntax, releases up to 15.9 are supported, but 15.9 itself is excluded.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<HostList>
    <Host Name="PHXS" Version="[15.0,15.9)"/>
    <Host Name="PHSP" Version="[15.0,15.9)"/>
</HostList>
```

Use the correct CEP version.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<RequiredRuntimeList>
    <RequiredRuntime Name="CSXS" Version="5.0"/>
</RequiredRuntimeList>
```
