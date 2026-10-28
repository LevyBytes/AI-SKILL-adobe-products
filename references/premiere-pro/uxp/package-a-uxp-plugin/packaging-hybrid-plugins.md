# Packaging Hybrid Plugins

[Hybrid plugins](../hybrid-plugins/reference-index.md) add native C++ libraries (`.uxpaddon` files) alongside the usual JavaScript, HTML, and CSS assets. Check these items when packaging a Hybrid plugin:

1. **Directory structure**: put the `.uxpaddon` binaries into the required platform and architecture folders inside the plugin bundle:

```txt
my-hybrid-plugin/
├── manifest.json
├── index.html
├── index.js
└── addons/
    ├── mac/
    │   ├── arm64/
    │   │   └── sample-uxp-addon.uxpaddon
    │   └── x64/
    │       └── sample-uxp-addon.uxpaddon
    └── win/
        └── x64/
            └── sample-uxp-addon.uxpaddon
```

2. **All architectures**: ship binaries for macOS arm64 (Apple Silicon), macOS x64 (Intel), and Windows x64. A Hybrid plugin can be packaged and installed with fewer architectures, but unsupported platforms simply cannot load it. The **Creative Cloud Marketplace requires all three**, and the Developer Distribution portal rejects a `.ccx` that omits any required architecture.
3. **Code signing (macOS)**: for macOS, use a valid Apple Developer ID certificate to sign and notarize each `.uxpaddon` executable. Test or self-signed certificates are rejected, and the certificate needs at least one year of remaining validity.
4. **Admin credentials**: because Hybrid plugins contain native code, installation and update flows ask users for OS administrator credentials.

With an incorrect directory layout, UDT reports _"Plugin Manifest Validation Failed"_ and the plugin does not load.
