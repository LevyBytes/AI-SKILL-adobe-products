# Can React Spectrum replace Spectrum Web Components?

UXP does not implement every HTML Element and CSS property, so [React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html) components can behave differently than expected. The recommended route is [React Wrappers for Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/using-swc-react/) instead. Confirm that the `enableSWCSupport` feature flag is enabled in your `manifest.json` file and that the correct component version is installed.
