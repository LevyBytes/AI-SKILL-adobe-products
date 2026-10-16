# CEP additional-file package configuration

To include other files or add more configuration, provide a configuration `.mxi` file. That file lets you define product configuration details such as supported applications, installation locations, and related settings. The recommended folder layout appears below:

This folder layout corresponds to the following `id.xml` sample:

XML excerpt; retain the enclosing document/configuration described here.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<macromedia-extension
    id="id"
    icon="icon.png"
    name="Example Package"
    requires-restart="true"
    version="1.0.0">
    <author name="AUTHOR NAME"/>
    <description>
        <![CDATA[YOUR DESCRIPTION]]>
    </description>
    <ui-access>
        <![CDATA[YOUR INSTRUCTION]]>
    </ui-access>
    <license-agreement>
        <![CDATA[YOUR LICENSE AGREEMENT]]>
    </license-agreement>
    <products>
        <product familyname="Photoshop" version="13"/>
    </products>
    <files>
        <file source="Extension/html.zxp"
            destination=""
            file-type="CSXS"
            products="Photoshop,Photoshop32,Photoshop64"
            minVersion="14.0" />
        <file source="PSD/"
            destination="$Downloads"
            file-type="ordinary"
            products="Photoshop,Photoshop32,Photoshop64"
            minVersion="14.0" />
    </files>
</macromedia-extension>
```

_SEE: [Configuration File Reference](https://helpx.adobe.com/extension-manager/kb/configuration-file-reference.html)_

For additional detail and a walkthrough, consult [How to Customize Your Adobe Creative Cloud Extension Package](https://medium.com/adobetech/how-to-customize-your-adobe-creative-cloud-extension-package-1aba6111aee4).

Related: [CEP single-extension package manifest](cep-single-extension-package-manifest.md).
