# Hybrid plugins support

[Hybrid plugins](../hybrid-plugins/reference-index.md) submitted to the Creative Cloud Marketplace **must include binaries for all three supported architectures**: macOS arm64 (Apple Silicon), macOS x64 (Intel), and Windows x64. If any architecture is missing, the Developer Distribution portal rejects the `.ccx` package.

For local development or [independent distribution](../distributing-uxp-plugins-independently.md), a Hybrid plugin can cover fewer architectures, but Marketplace submission requires complete architecture coverage. Full details are in the [Building Hybrid Plugins](../building-hybrid-plugins/reference-index.md) guide.
