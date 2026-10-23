# Mind your Plugin's ID

Confirm the plugin ID before creating a distribution package. In `manifest.json`, include a valid string property named `id`; installers use that value to tell this plugin apart from every other plugin.

For a plugin you intend to **publish to the Adobe Creative Cloud Marketplace**, create the UXP plugin listing in the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin-id#starting-from-adobe-developer-distribution) and copy the portal-provided ID into `manifest.json`. Validation compares the portal record with the manifest, so mismatched IDs prevent the plugin from passing review.

For additional detail on retrieving the ID string from the Developer Distribution portal, see [this guide](../create-a-listing/reference-index.md).

[[Figure: Developer Distribution - plugin ID](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-new-listing-created.png)](../create-a-listing/create-a-new-listing.md)
