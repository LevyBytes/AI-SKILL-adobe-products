# Signing extensions

- Before extensions are signed, a certificate file must be obtained or created. Configurator and Adobe Exchange Packer can generate certificates. After signing in, developers can find the details [here](https://www.adobeexchange.com/resources/7).
- A HTML extension can be signed with three tools.
- [Extension Builder 3](http://labs.adobe.com/downloads/extensionbuilder3.html)
- CC Extensions Signing Toolkit (also on above labs web site)
  - Example using CC Extension signing toolkit: ccextensionswin64.exe -sign "d:\Adobe Layer Namer\Adobe Layer Namer\"_(input extension path)_ d:\AdobeLayerNamer.zxp _(output zxp path)_ d:\sign.p12 _(certificate path)_ 1 _(certificate password)_ Adobe Exchange Packer (please sign in so that you can see it.)
- [Adobe Exchange Packer](http://www.adobeexchange.com/resources) (please sign in so that you can see it.)
