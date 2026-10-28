# Distributing UXP Plugins Independently

UXP supports independent plugin distribution across several channels without requiring one fixed path.

### Overview

After you have [packaged your plugin](package-a-uxp-plugin.md), distribute the `.ccx` installer to colleagues or outside users according to your chosen channel.

Clone your plugin with a different ID **only if you also plan to distribute your plugin through the Creative Cloud Marketplace**; the [Packaging guide](package-a-uxp-plugin/mind-your-plugin-s-id.md) explains the ID concern.

Users installing outside the Creative Cloud Marketplace follow [the `.ccx` installer flow](install-a-uxp-plugin-important-note/install-a-uxp-plugin-use-a-ccx-installer-file.md), which includes a trusted-source warning dialog.
