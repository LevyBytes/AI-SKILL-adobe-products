# High DPI Panel Icons

Panel extensions may need high DPI icons when running in high DPI display mode. Configure these icons in the extension's manifest.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Icons>

 <Icon Type="Normal">./images/IconLight.png</Icon>

 <Icon Type="RollOver">./images/IconLight.png</Icon>

 <Icon Type="DarkNormal">./images/IconDark.png</Icon>

 <Icon Type="DarkRollOver">./images/IconDark.png</Icon>

</Icons>
```

Package IconLight.png and IconDark.png for normal scale, plus IconLight@2X.png and IconDark@2X.png for high DPI.

Host applications can locate these files and use them as follows:

- For normal display: IconLight.png and IconDark.png
- For 200% high DPI display: IconLight@2X.png and IconDark@2X.png

@2X.ext is the industry standard. For more details, see https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.
