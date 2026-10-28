# High DPI Panel Icons

Panel extensions running in high DPI display mode can point to high DPI icon assets from the extension's manifest.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<Icons>

 <Icon Type="Normal">./images/IconLight.png</Icon>

 <Icon Type="RollOver">./images/IconLight.png</Icon>

 <Icon Type="DarkNormal">./images/IconDark.png</Icon>

 <Icon Type="DarkRollOver">./images/IconDark.png</Icon>

</Icons>
```

Package the standard icon files (IconLight.png and IconDark.png) together with the high DPI variants (IconLight@2X.png and IconDark@2X.png) inside the extension.

Host applications can resolve these files as follows:

- IconLight.png and IconDark.png for normal display
- IconLight@2X.png and IconDark@2X.png for 200% high DPI display

The common industry suffix is @2X.ext; more information is available at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop also recognizes the \_x2.ext format.
