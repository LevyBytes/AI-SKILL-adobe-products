# Devtool, Distribution

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adobe UXP Developer Tool; Installation; Plugin management; Plugin workflows; Creating a Plugin with the UXP Developer Tool; Working with React; Distribution Options; Sharing Your Plugin; Packaging Your Plugin.

## Adobe UXP Developer Tool

Use the Adobe UXP Developer Tool to create, load, debug, and package plugins based on UXP.

### Overview

With the Adobe UXP Developer Tool, you can manage plugins you are building for Photoshop and other UXP-powered host applications. It supports template-based plugin creation, plus loading and debugging for plugins under development.

**IMPORTANT**:
The Adobe UXP Developer Tool needs elevated privileges to work correctly. If an administrator does not allow elevation to Administrator privileges, this tool cannot be used.

### Installation

Install the Adobe UXP Developer Tools through the Adobe Creative Cloud application. For more installation detail, see the [Installation guide](uxp-guides-2.md).

### Usage

[Installation](uxp-guides-2.md)

Step-by-step installation guide.

[Walkthrough](uxp-guides-2.md)

End-to-end tutorial that covers plugin creation plus loading into Photoshop.

[Plugin management](uxp-guides-2.md)

Manage plugins while they are under active development.

[Plugin workflows](uxp-guides-2.md)

Routine workflows for plugin development.

[Working with React](uxp-guides-2.md)

Advanced workflows for React-based plugin development.

## Installation

Use [this download link](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) to install UXP Developer Tools, or follow these steps:

- Launch Adobe Creative Cloud Application. If it is missing, use the [Creative Cloud download](https://creativecloud.adobe.com/apps/download/creative-cloud).
- Authenticate with your Adobe account if needed.
- Open the `All apps` section; "UXP Developer Tools" should be listed there.
  [Figure: Creative cloud](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/ccd-allapps-udt.png)
- Select the `Install` button on the `UXP Developer Tools` card to begin installation.

### Launching for the first time

At the first launch of the Developer Tool, you will be asked to enable Developer Mode. Developer Mode is necessary for loading development plugins into Photoshop.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/devmode.png)

After you click `Enable`, the tool requests elevated permissions, and it may ask for a password or approval of a Developer Tool action.

[Figure: Elevated Permissions request](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/macos-elevated-permissions.png)

If that step causes problems, Developer Mode can also be configured manually, but Administrative privileges are required:

- Close the UXP Developer Tool
- For macOS, go to `/Library/Application Support/Adobe/UXP/Developer`; for Windows, go to `%CommonProgramFiles%/Adobe/UXP/Developer`. (If that folder is absent, create it with administrative rights.)
- Add a new file named `settings.json` with the following contents (administrative rights are required to save it):
  ```json
  { "developer": true }
  ```
- Launch the UXP Developer Tool again.

## Plugin management

Use the UXP Developer Tool to create plugins from templates and add existing plugins to your developer workspace.

### Creating a new plugin

Manual plugin setup is possible, but templates usually get a project moving faster. In the Developer Tool, create a template-based plugin this way:

- Choose \*_Create Plugin..._.
- The dialog titled "Create Plugin" opens.
- In **Plugin Name**, type the plugin name.
- In **Plugin Id**, type the plugin ID. For local development, any identifier is acceptable if it does not collide with another plugin on the same system; for publishing, obtain one here: https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/. That destination is the Developer Distribution portal.
- Put the plugin version in **Plugin Version**.
- In **Host Application**, choose **Adobe Photoshop**.
- In **Host Application Version**, enter `23.0.0` as the minimum version. UXP plugins are not supported by earlier Photoshop releases. If the plugin depends on APIs added after that release, use the later required version instead.
- In **Template**, choose a template. The "ps-starter" template creates a small plugin without extra frameworks, while "ps-react-starter" creates a React-based plugin.
- Choose **Select Folder**.
- Pick the location for the plugin. The files are generated _inside the selected folder_; when the plugin should live in its own directory, create that directory from this dialog first.

After the files are generated, the Tool's workspace lists the new plugin.

### Adding an existing plugin

The Developer Tool can also register a plugin project that already exists; creating a fresh plugin is not the only path.

- Choose **Add Plugin...**. If no plugins have been added yet, the button text is **Add Existing Plugin...**.
- A file picker opens. Use it to select the `manifest.json` file in the plugin folder.
- After the picker closes, the workspace includes that plugin.

### Removing a plugin

With many plugin projects, the workspace can become crowded. To remove one from the workspace, select the checkbox associated with that plugin, then choose **Remove Selected** in the upper-right corner.

This workspace removal does **not** delete the plugin from storage. The same plugin can be added again later.

## Plugin workflows

After a plugin has been placed in the developer workspace, several actions become available for it. Use the **•••**/**Actions** dropdown attached to each plugin to reach the features below.

### Load plugin

Adding a plugin to the developer workspace does not automatically install it into the host application it supports. Launch the host application first, then ask the plugin to start in that host with **••• > Load**. That workflow lets you keep using the marketplace build when you are not actively developing, and switch to the development build when you need to make a new plugin version.

When loading succeeds, a small green notification at the bottom of the screen reports that the plugin loaded. When loading _fails_, a small red notification appears with a **Details** link. Selecting that link opens the application logs so you can diagnose why loading failed.

After the plugin is already running, **Reload** is the usual action for viewing behavior changes. If you changed the plugin's `manifest.json` file, use **Load** instead so the plugin starts again from scratch.

Photoshop can block the visible load result when it is in a "modal" state, such as showing a dialog or waiting for a tool change to be committed, for example after a crop operation. In that state, the plugin may seem not to load and no message appears. If no success or failure indication shows up right away, return to Photoshop and leave any modal state; the plugin will load after that. The same modal-state caution applies to every loading-related action.

### Reload plugin

Choosing **Reload** restarts execution after reloading the plugin's code. The manifest is _not_ reloaded by this action.

### Watch plugin folder for changes

After a plugin is loaded, choose **Watch** to monitor its code for edits. Detected changes trigger an automatic reload. When watching is active, choose **Unwatch** to turn monitoring off.

### Debug your plugin

After a plugin is loaded, choose **Debug** to open a customized Chrome Developer Tools build for plugin debugging. Breakpoints, the console, source maps, and similar debugger features are available. Some limitations remain, including no CSS style editing in the property inspector, but you can still step through code, inspect elements, and perform other debugging work.

When debugging is finished, close the debugger window.

### Show plugin logs

For fast access to logs produced through `console.log` or similar calls, choose the **Logs** action. The debugger opens directly on the JavaScript console.

### Package your plugins for distribution

When a plugin is ready to share, choose **Package** to prepare it for distribution. After you select a folder, the package is written there. The package name always comes from the plugin's ID.

### Open your plugin folder

With many plugin projects, locating source code through the file system can be awkward. Use **Open Folder** to open the plugin's directory in Finder or Explorer.

### Edit options

For plugin debugging, "break on start" can be useful. With that option enabled, loading the plugin immediately stops in the debugger so you can inspect the initialization routines.

The **Advanced** section lets you define the plugin build folder relative to its `manifest.json` file. This helps when [working with React](uxp-guides-2.md) or other bundlers.

To keep edits to these settings, choose **Save**.

## Creating a Plugin with the UXP Developer Tool

Photoshop is installed, the UXP Developer Tool is available, and Visual Studio Code or another programmer's text editor is ready. The next step is creating and loading a plugin.

Begin by confirming that the UXP Developer Tool (UDT) is installed. Installation details for UDT are available [here](uxp-guides-2.md). Then proceed through these steps:

1. Launch Photoshop.
2. Launch the UXP Developer Tool. On a first launch, the window should look like this:

[Figure: UDT Start](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-start.png)

The same window also appears when no plugins are loaded in the Tool.

The left pane lists applications that are "connected" to the tool. At this time, only Photoshop and XD can connect. In that pane, "Adobe Photoshop" should appear in the `Connected Applications` list. If it is missing, UDT is not connected to Photoshop. Check that Photoshop is at least version 22.0.0, because earlier releases did not support UXP.

The center pane lists the plugins loaded in UDT, and at this point there are none. A gear icon appears at the top right; selecting it opens this sheet:

[Figure: UDT gear icon sheet](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-gear-icon.png)

The Service Port is used by UDT to communicate with host applications and normally does not need adjustment. The theme may be changed if desired.

3. Close that sheet, then click `Create Plugin`. This dialog appears:

[Figure: Create Plugin dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/create-plugin.png)

4. Complete the fields. Gray text is cue text, _not_ a default value, so every field must be filled in. Use a unique plugin name (i.e. do not call it "Layers") and a plugin ID. Choose "Adobe Photoshop" for the Host Application. Choose "ps-starter" for the Template.

**IMPORTANT**:
For distribution, obtain a plugin ID here: https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/. That page belongs to the Developer Distribution portal. For testing, it is fine to invent an id such as 'com.yourname.pluginname'.

This exercise uses `ps-starter`; that template generates a minimal plain-JavaScript plugin without libraries. In the `Template` popup, `ps-react-starter` is another choice and generates a basic React plugin.

5. Click `Next`. UDT asks where the plugin files should be saved. It _does not_ create a folder by default, so save into an empty folder that already exists, or use the Save dialog's upper-left `create folder` icon:

[Figure: Create Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/create-folder.png)

6. After saving the plugin files, the Developer Tool shows this message:

[Figure: Plugin Created](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/success.png)

> The message says extra terminal commands are needed. For simple JavaScript-only plugins this is not true; it applies only to React-based plugins.

7. Load the new plugin by clicking the `•••` (aka "Actions") menu next to the newly created plugin name, then select `Load`.

[Figure: Load Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/load-plugin.png)

Near the bottom edge of UDT, a message like this should appear:

[Figure: Load Successful](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-load-successful.png)

In Photoshop, the new plugin panel should now be running.

If loading failed, an error popup like this appears:

[Figure: Load Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-load-failed.png)

Use the `Details` link in that message to open an error log explaining why the plugin did not load:

[Figure: Failure Log](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-failure-log.png)

### Now What?

Customize the plugin by editing the .js and .html files, and add CSS if needed. Tailor it to your project. Remember to update the `README.md` file and, when necessary, the `manifest.json` file.

If the plugin panel has been closed in Photoshop, open it again from Photoshop's `Plugin` menu:

[Figure: Plugins Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-ps-plugins-menu.png)

### Watching, Reloading, and Debugging

Choosing `Watch` from the Actions menu makes the Developer Tool monitor your on-disk code for changes.
When a project file changes, UDT reloads the plugin automatically. That creates a quick edit -> mistake -> fix -> reload loop.

Manual reload is also available by choosing `Reload` from the Actions menu. With `Watch` enabled, this usually is unnecessary, though some users still prefer the manual action.

To debug the plugin, choose `Debug` from the Actions menu. A window like this opens:

[Figure: Debug Window](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-debugger.png)

This debugger resembles the Chrome debugger and supports viewing the console log, setting breakpoints, stepping into and out of functions, and similar tasks. To inspect logs without working through the full debugger, choose `Logs` from the Actions menu.

### Multiple Plugins

The UXP Developer Tool can host as many plugins as needed. You may build the plugin folder structure and files yourself, then click the blue `Add Plugin` button in the Tool, or click `Create Plugin` and let the wizard generate the files. After that, choose `Load` in the Actions menu to load the plugin into Photoshop.

### Packaging

Before distributing a plugin, after it has been thoroughly polished and debugged, package it as a "ccx" file. Choose `Package` in the Actions menu to do this. Before packaging for distribution, make sure you have a plugin ID from this site: https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/. That site is the Developer Distribution portal.

To distribute your plugin, see [Sharing Your Plugin](uxp-guides-2.md).

## Working with React

React, other frameworks, and bundlers such as Webpack and Parcel require some understanding of how they fit into the developer tool workflow. The right option depends on the workflow you need.

### Adding a plugin to the workspace

In this scenario, the project effectively has _two_ `manifest.json` files: one in the plugin source code directory and another in the plugin distribution directory.

Either file can be loaded, but the difference matters.

- When the distribution `manifest.json` is used to add the plugin, the plugin loads entirely from the distribution folder. If the build process deletes and recreates that folder, or cleans all files inside it, reloads in the developer tool may fail.
- Using the source `manifest.json` to add the plugin is preferred, but the plugin options also need editing. Open **••• > Options**, click **Advanced**, and enter the _relative_ path from the selected `manifest.json` file to the plugin distribution folder. This loads the plugin in the same way as the distribution-file approach, while build steps that remove or recreate the distribution folder will not disrupt reloading in the developer tool.

Also remember that a plugin using a bundler or framework needs its dependencies installed. For example, when downloading the Photoshop sample plugins, React-based samples require `npm install` or `yarn install`. The Developer Tool does not install those dependencies for you.

### Watching your plugin

With bundlers or frameworks, a build step commonly watches plugin files for changes. The developer tool is unaware of that build process, so automatic reloads after detected edits require this setup:

- Run the `watch` build process in a terminal
- Use **••• > Watch** on the desired plugin from the Developer Tool

When the `watch` build process notices a change, it rebuilds the plugin. The resulting build output is what the Developer Tool detects, causing it to reload the plugin in the host.

## Distribution Options

After the plugin has been packaged, the next step is distribution. The available paths are:

### Distribute on Creative Cloud Plugin Marketplace

Submit through the Developer Distribution portal when you want the plugin listed on the Plugin Marketplace and exposed to many users.
Creative Cloud desktop app users can download the plugin there directly.

- [Developer Distribution Documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/)

### Direct distribution with `.ccx` files

Share the plugin with family, friends, or coworkers. You can send the `.ccx` file by email, though a cloud folder is often the more practical download location. Installation only requires double-clicking the `.ccx` file, which hands the install to the Creative Cloud application. This route is simple, but after that double-click users must pass the warning dialogs asking "do you trust this?".

## Sharing Your Plugin

For any plugin meant for people beyond yourself, you need a way to publish it. This section covers the path from a local plugin to something other users can discover and install.

- [Packaging Your Plugin](https://raw.githubusercontent.com/guides/distribution/packaging-your-plugin/index.md)
- [Options for Distribution](https://raw.githubusercontent.com/guides/distribution/distribution-options/index.md)

## Packaging Your Plugin

Packaging plugin code is now a straightforward process.

Photoshop UXP plugins ship as `.ccx` files. Internally, that file is a zip archive. In ordinary cases, let the tooling create the archive instead of building that zip file by hand.

**IMPORTANT**:
For distribution beyond your own computer, begin in the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) and obtain a valid ID. The id belongs in the `id` field of the plugin's `manifest.json` file; without it, Creative Cloud Marketplace distribution is not available.

In the [UXP Developer Tool](uxp-guides-2.md), open the Actions menu, which is the ellipsis at the right side of the Developer Tool window on the plugin-name row, and choose `Package`:

[Figure: Package Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/udt-package-menu.png)

A "Select target directory" dialog appears. Pick the directory where the built plugin `.ccx` file should be placed.

When `.ccx` creation finishes successfully, the Developer Tool window shows this message at the bottom:

[Figure: Package Success](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/package-success.png)

If the package operation fails, the window instead shows this result:

[Figure: Package Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/package-failed.png)

Use `Details` to open the window that explains the packaging failure.

After the `.ccx` file is built, test it locally before taking any distribution step. To install a `.ccx` file into a Creative Cloud application, double-click it. Creative Cloud opens and warns that Adobe has not verified the plugin:

[Figure: Verify Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/verify-failed.png)

Because you created this plugin, local installation is probably acceptable. Select `Install locally`; a second warning appears:

[Figure: Install Warning](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/install-warning.png)

In this specific case, _you_ are the third-party developer, so clicking OK is expected. If the `.ccx` file came from someone else, treat this dialog as a trust check and confirm the sender before continuing.

With the packaged plugin installed, run through the plugin again to verify that this packaged build behaves correctly. After that, continue to [Options for Distribution](uxp-guides-2.md) and choose how to release it.
