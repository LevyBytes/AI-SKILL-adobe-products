# File I/O - Overview

Many plugins need file and folder access. UXP can work with files and folders from these places:

- The plugin folder itself.
- Temporary storage reserved for that plugin.
- Locations outside the plugin, anywhere on the filesystem. Modern OS sandboxing means UXP cannot freely open arbitrary host-system files, so the plugin asks the user through a file-picker dialog and receives a _token_.
- A secure store specific to UXP, intended for secure files with sensitive contents. See _Secure Storage_, below.
- Network locations; those details are outside this section, so use [Networking](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/guides/uxp-guide/uxp-misc/network-io/index.md) instead.

> UXP is expected to add a persistent-token permission model so repeated access to the same path will not require user action in every session. Until then, plugins that repeatedly write to and read from a location should use the UXP-approved plugin locations exposed through methods on the UXP FileSystemProvider object.
