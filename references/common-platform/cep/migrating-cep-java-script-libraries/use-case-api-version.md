# Use Case: API Version

In CEP, check the CEP JavaScript API version tag against Photoshop's integrated CEP version before relying on a specific API. `CSInterface.getCurrentAPIVersion()` returns the CEP version that Photoshop includes.

For UXP, declare the target Photoshop version in the manifest configuration. The plugin can also declare which Photoshop API version it targets.

**Specify Photoshop and Photoshop API Version in the manifest.**

With the v1 implementation in Photoshop 2021, plugins did not run in isolation, so any plugin could alter Photoshop state at any moment. Photoshop 2022 added a modal JS scope, isolating plugins and preventing simultaneous Photoshop modifications by multiple plugins.

What changed in v2?

- History state suspend/resume behavior. Details are in [executeAsModal](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/executeasmodal/).
- Photoshop DOM access updates. The [changelog](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/changelog/#updated-dom-api) covers them.

Photoshop 2021 supports v1 only; Photoshop 2022 supports both API v1 and v2. Developers choose the target version in the manifest. The manifest's `host` value takes a `data` object containing the optional `apiLevel` field. By default:

- A plugin on a PS version earlier than 23.0.0 targets Photoshop API v1.
- A plugin on a PS version 23.0.0 or later targets Photoshop API v2.

Plugins may still use v1, but many newer features require Photoshop API v2, and a future major Photoshop update will remove v1 support. Remaining on v1 is mainly for special cases that depend on Photoshop menu state or other non-modal user interactions while the plugin runs.

**Access host application version**: `require("uxp").host.version`

**Access UXP API version**: `require("uxp").versions.uxp`

**Access plugin version from manifest**: `require("uxp").versions.plugin`
