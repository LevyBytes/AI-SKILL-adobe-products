# High DPI Panel Icons

Panel extensions may need high DPI icons when running in high DPI display mode. Configure these icons in the extension manifest.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Icons>

 <Icon Type="Normal">./images/IconLight.png</Icon>

 <Icon Type="RollOver">./images/IconLight.png</Icon>

 <Icon Type="DarkNormal">./images/IconDark.png</Icon>

 <Icon Type="DarkRollOver">./images/IconDark.png</Icon>

</Icons>
```

Package both the normal icon files (IconLight.png and IconDark.png) and the high DPI icon files (IconLight@2X.png and IconDark@2X.png) with the extension.

Host applications then select:

- IconLight.png and IconDark.png on normal displays
- IconLight@2X.png and IconDark@2X.png on 200% high DPI displays

@2X.ext is the industry standard. More details are available at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.
