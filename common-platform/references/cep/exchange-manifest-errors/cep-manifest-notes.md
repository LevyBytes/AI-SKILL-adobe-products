# CEP Manifest Notes

As of December, 2022, the Exchange portal rejects "99.9" as a maximum version number in extension manifests. In the past, ZXP packages submitted to the exchange could use 99.9 as the maximum product version in the manifest. For example, an extension that supports Illustrator version 25 and later may have used this line in the manifest file:

```xml
<Host Name="ILST" Version="[25.0,99.9]"/>
```

To show that there is no maximum version, include only the minimum version in the manifest, for example:

```xml
<Host Name="ILST" Version="25.0"/>
```

More manifest details are in the [manifest documentation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#extension-manifest). Also consult the [chart of product version numbers](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).
