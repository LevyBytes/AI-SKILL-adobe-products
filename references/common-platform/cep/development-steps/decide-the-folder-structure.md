# 1. Decide the folder structure

Start by choosing where the extension code will live. You can install the extension at the root level or user level, based on who should have permission to use it; the [CEP 8 HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders) lists the actual paths.

Aside from the required `CSXS` folder that holds `manifest.xml`, you can organize the remaining folders flexibly. One recommended layout is:

[Figure: Extension structure](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/extension-structure.png?raw=true)

- `/CSXS` -- stores `manifest.xml`, which holds the extension configuration data. As mentioned earlier, this folder is required before the extension can appear in the host app.

- `/client` -- contains front-end HTML, JavaScript, and CSS, along with Adobe's required `CSInterface.js` library and any third-party libraries you choose to include, such as jQuery.

- `/host` -- contains ExtendScript files for the extension, such as `index.jsx` in this example. These files are used to reach and control most host-app features.

This layout separates responsibilities clearly by assigning client-side code and host-app code to different folders.
