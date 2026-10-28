# UXP Invisible Plugin Sample

This is an invisible UXP plugin example. During its entire lifecycle, an invisible plugin stays hidden, with no UI and no persistent menu options.

The plugin opens an alert dialog. The alert appears when `entrypoints.plugin.create()` runs; that method runs only when the plugin is installed. To make the alert appear again, uninstall the plugin and install it again.
