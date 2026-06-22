# Faq

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

This area collects common questions about UXP and Premiere. Questions that apply specifically to Hybrid Plugins are [covered here](uxp-plugins.md).

## Questions

### 🛠️ Development Environment & Tooling

- [How can I enable Developer Mode?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#how-can-i-enable-developer-mode)
- [In UDT, I get the error "Plugin Load Failed, Host Application specified is not available. Make sure the host application is started."](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#in-udt-i-get-the-error-plugin-load-failed-host-application-specified-is-not-available-make-sure-the-host-application-is-started)

### 🎨 User Interfaces

- [How can I use Spectrum Web Components in my plugin?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#how-can-i-use-spectrum-web-components-in-my-plugin)
- [Can I use React Spectrum instead of Spectrum Web Components?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#can-i-use-react-spectrum-instead-of-spectrum-web-components)

### 📦 Installers and Packages

- [I am unable to install a plugin.](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#i-am-unable-to-install-a-plugin)
- [My `.ccx` package is being rejected when submitted to the Creative Cloud Marketplace. What could be wrong?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#my-ccx-package-is-being-rejected-when-submitted-to-the-creative-cloud-marketplace-what-could-be-wrong)
- [Should I use an Array or an Object for the `host` property in the `manifest.json`?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#should-i-use-an-array-or-an-object-for-the-host-property-in-the-manifestjson)

### 🇪🇺 EU Compliance & DSA Requirements

- [Why is my plugin not visible in the EU region?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#why-is-my-plugin-not-visible-in-the-eu-region)
- [How can I update my trader details in the publisher profile after submission?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#how-can-i-update-my-trader-details-in-the-publisher-profile-after-submission)
- [What happens if an EU user has a deep link to my plugin and I am not compliant with the European Union Digital Services Act (DSA) trader requirements?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#what-happens-if-an-eu-user-has-a-deep-link-to-my-plugin-and-i-am-not-compliant-with-the-european-union-digital-services-act-dsa-trader-requirements)
- [Can an EU user still use my plugin if they have already installed it, but I am not compliant with the DSA trader requirements?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/faq/index.md#can-an-eu-user-still-use-my-plugin-if-they-have-already-installed-it-but-i-am-not-compliant-with-the-dsa-trader-requirements)

## Answers

### How do I enable Developer Mode?

Turn on Developer Mode in both the UXP Developer Tool and the host application. Use the steps in the [UXP Developer Tool](uxp-changelog-premiere-pro-v26-2-0.md) and [Premiere](uxp-plugins.md) guides.

### What should I do when UDT reports "Plugin Load Failed, Host Application specified is not available. Make sure the host application is started."?

Start Premiere first. If it is already open, confirm that Developer Mode is enabled for the host application by following [this guide](uxp-plugins.md).

### How do I add Spectrum Web Components to a plugin?

Follow the [Spectrum Web Components](uxp-api-2.md) guide to add Spectrum Web Components to your plugin.

### Can React Spectrum replace Spectrum Web Components?

UXP does not implement every HTML Element and CSS property, so [React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html) components can behave differently than expected. The recommended route is [React Wrappers for Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/using-swc-react/) instead. Confirm that the `enableSWCSupport` feature flag is enabled in your `manifest.json` file and that the correct component version is installed.

### Plugin installation fails

Use [these troubleshooting steps](uxp-distribution.md) for details about installation failures.

### Why would a `.ccx` package be rejected by the Creative Cloud Marketplace?

In `manifest.json`, confirm that the [`host`](uxp-manifest.md) property is an object rather than an array. Validation fails when that field is an array. For more information, see [Host Applications](uxp-distribution-2.md).

### Should `host` in `manifest.json` be an Array or an Object?

For production, the `host` property must be one [`HostDefinition`](uxp-manifest.md) Object. Arrays are allowed only as a development convenience. See [Package a UXP plugin](uxp-distribution-2.md) for more details.

### Why is the plugin hidden in the EU region?

The EU listing can disappear when trader information in the publisher profile is missing or stale. Confirm that every required detail is complete and up to date.

### How do I change trader details after submitting the publisher profile?

To change only trader details in the publisher profile after submission, contact the team at [ccintrev@adobe.com](mailto:ccintrev@adobe.com). Other publisher-profile fields are not being processed for change requests at this time.

### What if an EU user opens a deep link while my plugin is not DSA trader compliant?

When the European Union Digital Services Act trader requirements are not met, an EU user who opens a deep link to the plugin cannot install it. A banner appears with a message about the compliance problem.

### Can installed EU users keep using the plugin when DSA trader requirements are unmet?

Yes. An EU user who already installed the plugin can continue using it even when the DSA trader requirements are not met. A banner still appears with a message about the compliance problem.

## See also

- [User Interfaces](uxp-user-interfaces.md)
