# Conflict with third-party plugins

PDF export can become unstable when third-party plugins installed in InDesign interfere with the export engine. If exporting works after the plugins are removed, restore them one at a time to locate the conflict, then ask that plugin's developer for an update.

Choose Help > Configure Plug-Ins (Windows) or InDesign > Configure Plug-Ins (macOS).

In the Set dropdown menu, choose All Plug-Ins.

In Display, clear every option except Third Party so the list shows non-Adobe plugins.

Record which third-party plugins are present, then quit InDesign.

Open the Plugins folder, then relocate every third-party plugin into a temporary folder that is not inside C:\Program Files\Adobe\Adobe InDesign &lt;version&gt;\Plug-Ins (Windows) or /Applications/Adobe InDesign &lt;version&gt;/Plug-Ins (macOS).

Restart InDesign and open the document.

Use File > Export, then choose Adobe PDF (Print) or Adobe PDF (Interactive) in the Format dropdown menu.
