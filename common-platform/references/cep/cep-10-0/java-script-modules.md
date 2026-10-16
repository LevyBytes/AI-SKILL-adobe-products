# JavaScript Modules

CEP supports all third-party node JavaScript modules. The folder containing your HTML file is the top-level lookup location for third-party modules. For instance, if `require` runs from `file:///your_extension/index.html`, CEP resolves modules below `file:///your_extension/node_modules`; this follows upstream node behavior.
