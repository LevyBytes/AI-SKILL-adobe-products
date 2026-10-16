# FAQ

- Which minimum Photoshop and UDT versions are required for debugging?
  - UXP Scripting requires Photoshop v23.5 and UDT v1.6.
- Is one script allowed to invoke another script?
  - No; communication between scripts is unavailable.
- Are arguments supported for scripts?
  - The first release does not support argument passing, but **will be possible in a future release.**
- Are plugins able to execute scripts?
  - No, although UXP script code should generally be able to run inside a UXP plugin.
- Can module permissions be enabled manually?
  - Module permission cannot be enabled or requested by developers. Photoshop enables every permitted module by default.
- Why does PS permit only a small set of modules, and should future releases enable others?
  - The UXP script module is in its first release, and Adobe is working to enable access permissions for more modules in later releases.

## Overview

With UXP scripting, developers can run a single file that performs work in Photoshop. Instead of the ExtendScript model, these scripts can communicate with Photoshop through the [Photoshop](../photoshop-api-overview.md) API and the [UXP](../reference-index.md) API.
