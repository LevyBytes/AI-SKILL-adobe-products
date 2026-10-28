# High DPI Panel Icons

Panel extensions may use high DPI icons when high DPI display mode is active. Configure those icons in the extension manifest.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Icons>

 <Icon Type="Normal">./images/IconLight.png</Icon>

 <Icon Type="RollOver">./images/IconLight.png</Icon>

 <Icon Type="DarkNormal">./images/IconDark.png</Icon>

 <Icon Type="DarkRollOver">./images/IconDark.png</Icon>

</Icons>
```

Package the normal icon files, IconLight.png and IconDark.png, together with the high DPI icon files, IconLight@2X.png and IconDark@2X.png, in the extension.

Host applications use these assets:

- Normal display: IconLight.png and IconDark.png
- 200% high DPI display: IconLight@2X.png and IconDark@2X.png

@2X.ext is the industry standard. See https://developer.apple.com/library/ios/qa/qa1686/_index.html for more details.

Note: Photoshop supports \_x2.ext format.
