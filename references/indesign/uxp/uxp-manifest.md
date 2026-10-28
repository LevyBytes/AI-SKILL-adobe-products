# UXP Manifest

The required manifest is a JSON file at the root of the plugin bundle. Its filename is `manifest.json`, and every plugin must include it.

### Overview

Every UXP plugin includes one `manifest.json` file describing that plugin. The file stores metadata including the plugin name, version, icons, and entry points.

The manifest also declares the permissions the plugin needs. A particularly important field is the plugin ID, because that value identifies the plugin. (Distribution through Adobe's Marketplace requires valid plugin IDs; see [plugin ID documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).)

Because UXP plugins can target multiple host applications, the manifest includes a `host` field identifying the intended host. That host data is used to recognize the plugin in both the manifest and the plugin bundle.

## UXP manifest

The manifest is a core concept in UXP development. In practical terms, it is the configuration set that lets a script or plugin operate correctly.

This tutorial is meant to show how the manifest affects scripts and plugins behind the scenes, so the samples and recipes are easier to interpret.

For plugins, these settings must be supplied through a `manifest.json` file.

Scripts handle the same configuration differently: the values are fixed and hidden, almost as though no manifest exists. You cannot manage the script manifest directly, and you do not need to.
