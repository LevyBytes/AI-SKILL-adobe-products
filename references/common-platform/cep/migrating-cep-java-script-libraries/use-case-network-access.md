# Use Case: Network Access

CEP previously used CSInterface.js for network information. In UXP, the manifest must list the domains that the plugin will access. Add the network object under `requiredPermissions` in the manifest to declare this access.

UXP can make network requests through XMLHttpRequest, WebSockets, and Fetch APIs.

Limitations:

- On macOS, self-signed certificates cannot be used with secure WebSockets.
- WebSockets do not support extensions.
- XHR binary content must use an ArrayBuffer; Blob is unsupported.
- XHR has no cookie support.
- XHR has no responseURL support.
