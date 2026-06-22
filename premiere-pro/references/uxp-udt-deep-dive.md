# Playground, Plugin Management, Plugin Workflows

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adobe UXP Developer Tool plugin development; The Playground; Plugin management; Plugin workflows.

## Adobe UXP Developer Tool plugin development

Use the Adobe UXP Developer Tool features to manage, build, and test plugins

### Prerequisites

Before using this material, complete three setup steps: the Adobe UXP Developer Tool (UDT v2.2 or later) is [installed](uxp-changelog-premiere-pro-v26-2-0.md), Developer Mode is enabled in UDT through [UDT first launch](uxp-changelog-premiere-pro-v26-2-0.md) and in Premiere through [Premiere prerequisites](uxp-plugins.md), and your first plugin has been [scaffolded](uxp-plugins.md).

### Side panel

### Connected Applications

When an open Creative Cloud desktop application supports UXP and UDT is _"connected"_ to it, that host appears in the left panel. A plugin can be loaded only while its host application is running; after launch, the **Connected Apps** section is populated.

[Figure: UDT side panel](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/overview-udt.png)

When UDT cannot connect, confirm that the application version supports UXP extensibility. If the side panel itself is hidden, use the dots grid icon in the upper-right corner to reveal it.

### Preferences

Open preferences with the gear icon. There you can set the UDT **Theme** to Dark or Light, enable or disable **Auto Scroll Logs**, and edit the **Service Port** used for communication with host applications.

[Figure: UDT preferences](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/overview-preferences.png)

### Logs

The document icon 📄 in the upper-left corner opens the Logs panel. Review **UDT Logs** for items such as connection events and plugin loading state, or use **App Logs** to investigate host-side problems.

[Figure: UDT logs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/overview-logs.png)

### Read more

[The Playground](uxp-udt-deep-dive.md)

Try ideas in the sandboxed Playground environment

[Plugin management](uxp-udt-deep-dive.md)

Create new plugins or add existing ones to the workspace

[Plugin workflows](uxp-udt-deep-dive.md)

Load, debug, and watch plugins inside the application.

## The Playground

The Playground in the Adobe UXP Developer Tool provides a sandbox where you can try UXP APIs.

### Overview

The Playground offers an easy starting point for plugin prototypes, letting you test ideas directly and iterate without first scaffolding a complete project on disk.

### How to use the Playground

### Select the host application

First, ensure a supported application is already [connected](uxp-udt-deep-dive.md) to UDT. Use the top toolbar's **Playground** tab to open the Playground panel. Its editor can switch through the languages dropdown between HTML, CSS, JavaScript, and Manifest.

[Figure: Playground - HTML editor](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/playground-html.png)

If several Creative Cloud applications are open and UDT attached the Playground to the incorrect one, you can switch it. Select the blue **Change** link in the upper-right corner, choose another host, and confirm with **OK**.

[Figure: Playground - Select host application](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/playground-select-host-app2.png)

### Launch the plugin

The Playground does not load the plugin into the host application automatically. Use the blue **Play** ▶️ button in the upper-right corner to launch it.

[Figure: Playground - Launch plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/playground-play.png)

After loading succeeds, the host application shows a green **Plugin Load Successful** message. If loading fails, a red **Plugin Load Failed** message is shown; open the log through the **Details** link.

### Edit and Debug the code

When you change code in the HTML, CSS, or JavaScript tabs, the host application's plugin refreshes automatically so the changes appear. To return to the starting state, press the **Reset** 🔄 button.

Manifest edits are different: **Any changes to the Manifest** are not applied automatically. Use **Unload** ⏹️ and then **Load** ▶️ so the plugin picks them up.

For debugging, select **`{}`** to launch the UDT debugger. It uses [Chrome Developer Tool](uxp-changelog-premiere-pro-v26-2-0.md) as its foundation and includes most of the same capabilities.

[Figure: Playground - Debugger](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/playground-debug.png)

### Export the code

The Playground is meant for quick prototyping and API tests without requiring a full project scaffold. When the plugin is worth keeping, export every file into a folder that can later be loaded as a normal plugin.

Click the blue **Download** ⬇️ button in the upper-right corner to open the system folder picker. After choosing the destination, UDT creates a "UXP Playground" project folder containing all current files.

[Figure: Playground - Download code](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/playground-export.png)

## Plugin management

UDT can create plugins from templates and bring existing projects into your developer workspace.

Use UDT to scaffold new plugin projects or import plugins you already have. Once listed in the workspace, a plugin can be loaded into the host application or simply kept there for later use.

### Create a new plugin

The [Getting Started guide](uxp-plugins.md) covers scaffolding; to make a new plugin, choose **Create Plugin** and pick one of the templates supplied by UDT. More detail is available in [this section](uxp-plugins.md).

[Figure: UDT - Create Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt.png)

### Add an existing plugin

For a plugin project already stored on disk, add it to the workspace with **Add Plugin**, then point the file picker at the plugin's `manifest.json`.

[Figure: UDT - Create Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-management-add-plugin.png)

Choose **Open** to place the plugin in the workspace.

[Figure: UDT - Plugin Added](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-management-plugin-added.png)

### Removing a plugin

Large plugin sets can crowd the workspace. To remove one from UDT's list, enable the plugin's checkbox and choose the top-right **Remove Selected** control.

[Figure: UDT - Remove Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-management-remove-plugin.png)

Removing the workspace entry in Developer Tool **does not delete the plugin from your storage**. The same plugin can be added again later.

After at least one plugin has been added to the workspace, continue with the recommended [plugin development workflow](uxp-udt-deep-dive.md).

## Plugin workflows

Recommended workflow for plugin development in the Adobe UXP Developer Tool (UDT).

### Load and Watch a plugin

Plugins listed in the developer workspace are not automatically added to their supported host application. After the host application starts, tell UDT manually to load the plugin. The choices are:

- **Load**: loads the plugin in the host application.
- **Load & Watch**: loads the plugin in the host application and monitors the plugin's source code for changes. Use this choice for normal development.

[Figure: UDT - Load Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt-load-and-watch.png)

When a plugin loads successfully, UDT shows a small green notification at the bottom of its window.

[Figure: Load Successful](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-load-successful.png)

For a plugin that _fails_ to load, UDT shows a small red notification with a **Details** link; select it so the UDT Logs panel opens for error inspection.

[Figure: Load Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-load-failed.png)

With **Load & Watch** selected, the plugin can also be reloaded from the UDT window by clicking **Reload**.

Manifest changes

Load & Watch reloads the plugin automatically after source-code edits, except for manifest updates. After editing `manifest.json`, you need to **Unload** the plugin and start it again with **Load & Watch** or **Load**.

### Debug your plugin

When a plugin misbehaves, click the **`{}`** link in the UDT window to debug it. UDT opens the UDT Debugger panel; its foundation is the [Chrome Developer Tool](uxp-changelog-premiere-pro-v26-2-0.md), so most familiar capabilities are available.

[Figure: UDT - Debug](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-debug.png)

Inside the debugger, use the **Elements**, **Console**, **Sources**, and **Network** tabs for ordinary debugging work: setting breakpoints, stepping into and out of functions, moving through code, inspecting elements, and related tasks.

[Figure: UDT - Debugger](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-debugger.png)

Break on start can pause execution as the plugin loads. In UDT, use the plugin's **••• > Options...** menu, choose **Advanced**, then select **Break on start** in the next dialog.

[Figure: UDT - Break on start](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-break-on-start.png)

After troubleshooting is complete, close the debugger window.

### Working with Bundlers

Using JavaScript frameworks such as React JS, Vue, or Svelte, or bundlers such as Webpack and Parcel, requires coordinating those tools with UDT. The right setup depends on the workflow.

### Add to the UDT workspace

Bundler-based plugins commonly contain two `manifest.json` files: one in the plugin source directory and another in the plugin distribution directory.

[Figure: UDT - Manifest files](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-manifests.png)

Either manifest can be loaded, but the behavior differs.

- Adding a plugin through the **distribution** `manifest.json` makes UDT load the full project from the distribution folder. If build steps delete and recreate that folder, or wipe all of its contents, the plugin _may not_ reload correctly in UDT.
- Adding a plugin through the **source** `manifest.json` is preferred, with an additional options change afterward.

For the source-manifest setup, use the plugin's **••• > Options...** menu in UDT, choose **Advanced**, then enter the distribution-folder relative path from the selected source `manifest.json` file. This loads the plugin as the distribution-manifest setup does, while keeping build processes that remove or recreate the distribution folder from breaking UDT reload behavior.

[Figure: UDT - Advanced options: distribution folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-dist-folder.png)

When a bundler or framework is involved, run `npm install` or `yarn install` so its dependencies are present. UDT does not install dependencies automatically.

### Watch for changes

Most projects built around bundlers include a build command dedicated to watching source changes. UDT does not know about those build steps, so automatic plugin reloads after updates require two actions:

- Start the plugin's `watch` build process from a terminal
- From the Developer Tool, choose **Load & Watch** for the desired plugin

When the terminal `watch` process detects a change and rebuilds the plugin, UDT recognizes the updated build and reloads the plugin in the host environment.

### Package your plugin for distribution

UDT can package a plugin as a `.ccx` installer file for sharing through the [Adobe Creative Cloud Marketplace](uxp-distribution.md) or another distribution channel. For complete coverage of distribution, see the [Share & Distribute Guide](uxp-distribution-2.md).
