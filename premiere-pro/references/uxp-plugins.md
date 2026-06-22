# Hybrid Plugins

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Building Hybrid Plugins; Hybrid Plugins FAQ; Hybrid Plugins; Building your first UXP plugin.

## Building Hybrid Plugins

A step-by-step guide for building, configuring, and shipping a UXP Hybrid plugin.

### Building a uxpaddon

### 1. Create a Native Library Project

- Start a new **Xcode** project on macOS or **Visual Studio** project on Windows and configure it to build a **dynamic library**.
- Point the project's include paths at the UXP Hybrid Plugin SDK `src/api` directory.

### 2. Write Your C++ Logic

Register initialization and termination routines after including the main header:

```cpp
#include "UxpAddon.h"

addon_value init(addon_env env, addon_value exports) {
    // Register functions and properties on 'exports'
    return exports;
}

void terminate() {
    // Cleanup logic
}

UXP_ADDON_INIT(init);
UXP_ADDON_TERMINATE(terminate);
```

Inside `init`, use the addon APIs, defined in `UxpAddonShared.h` through `addon_apis`, to expose native functions that JavaScript can call. Calls to these APIs use the `UxpAddonApis.uxp_addon_***()` form.

### 3. Compile and Rename

Compile the dynamic library (`.dylib` on macOS, `.dll` on Windows), then **rename the file extension** to `.uxpaddon`.

### Using a uxpaddon in JavaScript

After compilation, load the addon with `require()`; its exported functions can be used right away:

```js
const addon = require("sample-uxp-addon.uxpaddon");
let result = addon.first_function();
```

Use it as another JavaScript module: call functions, read properties, and exchange data with C++.

### Manifest Configuration

Configure [`manifest.json`](uxp-manifest.md) with these Hybrid plugin entries:

- **Manifest version**: use 6 or higher.
- [`addon`](uxp-manifest.md): set this field to the uxpaddon name.
- [`enableAddon`](uxp-manifest.md): include this permission.

```json
{
  "manifestVersion": 6,
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  },
  "addon": {
    "name": "sample-uxp-addon.uxpaddon"
  },
  "requiredPermissions": {
    "enableAddon": true
  }
}
```

### Plugin Structure

Place uxpaddon binaries in the plugin bundle using the required platform-and-architecture directory layout:

```txt
📁 root directory
├── 📄 manifest.json
├── 📄 main.js
├── 📁 mac
│   ├── 📁 x64
│   │   └── ⚙️ sample-uxp-addon.uxpaddon (dylib)
│   └── 📁 arm64
│       └── ⚙️ sample-uxp-addon.uxpaddon (dylib)
└── 📁 win
    └── 📁 x64
        └── ⚙️ sample-uxp-addon.uxpaddon (dll)
```

If that layout is wrong, UDT logs _"Plugin Manifest Validation Failed"_ and the plugin cannot load.

For a quick setup check, try the pre-compiled `template-plugin` included with the SDK. Load it through UDT and locate it under **Window** > **UXP Plugins**.

### Asynchronous Operations

Understand the uxpaddon threading model before adding native behavior:

- **Initialization and termination** routines execute on the host application's **main thread**.
- **JavaScript calls** into addon functions execute on a **dedicated scripting thread**, never on the main thread.

If an addon needs main-thread work, such as host-specific API interaction, and then must return data to JavaScript, use the asynchronous scheduling APIs. JavaScript receives these operations as **Promises**.

The flow has three parts:

1. **From the scripting thread**: create a deferred promise and schedule the main-thread work.
2. **On the main thread**: run the task, then schedule result handling back on the scripting thread.
3. **Back on the scripting thread**: settle the promise by resolving or rejecting it.

```cpp
addon_value MyAsyncOperation(addon_env env, addon_callback_info info) {
    // Extract and convert arguments to standard C++ types
    // (addon_value is transient and cannot be used after this function returns)
    std::string myArg = ExtractString(env, argValue);

    // Create a promise for the JavaScript caller
    addon_deferred promiseValue = nullptr;
    addon_value deferred = nullptr;
    apis.uxp_addon_create_promise(env, &deferred, &promiseValue);

    // Schedule work on the main thread
    apis.uxp_addon_schedule_on_main_queue(env, MainThreadTask, ...);
    return deferred;
}

void MainThreadTask(...) {
    // Perform the task on the main thread...

    // When done, schedule the result back to the scripting thread
    apis.uxp_addon_schedule_on_javascript_queue(env, ScriptThreadTask, ...);
}

void ScriptThreadTask(...) {
    apis.uxp_addon_open_handle_scope(env, &scope);

    // Resolve (or reject) the JavaScript promise
    addon_value resultValue = nullptr;
    apis.uxp_addon_resolve_deferred(env, deferred, resultValue);
    apis.uxp_addon_close_handle_scope(env, scope);
}
```

The SDK's `template-dev` project contains this pattern in working form; see `MyAsyncEcho` in `module.cpp`.

### File System Access

Hybrid plugins get less restrictive UXP sandboxing, so direct file-system paths are available:

```js
let entry = "/path/to/file.txt";
```

Standard UXP plugins differ because they need `require('uxp').storage.localFileSystem` for files outside the sandbox. For the standard access model, see the [Filesystem Operations recipe](uxp-filesystem-operations.md).

### Debugging

Hybrid plugins include JavaScript and C++ layers, and each layer needs a separate debugging method:

- **JavaScript**: set breakpoints and inspect variables with the UDT Debug tool.
- **C++**: attach your IDE debugger to the active Premiere process. Many IDEs expose this under **Debug** > **Attach to Process**.

### Packaging and Distribution

Hybrid plugins use the same [packaging workflow](uxp-distribution-2.md) as standard UXP plugins, with extra native-binary requirements. Review this checklist before distributing the plugin.

### 1. Verify the plugin structure

Compare every `.uxpaddon` location against [Plugin Structure](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/build.md#plugin-structure) above. The folder hierarchy is strict, and mismatches cause UDT to log _"Plugin Manifest Validation Failed"_ while refusing to load the plugin.

### 2. Build for all required architectures

Produce a uxpaddon build for:

- **macOS arm64** (Apple Silicon)
- **macOS x64** (Intel)
- **Windows x64**

If you cannot access every platform directly, a virtual machine such as VMware Fusion or Parallels may help. Apple Silicon Macs cannot virtualize Windows x64; only Intel Macs can do that, so separate hardware may be necessary. For macOS universal binaries, see [Apple's guide](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary).

You may package and install a Hybrid plugin that includes only some architectures, but unsupported platforms will not load it. The **Creative Cloud Marketplace requires all three architectures**, and the Developer Distribution portal rejects any `.ccx` missing one. Partial architecture coverage is appropriate only for [independent](uxp-distribution.md) or [enterprise](uxp-distribution.md) distribution.

### 3. Code sign and notarize (macOS)

On macOS, each `.uxpaddon` executable needs signing and notarization under an **Apple Developer ID** certificate. Requirements:

- Do not use self-signed or test certificates; they are **not accepted**.
- Certificate validity must cover **at least one year**.
- Signing applies only to the `.uxpaddon` binaries; JavaScript, HTML, CSS, and manifest files in the rest of the plugin bundle do not need it.

For more information about Apple Developer ID requirements, see the [FAQ](uxp-plugins.md).

### 4. Set your plugin ID

Before packaging, verify that `manifest.json` has the correct `id`. For **Creative Cloud Marketplace** publication, use the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin-id#starting-from-adobe-developer-distribution) to obtain the ID, then confirm that the manifest contains that same value. See [Mind your Plugin's ID](uxp-distribution-2.md) for details.

### 5. Package with UDT

In the UXP Developer Tool, find the plugin in the workspace, open the **•••** menu, and choose **Package**. The result is a `.ccx` installer file. For the walkthrough, see [Package with the UXP Developer Tool](uxp-distribution-2.md).

### 6. Test the installation

On a clean system, or at least one without the development environment, install the `.ccx` file and verify:

- The installer completes without errors.
- On each supported platform, the uxpaddon loads correctly.
- Properly signed binaries do not trigger security warnings.

Because Hybrid plugins contain native code, installation and update flows prompt users for **OS administrator credentials**. This behavior is expected.

For the complete distribution process, including Marketplace submission, independent distribution, and enterprise deployment, see [Share & Distribute](uxp-distribution-2.md).

## Hybrid Plugins FAQ

Answers to common questions about Hybrid Plugins.

### Questions

- [Do I need to code sign the entire plugin bundle?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#do-i-need-to-code-sign-the-entire-plugin-bundle)
- [Do I need an Apple Developer ID?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#do-i-need-an-apple-developer-id)
- [How do I prepare and test binaries for all architectures?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#how-do-i-prepare-and-test-binaries-for-all-architectures)
- [Are Hybrid plugins forward-compatible?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#are-hybrid-plugins-forward-compatible)
- [Why can't I see the plugin in Premiere after loading it?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#why-cant-i-see-the-plugin-in-premiere-after-loading-it)
- [The macOS binaries trigger security warnings. What should I do?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#the-macos-binaries-trigger-security-warnings-what-should-i-do)
- [Why do I get "Failed to load Addon" with "The specified module could not be found" on Windows?](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/faq.md#why-do-i-get-failed-to-load-addon-with-the-specified-module-could-not-be-found-on-windows)

### Answers

### Code signing for the full plugin bundle

No. Signing and notarization apply only to macOS `.uxpaddon` executables, and they must use a valid Apple Developer ID certificate. Other bundle files, including JavaScript, HTML, CSS, and the manifest, do not need code signing.

### Apple Developer ID requirement

Yes. Notarized macOS executables need a Developer ID-signed certificate. For more detail, consult [Apple code signing process](https://support.apple.com/guide/security/app-code-signing-process-sec3ad8e6e53/web).

### Preparing and testing every architecture

Build and validate the three required targets: macOS arm64 (Apple Silicon), Windows x64, and macOS x64 (Intel). Use [Apple universal binary documentation](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary) when producing a universal macOS build. When you do not have direct access to a platform, a virtual machine such as VMware Fusion or Parallels can help. One limitation still matters: Windows x64 virtualization is not available on Apple Silicon Macs; Intel Macs are the Macs that can do it. Covering all three architectures may require dedicated hardware.

For local development or independent distribution, a Hybrid plugin can be packaged and installed with just the architectures you include; unsupported platforms will fail to load it. The **Creative Cloud Marketplace requires all three architectures**, however, and the Developer Distribution portal rejects a `.ccx` whenever one is absent.

### Hybrid plugin forward compatibility

Yes. A plugin compiled with an older SDK release keeps working in newer Premiere versions. Moving to a newer SDK still requires recompiling and republishing the plugin.

### Plugin not visible in Premiere after UDT loading

When loading through UDT, Premiere may not show the plugin immediately. In **Window** > **UXP Plugins**, clear the plugin name and then select it again. A future release is expected to address this behavior.

### macOS security warnings for binaries

The SDK's `template-plugin` binaries are unsigned. On macOS, allow them from **System Settings** > **Privacy & Security**. For production builds, sign and notarize the binaries with a valid Apple Developer ID.

### Windows "Failed to load Addon" / "The specified module could not be found"

That message usually points to a Debug-mode `.uxpaddon`. Debug builds depend on Visual Studio debug runtimes that ordinary end-user systems usually do not have. The addon may load on a development machine while failing on a clean Windows install. Rebuild it in Release mode, confirm project settings such as `.uxpaddon` output and absence of debug dependencies, and then redistribute it.

## Hybrid Plugins

Add C++ native library capability to UXP plugins.

### Overview

UXP plugins already support broad functionality with JavaScript, HTML, and CSS. Some needs still fall outside what the UXP runtime can handle well, such as performance-sensitive computation or reuse of existing native codebases. For those cases, UXP provides **Hybrid Plugins**.

A **UXP Hybrid plugin** is still a normal UXP plugin, with the additional ability to load dynamically-linked shared objects written in C++. Its model resembles Node.js [C++ addons](https://nodejs.org/api/addons.html): `require()` pulls compiled native libraries into the runtime, just as it does for JavaScript modules.

```js
const addon = require("sample.uxpaddon");
```

Once loaded, the addon exposes C++ functions and properties to JavaScript, allowing direct communication between the JavaScript side and the native side.

### Advanced Topic

Hybrid plugin development assumes C++ proficiency. Before starting, know how to [write UXP plugins](uxp-plugins.md) and be comfortable with [UDT](uxp-changelog-premiere-pro-v26-2-0.md).

### Use Cases

- **Performance-intensive audio/video processing**: move expensive work, such as custom waveform analysis, frame-level pixel manipulation, or audio DSP algorithms, into native code while JavaScript keeps responsibility for UI and orchestration.
- **Integration with C++ libraries**: call established native libraries, including OpenCV, TensorFlow Lite, or custom in-house codecs, directly from the plugin.
- **Metadata processing at scale**: run batch XMP work or custom metadata schema conversions that pure JavaScript would handle too slowly.
- **Bridging to external native pipelines**: reach hardware SDKs, proprietary encoding pipelines, or platform-specific system APIs exposed only through C/C++.

### Minimum Requirements

| Component | Minimum Version |
| --- | --- |
| **Premiere** | 26.2 |
| **UXP Developer Tool (UDT)** | 2.2 |
| **Creative Cloud Desktop** | 5.10 |

### The UXP Hybrid Plugin SDK

### Download

Get the UXP Hybrid Plugin SDK through the [Adobe Developer Console](https://developer.adobe.com/console). If login returns "Access Denied", follow [the access-denied FAQ](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/faq/#what-do-i-do-when-i-get-access-denied-upon-login). Extract the package, then use `README.md` for the build steps that differ by platform.

[Figure: Adobe Developer Console](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/hybrid-plugins/img/adobe-developer-console.png)

### SDK Contents

Inside the SDK are C++ headers, utilities, and templates for native addons, referred to as **uxpaddons**. Its API deliberately tracks [Node-API](https://nodejs.org/api/n-api.html) closely, so experience with Node.js native addons carries over well.

| Folder | Contents |
| --- | --- |
| `src/api` | **UxpAddonTypes.h** — fundamental data types (opaque abstractions consumed by the SDK APIs). **UxpAddonShared.h** — the full addon API surface, closely mirroring Node-API. |
| `src/utilities` | Utility classes with common helpers. **UxpAddon.h** — provides the `UXP_ADDON_INIT` and `UXP_ADDON_TERMINATE` macros for registering initialization and termination routines. |
| `template/template-dev` | Source code for a minimal addon example—use it as a starting point for your own plugin. |
| `template/template-plugin` | A pre-compiled Hybrid plugin ready to load in UDT. |

### Releases

The SDK has its own versioning, separate from the host application. It carries a UXP version label because Hybrid plugins are meant to be app-independent. New SDK announcements appear in the [Changelog](uxp-changelog-premiere-pro-v26-2-0.md). Updating to a newer SDK means recompiling and republishing the plugin, while plugins built on older SDKs remain forward-compatible with newer host application versions.

### Next Steps

Ready to build? Use [Building Hybrid Plugins](uxp-plugins.md) for the full development walkthrough, from compiling the first uxpaddon through packaging and distribution.

## Building your first UXP plugin

This tutorial guides you through creating your first UXP plugin. It covers scaffolding from an existing template, customization, and running the result in Premiere.

### Prerequisites

Have this software ready before beginning:

- [**Premiere (v25.6)**](https://creativecloud.adobe.com/apps/download/premiere-pro) or later.
- [**UXP Developer Tool (v2.2)**](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) or later.
- A **Code Editor** of your choice, such as [Visual Studio Code](https://code.visualstudio.com/) or [Cursor](https://www.cursor.com/).

Enable Premiere's Developer Mode as well. Open **Settings**, choose the **Plugins** tab, and select the **Enable developer mode** checkbox. Restart Premiere so the setting takes effect.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-dev-mode.png)

### Development Workflow

### 1. Scaffold your Plugin

Use [UDT](uxp-changelog-premiere-pro-v26-2-0.md) to create a starter project from templates by choosing **Create Plugin**.

[Figure: UXP Developer Tool - Create Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt.png)

Use the following dialog to set up the project:

[Figure: UXP Developer Tool - Create Plugin Dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt-create-plugin.png)

Enter these values:

| Field | Value |
| --- | --- |
| **Name** | My first UXP Plugin |
| **Plugin ID** | _Leave it as is_ |
| **Host Application** | Adobe Premiere |
| **Host Application Version** | 25.6 |
| **Template** | premierepro-quick-starter |

Next, click **Select Folder** and pick the computer location where the plugin should be scaffolded. The UXP Developer Tool creates a new folder using the Plugin ID as its name. That folder contains these files:

```json
Test-fm0dom
├── manifest.json     🔧 Plugin configuration
├── index.html        🌐 User Interface
├── index.js          💻 Logic
└── README.md         📝 Documentation
```

### 2. Test in Premiere

After scaffolding, load the plugin in Premiere. Keep Premiere running and confirm that the UXP Developer Tool is connected to it; the application should be listed in the left pane.

In UDT, click **Load & Watch** on the plugin row:

[Figure: UXP Developer Tool - Load & Watch](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt-load-and-watch.png)

The button runs **Load** and **Watch** together, though each action is available separately. Either path loads the plugin into Premiere, then lets UDT monitor source changes and reload automatically.

[Figure: Premiere - Loaded Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-premiere-pro.png)

To reopen a closed plugin panel, use **Window** > **UXP Plugins** in Premiere.

### 3. Edit the plugin's UI

With the plugin running in Premiere, customize its UI. Open `index.html` in your code editor; this file contains the HTML that defines the visible content of the plugin panel.

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h4>Application Info</h4>
    <div class="main-div">
      <sp-body id="plugin-body"> </sp-body>
    </div>
    <footer>
      <sp-button id="btnPopulate">Populate Application Info</sp-button>
      <sp-button id="clear-btn">Clear Application Info</sp-button>
    </footer>
  </body>
</html>
```

Change the heading to this alternate text:

```html
<body>
  <h4>Premiere - Application Info</h4>
</body>
```

Because Watch & Reload is active, the host application updates automatically; the plugin panel now shows the new heading.

[Figure: Premiere - Updated Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-edit-html.png)

### Manifest changes

Changes to `manifest.json` require a manual unload and reload. In the UXP Developer Tool, find the row for the plugin, click **Unload**, and then click **Load & Watch** again.

### Invisible plugins

Set `"hideFromMenu"` to `true` in the `hostUIContext` section of the plugin manifest to create a UXP plugin that runs at application launch and can register for other messages, while staying out of the UXP Plugins menu.

### 4. Test the plugin's logic

Now test what the UXP plugin does. Open a sample project in Premiere. If you do not already have one, use **Window** > **Learn** and download a sample from **Tutorials**.

Click **Populate Application Info** in the plugin panel.

[Figure: Premiere - Populate Application Info](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-get-app-info.png)

After the click, active project and sequence information appears in the panel. The implementation is in `index.js` and retrieves the data through the [Premiere APIs](uxp-ppro-reference.md). Open that file if you want to inspect the code path.

### Next steps

You have created a first plugin successfully. The next material introduces concepts that matter for UXP plugin development.
