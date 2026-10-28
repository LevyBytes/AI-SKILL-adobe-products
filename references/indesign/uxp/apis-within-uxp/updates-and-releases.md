# Updates and releases

The API surface is still evolving, and future releases will add more capabilities. As a result, both DOM and UXP APIs receive updates with each release.

The [What's new](../release-history/reference-index.md) section lists new features, changes, and fixes included in the latest release. DOM APIs are versioned according to the application version. The UXP version associated with each release is also important.

When a plugin/script uses a specific UXP API, the host application must support that UXP version. For example, InDesign v18.5 supports UXP v7.1; if you use a UXP v7.2 API, the plugin/script will not work and can produce unexpected errors. Look for the minimum compatible UXP and host application versions in API references, examples, and samples.

The minimum UXP version supported by the application can be found several ways:

1. In UDT, after InDesign is running and appears under 'Connected apps', the displayed entry includes the UXP version together with the InDesign version number.
2. Query host information programmatically with UXP APIs; the example is in [this recipe](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/resources/recipes/host-info/index.md).
3. The [What's new](../release-history/reference-index.md) section mentions the UXP version number for each release.
