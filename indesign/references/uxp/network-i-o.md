# Network I/O

Network calls may be needed for image retrieval, web API access, remote-resource browsing, content sync, and similar plugin or script tasks. UXP provides several networking APIs, so choose the one that matches the job.

Plugins and Scripts

**In plugins**, request permission for ``access in the manifest and list endpoint`domains`.  
IMPORTANT: Before continuing, review the [manifest permissions](uxp-plugins.md) module.

**In scripts**, `network` permission is preset. The manifest-specific details in the examples below do not apply to scripts. The [manifest fundamentals section](uxp-manifest.md) explains these values.

For a quick network-call test, render a remotely served image.
