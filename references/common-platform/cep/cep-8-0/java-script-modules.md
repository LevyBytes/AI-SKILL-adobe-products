# JavaScript Modules

CEP supports third-party node JavaScript modules. The directory containing the HTML file becomes the root lookup path for third-party modules. For example, a require call from `file:///your_extension/index.html` causes CEP to search under `file:///your_extension/node_modules`, matching the upstream node rule.
