# UXP Scripts and Plugins

UXP provides two approaches for extending an application's capabilities: scripts and plugins.

A script is one JavaScript file with an application-specific extension. In InDesign the extension is `.idjs`; in Photoshop, it is `.psjs`. A plugin, by contrast, can include multiple JS, HTML, or CSS files, much like a web project, and it also needs a manifest containing the required configuration.

Use the table below to compare the remaining differences.

|  | Scripts | Plugins |
| --- | --- | --- |
| **Compatibility** | InDesign, and InDesign Server (since InDesign v18.0) | InDesign only (since InDesign v18.5) |
| **Files** | A single JavaScript file. | Javascript \\ + HTML and CSS (optional) \\ + manifest.json |
| **Manifest values** | The application has predefined values for the manifest that cannot be altered | Requires you to specifically configure manifest.json and provides flexibility |
| **Extensions** | `.idjs` | `.ccx` for sharing, otherwise a regular folder can be used to load and test with the help of UDT. |
| **User interface** | You can ask users for input only via modal dialogs. | Along with modal dialogs, you can build elaborate UI within persistent panels |
| **Distributable** \\ _(Privately, own distribution channel or via Adobe Marketplace)_ | \\ You can share your `.idjs` file with others who can include it in the scripts panel. \\ However, scripts are **not** distributable via Adobe Marketplace.\\ | Once you create a packaged plugin with a `.ccx` extension, you can share it with others in multiple ways - privately, or via Adobe Marketplace or your own distribution channel.\\ |
| **Setup** | Quickest and easiest to set up. | We offer multiple starter templates for you to get the setup up and running in no time. However, it requires some amount of understanding of the plugin `manifest`. \\ Also, if you wish to use popular frameworks such as React, Vue etc, it is possible only within plugins and may require additional setup steps. |
| **Miscellaneous** | - | You have three flavors within plugins - command, panel and hybrid plugins. \\ A **command plugin**, also referred to as a modal plugin sometimes, is almost like a headless plugin that can occasionally ask for user inputs with the help of modal dialogs (like scripts). It is the best way to convert your existing script into a plugin to make it distributable. \\\\ A **panel plugin** has a persistent UI. \\\\ **Hybrid plugins**, which will be available in the future, can let you use the power of C++ libraries alongside JavaScript. |

Use this comparison to pick the path that fits your use case. As a next step, build a starter [script guide](uxp-scripts.md) or [plugin guide](uxp-plugins.md).
