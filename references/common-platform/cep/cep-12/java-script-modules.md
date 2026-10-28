# JavaScript Modules

All third-party node JavaScript modules are supported. Third-party modules use the directory containing the HTML file as their root search path. For example, a require call from `file:///your_extension/index.html` makes CEP look for modules under `file:///your_extension/node_modules`; this matches upstream node behavior.
