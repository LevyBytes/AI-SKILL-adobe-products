# Creating a Plugin with the UXP Developer Tool

Photoshop is installed, the UXP Developer Tool is available, and Visual Studio Code or another programmer's text editor is ready. The next step is creating and loading a plugin.

Begin by confirming that the UXP Developer Tool (UDT) is installed. Installation details for UDT are available [here](installation.md). Then proceed through these steps:

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
