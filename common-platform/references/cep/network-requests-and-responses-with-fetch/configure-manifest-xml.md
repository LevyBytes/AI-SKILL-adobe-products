# Configure `manifest.xml`

As described in the [Getting Started guide](../getting-started-with-common-extensibility-platform-cep.md), `manifest.xml` is one place where an extension declares supported Creative Cloud host apps and version numbers.

For this guide, the extension supports Photoshop and InDesign. In `manifest.xml`, confirm that the supported host apps are listed inside `<HostList>`:

```xml
<!-- ...  -->
<ExecutionEnvironment>
  <HostList>
    <Host Name="PHSP" Version="19" /> <!-- Photoshop -->
    <Host Name="PHXS" Version="19" /> <!-- Photoshop -->
    <Host Name="IDSN" Version="13" /> <!-- InDesign -->
  </HostList>

  <!-- // ... -->
</ExecutionEnvironment>

<!-- // ... -->
```

The versions shown in the example code target only one version of each host app to keep the demo simple. In most cases, extension developers should support a range of host app versions. For details on multi-version host-app support, [see the Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-manifest).
