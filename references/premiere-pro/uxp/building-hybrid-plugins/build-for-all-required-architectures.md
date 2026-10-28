# 2. Build for all required architectures

Produce a uxpaddon build for:

- **macOS arm64** (Apple Silicon)
- **macOS x64** (Intel)
- **Windows x64**

If you cannot access every platform directly, a virtual machine such as VMware Fusion or Parallels may help. Apple Silicon Macs cannot virtualize Windows x64; only Intel Macs can do that, so separate hardware may be necessary. For macOS universal binaries, see [Apple's guide](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary).

You may package and install a Hybrid plugin that includes only some architectures, but unsupported platforms will not load it. The **Creative Cloud Marketplace requires all three architectures**, and the Developer Distribution portal rejects any `.ccx` missing one. Partial architecture coverage is appropriate only for [independent](../distributing-uxp-plugins-independently.md) or [enterprise](../distribution-overview.md) distribution.
