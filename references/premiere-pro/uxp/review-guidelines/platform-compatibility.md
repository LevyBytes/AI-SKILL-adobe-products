# 5. Platform Compatibility

Verify that the plugin works on every supported platform and architecture:

- **Multi-architecture support**: [UXP Hybrid plugins](../hybrid-plugins.md) sent to the Marketplace need binaries for macOS arm64, macOS x64, and Windows x64; submissions that omit an architecture are rejected
- **Code signing**: macOS `.uxpaddon` executables in Hybrid plugins need code signing and notarization with a valid Apple Developer ID certificate with minimum 1 year validity. For details, see the [Hybrid Plugins packaging guide](../package-a-uxp-plugin/packaging-hybrid-plugins.md).
- **Installation**: avoid OS-level warning prompts during install, and verify that installation and runtime use do not crash
- **Host application compatibility**: confirm that the plugin neither crashes nor negatively affects host applications
