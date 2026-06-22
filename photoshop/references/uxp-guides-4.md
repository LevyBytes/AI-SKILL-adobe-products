# Hybrid Plugins, Legacy Extensibility, Theme Awareness

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Distribute; FAQs; Getting started — Download the SDK; UXP Hybrid plugin; Getting Started with UXP for Photoshop — Hello World; Legacy Extensibility; Making your Plugin Theme-aware — Overview.

## Distribute

To list a hybrid plugin in the Creative Cloud Marketplace, use [Developer Distribution](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/getting_started/) and follow the [general packaging guidelines](uxp-guides-2.md).

Also keep these requirements in mind:

1. Use the SDK's README instructions for plugin structure.
2. On macOS, use a valid Apple developer account certificate to sign and notarize executables; self-signed/test certificates are not allowed.
3. Keep the certificate valid for at least one year.
4. Test the plugin on all three architectures - Mac M1, Mac Intel, and Windows Intel. This [guide](uxp-guides-4.md) includes tips.

**Important note:** Because hybrid plugins include native capabilities, installation and update require users to enter OS admin credentials, as shown below.

[Figure: Pluign install dialog in macOS](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/distribute/plugin-install-dialog-mac.png) [Figure: Plugin install dialog in Windows](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/distribute/plugin-install-dialog-win.png)

## FAQs

### How is the UXP SDK different from the Photoshop C++ SDK (aka CSDK)?

These SDKs target separate jobs. The new UXP SDK allows generic C++ code to live beside JavaScript. The PS C++ SDK extends Photoshop in seven capability areas, including filters, file formats, and selections.

Before UXP hybrid plugins existed, some third-party developers paired a PS C++ plugin with a UXP plugin for UI. That pattern has drawbacks:

1. Those plug-ins need a custom installer to place two separate plugins on the user's machine: one for UXP and one for the C++ plug-in.
2. The two plugins can communicate only through strings.

A hybrid plugin built with the new UXP SDK lets you package C++ code and JavaScript inside one plugin package and gives more efficient communication paths between JavaScript and C++.

### Can I build a Photoshop filter (or other such capabilities) with the new Hybrid plugin SDK?

Yes; see the section under [Getting started](uxp-guides-4.md).

### Do I need to code sign the entire plugin bundle?

[Figure: Folder Structure](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/faqs/folder-structure.png)

No. Only the macOS executables need signing and notarization with an Apple Developer-issued certificate.

### Do I need an Apple Developer ID to sign/notarize the executables in hybrid plugins?

Yes. macOS recognizes only Developer ID-signed certificates, signed with your Apple Developer ID. Details are in [Apple's guide](https://support.apple.com/guide/security/app-code-signing-process-sec3ad8e6e53/web).

### How can I prepare the binaries?

Build one binary set for every target architecture: Mac M1, Mac Intel, and Windows Intel.

When you cannot run one target OS directly, build and test that target in a virtual machine; VMware Fusion is one option.

For universal macOS binaries covering both Mac Intel and M1 architectures, see [Apple's universal-binary guide](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary).

## Getting started — Download the SDK

Get the UXP Hybrid plugin SDK through [Developer Console](https://developer.adobe.com/console/servicesandapis/ps). If login returns "Access Denied", use the linked [Access Denied guidance](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/faq/#what-do-i-do-when-i-get-access-denied-upon-login). Unpack the archive and read README.md, because hybrid plugins have their own build and packaging instructions and differ from standard UXP plugins.

A hybrid plugin resembles Node.js C++ Addons: C++ dynamically linked shared objects become available to JavaScript. `template-dev` gives a minimal walkthrough of communication between the two sides.

### Getting started — Samples

Use the SDK's ready-to-use `template-plugin` to try a quick 'Hello world!'. Load it through UDT, then look for it in the Plugins menu.

[Figure: Plugins menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/getting-started/plugin-menu.png)

`template-plugin` binaries are not code signed. On macOS, open 'Security & Privacy' in System Preferences and allow them so they can load and run correctly.

### Getting started — Debug

A UXP Hybrid plugin contains both JavaScript and C++. Set JavaScript breakpoints with the UDT Debug tool.

For C++ debugging, attach your IDE to the `Photoshop.exe` process. Most IDEs expose this through Debug -> Attach to Process.

On macOS, complete the earlier setup described in the [macOS debugging guide](https://helpx.adobe.com/ca/photoshop/kb/debug-plugins-in-photoshop-bigsur.html).

### Getting started — Known Issues

When a plugin is loaded through UDT, Photoshop may not display it automatically. To launch it, uncheck and recheck the plugin name in the 'Plugin' menu item. A future macOS release is expected to include the fix.

### Getting started — File system access

Hybrid plugins relax UXP sandbox restrictions, allowing direct file-system access in this form:

```jsx
let entry = "/path/to/target.psd";
document.saveAs.psd(entry);
```

By contrast, a standard UXP plugin accesses the file system this way:

```jsx
let entry = await require("uxp").storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);
```

### Getting started — Photoshop C++ SDK

Photoshop provides multiple C based plugin APIs, documented in the [downloadable package](https://console.adobe.io/servicesandapis).
To reach those APIs from a hybrid plugin, expose an additional function entry point.

```cpp

```

Once Photoshop loads a hybrid addOn, this method is invoked. Use the `basicSuite` argument to acquire Photoshop API suites; the C++ SDK explains suite acquisition.

### Sample code:

For testing, update the sample's `module.cpp` with:

```C++
// Photoshop SDK includes (add path to project)
#include "SPBasic.h"
#include "PIColorSpaceSuite.h"

. . .

// ----------------------------------------------------------------------------------------------------
static const SPBasicSuite* gBasicSuite = nullptr;
static const PSColorSpaceSuite2* gColorSpaceSuite = nullptr;

extern "C" UXP_EXTERN_API_STDCALL(SPErr) PSDLLMain(const char* selector, SPBasicSuite* spBasic, void*)
try {
  do {
    if (spBasic == nullptr)
    break;

    // cache the basic suite so we can use at any time
    gBasicSuite = spBasic;

    SPErr spErr = gBasicSuite->AcquireSuite(kPSColorSpaceSuite, kPSColorSpaceSuiteVersion, reinterpret_cast<const void**>(&gColorSpaceSuite));
    if (spErr != kSPNoError)
    break;

    if (gColorSpaceSuite == nullptr)
    break;

    Color8 colorArray[1] = {11, 30, 201, 0};
    spErr = gColorSpaceSuite->Convert8(plugIncolorServicesRGBSpace, plugIncolorServicesCMYKSpace, colorArray, 1);
    if (spErr != kSPNoError) break;
  } while (false);

  return kSPNoError;
}
  catch(...) {
  return -1;
}
```

## UXP Hybrid plugin

A UXP Hybrid plugin combines a UXP plugin with C++ native-library power.

Use faster C++ code to extend plugins. Examples include:

- Run computation-intensive tasks
- Connect to existing external pipelines, processes, and executables
- Use popular libraries such as OpenCV

Writing a Hybrid plugin requires C++ proficiency. Treat it as an advanced topic; make sure you already have:

- Experience building [UXP plugins](uxp-guides-3.md)
- Experience using [UDT (UXP Developer tool)](uxp-guides-2.md)

### UXP Hybrid plugin vs Photoshop C++ plugins

Do not treat a UXP hybrid plugin as the same thing as a Photoshop C++ plugin; see the [C++ SDK reference](uxp-media-2.md).

Choose based on the use case. For a Photoshop filter under the Filter menu or a new file type, PS CSDK is probably the better route. Choose UXP Hybrid plugins when generic C++ code should sit alongside JavaScript.

The pathway now permits a .uxpaddon to use the [Photoshop C++ SDK route](uxp-guides-4.md). That lets you create a compiled filter and bundle it with a UXP dialog for control. Remember that, in this example, the filter is known only to the UXP hybrid plugin.

### Minimum Version Requirements

Build and test requires at least `Photoshop v24.2.0` plus `UDT v1.7.0`; publication/distribution also requires `Adobe Creative Cloud Desktop v5.10`.

### Releases

SDK labels use a UXP version because the UXP hybrid plugin SDK is app-independent. Future support will allow the same SDK to build plugins for other UXP-based applications.

New SDK announcements appear in the [Changelog section](uxp-changelog.md). Updating to a new SDK version means recompiling and republishing the plugin, and it may change the minimum supported host app version. Read those instructions carefully.

If you stay on an older SDK, the plugin remains forward-compatible and continues to work in newer host application versions.

## Getting Started with UXP for Photoshop — Hello World

Two pieces of software are needed for a first UXP plugin, both installable through [Adobe Creative Cloud Desktop](https://www.adobe.com/creativecloud/desktop-app.html): the latest Photoshop and the [UXP Developer Tool](uxp-guides-2.md).

For a practical start, use these tutorials:

1. [Creating your first plugin](uxp-guides-3.md)
2. [Editing the document](uxp-guides-3.md)
3. [Writing a file with UXP](uxp-guides-3.md)

### Getting Started with UXP for Photoshop — Important resources

### The Basics

- [The UXP manifest](uxp-misc.md): Required material for shaping how your UXP plugin is described and configured.
- [UXP Developer Tool Walkthrough](uxp-guides-2.md): Shows how to start from a sample, then load and debug the plugin in Photoshop.
- [The intro to the Photoshop API](uxp-ps-reference.md): Introduces the DOM API that follows ExtendScript.
- [Spectrum UI reference](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/User%20Interface/index.md): Before building UI, review the smaller element set UXP makes available.

### Must Reads

- [UXP API reference](uxp-api.md): Covers which browser-like capabilities UXP includes, and where the platform behaves differently.
- [Modal Execution in Photoshop](uxp-executeasmodal.md): Describes the newer model for plugins that need performance and resilience. Treat it as required reading when your plugin changes a user's document.
- [Photoshop manifest](uxp-misc.md): Supplements `manifest.json`. In Adobe Photoshop 2022, pay attention to possible breaking changes related to Modal Execution.

Questions can go to the Adobe [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/), which are useful for finding answers.

### Getting Started with UXP for Photoshop — Explore

### Plugin Samples

A small collection of broad samples is available, including code that may help isolate a difficult bug. Download and inspect [Code Samples](uxp-guides.md).

### Design guides

When a plugin includes visible UI, consult [Design Guides](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md) so the experience fits the people using it.

## Legacy Extensibility

UXP is the preferred platform for plugin development, but Photoshop 2022 still retains support for older extensibility paths.

### ExtendScript

The UXP [Photoshop DOM API](uxp-ps-reference.md) is intended as the next stage after the [ExtendScript](https://www.adobe.com/devnet/photoshop/scripting.html) DOM. Photoshop currently has no plan to discontinue ExtendScript support.

Because the ExtendScript Toolkit IDE depends on 32-bit architecture and is no longer maintained, ExtendScripts can instead be built with the [Visual Studio plugin for ExtendScript](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug).

For moving plugins from ExtendScript to UXP, consult [UXP for ExtendScript Developers](uxp-for-you.md).

### CEP (Common Extensibility Platform)

The [Common Extensibility Platform](https://www.adobe.io/apis/creativecloud/cep.html) began as an extension mechanism for Creative Suite applications, and Photoshop will keep supporting it.

To move CEP plugins to UXP, see [UXP for CEP Developers](uxp-for-you.md).

### Native C++ Plugins

[Plugins using native C++](https://www.adobe.com/devnet/photoshop/sdk.html) remain an important part of Photoshop extensibility and are still supported.

Adobe added a communication bridge suite for exchanging information between Photoshop-hosted C++ plugins and UXP plugins. Details are in [Communication with C++ Plugin SDK](uxp-media-2.md).

## Making your Plugin Theme-aware — Overview

Photoshop offers four UI theme choices:

[Figure: Photoshop Theme Colors](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/theme-awareness/images/ps-theme-selection.png)

- Darkest
- Dark
- Light
- Lightest

A plugin that lacks theme awareness may no longer fit visually, and text can even become hard to read after theme changes. Adding support is straightforward, so there is little reason to skip it.

### Making your Plugin Theme-aware — Built-in Theme Colors

The simplest path to theme awareness is a CSS capability named `CSS variables`. In CSS, these variables let property definitions change dynamically.

Photoshop exposes several theme-specific CSS variables suited for adapting plugin visuals to the user's selected theme. These variables are:

- --uxp-host-background-color
- --uxp-host-text-color
- --uxp-host-border-color
- --uxp-host-link-text-color
- --uxp-host-widget-hover-background-color
- --uxp-host-widget-hover-text-color
- --uxp-host-widget-hover-border-color

Additional variables include:

- --uxp-host-text-color-secondary
- --uxp-host-link-hover-text-color
- --uxp-host-label-text-color

Font sizing also has three variables:

- --uxp-host-font-size
- --uxp-host-font-size-smaller
- --uxp-host-font-size-larger

### Making your Plugin Theme-aware — How to Use CSS Variables

In your plugin panel CSS, reference the built-in CSS variables in this pattern:

```css
body {
  background-color: var(--uxp-host-background-color);
  color: var(--uxp-host-text-color);
  border-color: var(--uxp-host-border-color);
  font-size: var(--uxp-host-font-size);
}
```

You are not required to apply these variables to the whole panel body; individual CSS classes can use them too.

```css
.bigText {
  color: var(--uxp-host-text-color);
  font-size: var(--uxp-host-font-size-larger);
}
.smallText {
  color: var(--uxp-host-text-color);
  font-size: var(--uxp-host-font-size-smaller);
}
```

### Making your Plugin Theme-aware — How Do They Look?

A basic HTML file that uses these CSS variables will render in Photoshop like the examples below.

For the "darkest" theme:

[Figure: Darkest Theme](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/theme-awareness/images/fonts-darkest.png)

For the "lightest" theme:

[Figure: Lightest Theme](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/theme-awareness/images/fonts-lightest.png)

## See also

- [Known Issues](uxp-known-issues.md)
- [Getting Started](uxp-xmp.md)
