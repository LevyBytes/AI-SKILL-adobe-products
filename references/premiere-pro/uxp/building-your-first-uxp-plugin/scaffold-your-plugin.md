# 1. Scaffold your Plugin

Use [UDT](../essential-development-tools-for-uxp/first-launch.md) to create a starter project from templates by choosing **Create Plugin**.

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

```text
Test-fm0dom
├── manifest.json     🔧 Plugin configuration
├── index.html        🌐 User Interface
├── index.js          💻 Logic
└── README.md         📝 Documentation
```
