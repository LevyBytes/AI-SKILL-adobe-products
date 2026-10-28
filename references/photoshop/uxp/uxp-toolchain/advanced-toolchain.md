# Advanced Toolchain

If you use the UXP Developer Tool with plain JavaScript rather than React, the following tools are probably unnecessary.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. Web projects often use it on the backend. For UXP, it acts as an engine that helps manage plugin installation from a command-line environment.

- [npm](https://www.npmjs.com): a "package manager" included with Node. It manages project dependencies, meaning the other code and files needed for the plugin to function. If your plugin is bare HTML/CSS/js, npm is likely not needed.

- [yarn](https://yarnpkg.com): a Node package manager that positions itself as a "better" alternative to npm. Many developers, including Photoshop UXP tool builders, select yarn rather than npm.
