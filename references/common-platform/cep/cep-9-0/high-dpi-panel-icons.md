# High DPI Panel Icons

For high DPI display mode, panel extensions can provide high DPI icons through the extension manifest.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Icons>

 <Icon Type="Normal">./images/IconLight.png</Icon>

 <Icon Type="RollOver">./images/IconLight.png</Icon>

 <Icon Type="DarkNormal">./images/IconDark.png</Icon>

 <Icon Type="DarkRollOver">./images/IconDark.png</Icon>

</Icons>
```

Package the normal icon files, IconLight.png and IconDark.png, together with the high DPI files, IconLight@2X.png and IconDark@2X.png, inside the extension.

Host applications can locate and use:

- IconLight.png and IconDark.png for normal display
- IconLight@2X.png and IconDark@2X.png for 200% high DPI display

@2X.ext is the industry standard. More information is at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.
