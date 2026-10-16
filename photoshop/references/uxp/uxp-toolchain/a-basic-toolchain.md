# A Basic Toolchain

To build a plugin based on UXP, gather these software pieces:

- A capable text editor. Any modern editor aimed at developers should be suitable. Many developers use [Visual Studio Code](https://code.visualstudio.com) because it integrates deeply with the other UXP-related tools and offers many plugins for formatting code, checking syntax, parsing JSON, and similar tasks.

- The [UXP Developer Tool](../adobe-uxp-developer-tool.md) is a GUI for loading, unloading, and debugging plugins. It also builds the `.ccx` files used when distributing the plugin to other people.

- When using the UXP CLI, a command-line environment is required. On macOS, the Terminal app is fine; on Windows, the Windows Command Prompt works. VS Code also includes a convenient built-in terminal. Many other command-line interpreters exist on both platforms, including Windows PowerShell. For plugins that do not use React, this may not matter.

[A step-by-step Photoshop UXP plugin creation walkthrough](../creating-your-first-uxp-based-photoshop-plugin/reference-index.md) is available.
