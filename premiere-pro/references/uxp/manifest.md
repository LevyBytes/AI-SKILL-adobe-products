# Manifest

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

The Manifest is the JSON file at a plugin bundle's root that stores plugin metadata.

Each UXP plugin requires one `manifest.json` file, which the host application reads to **load and manage** the plugin. Beyond core metadata such as name, version, icons, and entry points, the manifest records permissions, compatibility information, and other definitions that shape host integration.

The most important value is the **plugin ID**, because it uniquely identifies the plugin after installation in the host application. A valid plugin ID is required for Adobe's Marketplace distribution; see the [Developer Distribution documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) for details.
