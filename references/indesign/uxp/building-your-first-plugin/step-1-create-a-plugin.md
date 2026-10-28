# Step 1: Create a plugin

Start in the UXP Developer Tool: open the tool, then select **Create Plugin**.

A dialog appears where you provide the plugin details:

[Figure: Screenshot of the create plugin dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/create-plugin.png)

Enter this information in the dialog:

| Field | Value |
| --- | --- |
| Name | My First Plugin |
| Host Application | Adobe InDesign |
| Host Application Version | 18.5 |
| Template | quick-starter |

Next, click **Select Folder** and pick the machine location where the plugin should be created.

The UXP Developer Tool creates a new folder using the name and location you supplied. That folder contains these files:

```text
My First Plugin
├── manifest.json
├── index.html
└── index.js
```
