# User Interfaces

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Create user interfaces for UXP plugins that are both attractive and functional.

Any UXP plugin that shows visual content needs a user interface. From a simple dialog to a full panel, UXP offers several ways to build UI that fits naturally inside Premiere.

UXP supports three UI-building approaches:

1. [**Standard HTML Elements**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#standard-html-elements): familiar web technology that you style yourself.
2. [**Spectrum UXP Widgets**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#spectrum-uxp-widgets): Adobe-styled controls built into UXP and ready for immediate use.
3. [**Spectrum Web Components (SWC)**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#spectrum-web-components-swc): a modern Web Component library based on Adobe's design system.

Recommended approach

The approaches can be combined in one plugin, and each has different strengths. For new work, **we recommend using Spectrum Web Components** because it provides the broadest feature set and best future support. For more information, read the [Spectrum UXP Reference](spectrum-uxp-reference/reference-index.md).
