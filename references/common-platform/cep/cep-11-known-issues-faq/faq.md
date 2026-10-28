# FAQ

- **CEP 10 to CEP 11 migration Guidelines: [CEP 10 to CEP 11](../cep-11-1/cep-10-to-cep-11-migration.md)**

- **When a similar error appears in the debug console, confirm\verfiy these items**

  [Figure: require not function](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/CEP_11.x/Documentation/images/issues/requireNotFunction.png)

  - Verify that CEPEngine_extensions.js is NOT integrated in your extension

  - Node may be crashing. Update node_modules with the CEP 11-supported [node release](../cep-11-1/node-js.md).
