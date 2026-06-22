# Adding Command Entrypoints, Importing Modules, Inter Plugin Comm, Plugin Lifecycle Hooks ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adding command entrypoints to your plugin; JavaScript Modules; Tutorials; Inter Plugin Communication; Plugin Lifecycle events;

##

### Status: Needs work (P2)

Author: Extensibility team (@pakrishn)
Coordinate alongside ID team for local review

#

## raw_githubusercontent_com_AdobeDocs_uxp_indesign_main_src_pages_plugins_tutorials_tbd_plugin_icons_md

### Status: Needs work (P2)

Author: Extensibility team (@pakrishn)
Coordinate alongside ID team for local review

#

## Adobe UXP Developer Tool

UDT helps manage, build, and test plugins with less manual overhead.

After UDT is installed and your first plugin has been created with it, the next step is to look at the other capabilities it provides.

### Side pane

UDT's side pane exposes a small set of basic tool settings.

### Connected apps

The left pane lists UXP-powered applications that are currently "connected" to the tool. UDT loads plugins only into applications that are already running. Once the apps have been launched, they should appear under 'Connected Applications'.

[Figure: Example of connected apps](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/connected-apps.png)

If they do not appear, UDT has failed to connect to the app. Confirm that the running application version supports UXP.

### Preferences

[Figure: UDT gear icon sheet](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-gear-icon.png)

Use preferences when you need to change the Service Port used by UDT to communicate with host applications, or when you want to choose another theme.

### Logs

Open the logs panel when you need logs from both UDT and the host application.

[Figure: UDT logs](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-logs.png)

### Read more

[Plugin management](uxp-tutorials.md)

Create new plugins or add existing ones to your workspace.

[Plugin workflows](uxp-tutorials.md)

Load, debug, and watch plugins inside the app.

[Working with React](uxp-tutorials.md)

Advanced workflows for React-based plugin work.

## Plugin management

The UXP Developer Tool can generate plugins from templates and bring existing plugin projects into your developer workspace.

You may keep multiple plugins in the UXP Developer Tool. One path is to create the plugin folder structure and files yourself, then choose `Add Plugin`; the other is to use `Create Plugin` and let the guided flow create the project.

### Creating a new plugin

During the first-plugin walkthrough, `Create Plugin` was shown as the quick path for selecting a template and producing a new plugin. Provide the name, choose a template, and the tool creates it.

### Adding an existing plugin

The Developer Tool is not limited to new plugin creation; it can also import plugin work you already have.

- Choose **Add Plugin**
- When the file picker opens, select the `manifest.json` inside your plugin folder.
- After the picker closes, the plugin appears in your workspace.

### Removing a plugin

When many plugins accumulate, the Developer Tool workspace can become crowded. To remove one from the workspace, tick that plugin's checkbox and use **Remove Selected** at the top right.

Taking a plugin out of the Developer Tool's workspace does **not** delete it from your storage. You can add the plugin back later whenever you need it.

After at least one plugin has been added to the workspace, the [next section](uxp-tutorials.md) covers the actions available for those plugins.

## Plugin workflows

After a plugin is present in your developer workspace, several controls are available for it. Each feature below is reached from the **•••**/**Actions** dropdown tied to that plugin.

### Load plugin

Adding plugins to the developer workspace does not automatically place them in a supported host application. Launch the host application first, then choose **••• > Load** for the plugin so it starts in the host. This workflow lets you keep using the marketplace build when active development is paused, while switching to the development build whenever you need to create a new version.

A successful load shows a small green notification at the bottom of the screen confirming that the plugin loaded.

[Figure: Load Successful](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-load-successful.png)

When a plugin _fails_ to load, a small red notification appears with a **Details** link.

[Figure: Load Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-load-failed.png)

Selecting the `Details` link in this message opens an error log that explains why the plugin did not load:

[Figure: Failure Log](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-failure-log.png)

After the plugin is loaded, **Reload** is usually the action to use when checking behavior changes. If you edit the plugin's `manifest.json` file, use **Unload** and then **Load** so the plugin starts again from scratch.

### Watching and Reloading

Choosing `Watch` from the Actions menu instructs the Developer Tool to monitor code changes on disk.
When a project file changes, UDT reloads the plugin automatically, creating a quick edit->break things->repair them->reload loop.

Manual reload is also available by choosing `Reload` from the Actions menu. With `Watch` enabled, that step should not be necessary, though some developers still prefer it.

Manifest edits are different: this action does _not_ refresh those changes. Use **Unload** and **Load** on the plugin again for that case.

### Debug your plugin

To debug a plugin, choose `Debug` from the Actions menu. That opens a window like this:

[Figure: Debug Window](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-debugger.png)

This debugger resembles the Chrome Developer tool and lets you inspect the console log, set breakpoints, step into and out of functions, walk through code, inspect elements, and use the usual debugging tools.

For startup debugging, you may also enable "break on start" for a plugin. The plugin enters the debugger immediately after it loads, which lets you trace the initialization routines. Select `More` from the Actions menu and check 'Break on start'.

When debugging is finished, close the debugger window.

### Package your plugins for distribution

After a plugin is polished, debugged, and ready to share, distribution requires packaging it as a "ccx" file.

- Before packaging for distribution, get a plugin ID through the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) website.
- Generate the ccx file by choosing the `Package` option in the Actions menu.
- Choose the folder where the ccx file should be stored. The plugin package is always named after the plugin's ID.

For distribution details, read [Sharing Your Plugin](uxp-for-adobe-indesign.md).

The **Advanced** section lets you set the plugin's build folder, measured from its `manifest.json` file. This is especially useful when [working with React](uxp-tutorials.md) or other bundlers.

## Working with React

When React, another framework, or a bundler such as Webpack or Parcel is part of the project, you need to understand how that tooling fits inside the developer tool. The available choices vary with the workflow you need.

### Adding a plugin to the workspace

In this scenario, the plugin effectively has _two_ `manifest.json` files. One belongs to the plugin's source code directory, and the other belongs to the plugin's distribution directory.

Either file can be loaded, but the differences matter.

- Adding the plugin with the distribution `manifest.json` loads it entirely from the distribution folder. If your build steps remove and recreate that distribution folder, or clear all files inside it, the plugin may not reload correctly in the developer tool.
- Adding the plugin with the source `manifest.json` is preferred, but it also requires editing the plugin's options. Open **••• > Options**, click **Advanced**, then enter the _relative_ path from the selected `manifest.json` file to the plugin's distribution folder. The plugin loads in the same manner as the previous point, while build steps that remove or recreate the distribution folder no longer interfere with reloading the plugin in the developer tool.

Also note that when you add a plugin that uses a bundler or framework, you must install its dependencies yourself with `npm install` or `yarn install`. The Developer Tool will not do that for you.

### Watching your plugin

Bundler or framework workflows usually include a build step that watches your plugin for changes. Because the developer tool does not know about those build steps, automatic reload after changes requires both actions:

- Start the plugin's `watch` build process from a terminal
- In the Developer Tool, choose **••• > Watch** for the desired plugin

When the `watch` build process detects a change, it rebuilds the plugin. The Developer Tool then sees the generated build changes and reloads the plugin in the host.
