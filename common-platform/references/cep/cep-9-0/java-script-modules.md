# JavaScript Modules

Third-party node JavaScript modules are all supported. CEP searches for those modules from the directory containing the HTML file. For example, a require call in `file:///your_extension/index.html` makes CEP look under `file:///your_extension/node_modules`, matching upstream node's rule.
