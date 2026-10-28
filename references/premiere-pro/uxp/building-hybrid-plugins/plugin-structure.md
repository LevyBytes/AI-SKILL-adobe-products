# Plugin Structure

Place uxpaddon binaries in the plugin bundle using the required platform-and-architecture directory layout:

```txt
📁 root directory
├── 📄 manifest.json
├── 📄 main.js
├── 📁 mac
│   ├── 📁 x64
│   │   └── ⚙️ sample-uxp-addon.uxpaddon (dylib)
│   └── 📁 arm64
│       └── ⚙️ sample-uxp-addon.uxpaddon (dylib)
└── 📁 win
    └── 📁 x64
        └── ⚙️ sample-uxp-addon.uxpaddon (dll)
```

If that layout is wrong, UDT logs _"Plugin Manifest Validation Failed"_ and the plugin cannot load.

For a quick setup check, try the pre-compiled `template-plugin` included with the SDK. Load it through UDT and locate it under **Window** > **UXP Plugins**.
