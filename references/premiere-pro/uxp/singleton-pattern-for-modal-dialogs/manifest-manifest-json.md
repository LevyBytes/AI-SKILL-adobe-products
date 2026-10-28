# Manifest: `manifest.json`

The manifest follows the normal panel entrypoint shape, with one important addition: the `enableAlerts` feature flag, which is **required to use the `alert()` method** called by `initDialog()` when invalid input is detected.
