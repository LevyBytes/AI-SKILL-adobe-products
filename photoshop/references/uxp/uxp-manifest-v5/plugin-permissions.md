# Plugin Permissions

Plugins on Manifest v5 gain stronger security through the newer permissions model. When a plugin tries to use `openExternal`, `openPath`, or `sp-link`/anchor tags, the user is asked at runtime for consent. Other permissions are approved during installation. From v5 onward, the manifest must explicitly declare a permission or the plugin does not receive it by default.
