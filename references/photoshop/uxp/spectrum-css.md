# Spectrum CSS

Adobe's design system has an open-source CSS implementation, [Spectrum CSS](https://opensource.adobe.com/spectrum-css/), used across several applications.

> For immediate Spectrum CSS setup, open the [Spectrum CSS README](https://github.com/adobe/spectrum-css/blob/main/README.md) for installation instructions.

Where practical, plugin UIs should use Spectrum-based controls. That keeps plugins visually consistent, and Adobe applications' native controls are expected to move toward Spectrum CSS over time.

Spectrum controls also give the plugin theme awareness with little extra work. When the user switches between light and dark themes, the plugin does not need custom wiring for every appearance change.

Within UXP, Spectrum CSS supplies UI components for a consistent look and feel both inside one application and across cross-platform, cross-application plugins.

Spectrum CSS is "pure" CSS; using it does not require JavaScript or other code.
