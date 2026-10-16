# Preparing and testing every architecture

Build and validate the three required targets: macOS arm64 (Apple Silicon), Windows x64, and macOS x64 (Intel). Use [Apple universal binary documentation](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary) when producing a universal macOS build. When you do not have direct access to a platform, a virtual machine such as VMware Fusion or Parallels can help. One limitation still matters: Windows x64 virtualization is not available on Apple Silicon Macs; Intel Macs are the Macs that can do it. Covering all three architectures may require dedicated hardware.

For local development or independent distribution, a Hybrid plugin can be packaged and installed with just the architectures you include; unsupported platforms will fail to load it. The **Creative Cloud Marketplace requires all three architectures**, however, and the Developer Distribution portal rejects a `.ccx` whenever one is absent.
